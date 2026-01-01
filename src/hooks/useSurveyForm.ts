'use client';

import { useState, useCallback, useEffect, useRef } from 'react';
import { SurveyFormData, createInitialFormData } from '@/types/survey';
import { ValidationError, validateSection, getFieldError } from '@/lib/validations/sectionValidation';

const STORAGE_KEY = 'itsm-survey-data';
const STORAGE_VERSION = 1;
const DATA_EXPIRY_HOURS = 72; // 3 days for abandoned drafts
const AUTO_SAVE_DELAY = 30000; // 30 seconds

/**
 * Interface for stored survey data with versioning and status
 */
interface StoredSurveyData {
  version: number;
  savedAt: string;
  status: 'draft' | 'submitted';
  formData: SurveyFormData;
  currentSection: number;
  completedSections: number[];
}

interface UseSurveyFormOptions {
  surveyId?: string;
  initialData?: Partial<SurveyFormData>;
  locale?: string;
}

interface UseSurveyFormReturn {
  formData: SurveyFormData;
  currentSection: number;
  completedSections: Set<number>;
  isSaving: boolean;
  lastSaved: Date | null;
  validationErrors: ValidationError[];
  updateFormData: (field: keyof SurveyFormData, value: unknown) => void;
  updateNestedData: (parent: keyof SurveyFormData, field: string, value: unknown) => void;
  setCurrentSection: (section: number) => void;
  markSectionComplete: (section: number) => boolean;
  validateCurrentSection: () => boolean;
  getFieldError: (fieldName: string) => string | undefined;
  clearValidationErrors: () => void;
  saveData: () => Promise<void>;
  exportData: () => void;
  resetForm: () => void;
}

/**
 * Validate if stored data is still valid (correct version, not expired, not submitted)
 */
function isStoredDataValid(saved: StoredSurveyData): boolean {
  // Check version compatibility
  if (saved.version !== STORAGE_VERSION) {
    console.log('LocalStorage: Version mismatch, clearing data');
    return false;
  }
  
  // Check if already submitted
  if (saved.status === 'submitted') {
    console.log('LocalStorage: Survey was submitted, clearing data');
    return false;
  }
  
  // Check expiration
  const savedTime = new Date(saved.savedAt).getTime();
  const expiryTime = DATA_EXPIRY_HOURS * 60 * 60 * 1000;
  if (Date.now() - savedTime > expiryTime) {
    console.log('LocalStorage: Data expired, clearing');
    return false;
  }
  
  return true;
}

/**
 * Load and validate stored survey data from localStorage
 */
function loadStoredData(): StoredSurveyData | null {
  if (typeof window === 'undefined') return null;
  
  const saved = localStorage.getItem(STORAGE_KEY);
  console.log('[useSurveyForm] Loading from localStorage:', saved ? 'found data' : 'no data');
  if (!saved) return null;
  
  try {
    const parsed = JSON.parse(saved) as StoredSurveyData;
    console.log('[useSurveyForm] Parsed data - section:', parsed.currentSection, 'status:', parsed.status);
    
    // If data is invalid, clear it and return null
    if (!isStoredDataValid(parsed)) {
      console.log('[useSurveyForm] Data invalid, clearing');
      localStorage.removeItem(STORAGE_KEY);
      return null;
    }
    
    console.log('[useSurveyForm] Data valid, returning section:', parsed.currentSection);
    return parsed;
  } catch {
    // Invalid JSON, clear it
    console.log('[useSurveyForm] Invalid JSON, clearing');
    localStorage.removeItem(STORAGE_KEY);
    return null;
  }
}

/**
 * Custom hook for managing survey form state with auto-save
 */
export function useSurveyForm(options: UseSurveyFormOptions = {}): UseSurveyFormReturn {
  const { surveyId, initialData, locale = 'vi' } = options;
  
  const [validationErrors, setValidationErrors] = useState<ValidationError[]>([]);
  
  const [formData, setFormData] = useState<SurveyFormData>(() => {
    const storedData = loadStoredData();
    if (storedData?.formData) {
      return { ...createInitialFormData(), ...storedData.formData };
    }
    return { ...createInitialFormData(), ...initialData };
  });

  const [currentSection, setCurrentSectionState] = useState<number>(() => {
    const storedData = loadStoredData();
    return storedData?.currentSection ?? 0;
  });

  // Wrapper to save currentSection to localStorage immediately on change
  const setCurrentSection = useCallback((section: number) => {
    setCurrentSectionState(section);
    // Immediately persist to localStorage to survive language switches
    if (typeof window !== 'undefined') {
      try {
        const saved = localStorage.getItem(STORAGE_KEY);
        const existing = saved ? JSON.parse(saved) : {
          version: STORAGE_VERSION,
          status: 'draft' as const,
          formData: createInitialFormData(),
          completedSections: []
        };
        const dataToSave: StoredSurveyData = {
          ...existing,
          version: STORAGE_VERSION,
          currentSection: section,
          savedAt: new Date().toISOString()
        };
        localStorage.setItem(STORAGE_KEY, JSON.stringify(dataToSave));
      } catch {
        // Ignore errors
      }
    }
  }, []);

  const [completedSections, setCompletedSections] = useState<Set<number>>(() => {
    const storedData = loadStoredData();
    return new Set(storedData?.completedSections ?? []);
  });

  const [isSaving, setIsSaving] = useState(false);
  const [lastSaved, setLastSaved] = useState<Date | null>(null);
  const autoSaveTimeoutRef = useRef<NodeJS.Timeout | null>(null);
  const hasChangesRef = useRef(false);

  // Save to localStorage with proper schema
  const saveToLocalStorage = useCallback(() => {
    if (typeof window !== 'undefined') {
      const dataToSave: StoredSurveyData = {
        version: STORAGE_VERSION,
        savedAt: new Date().toISOString(),
        status: 'draft',
        formData,
        currentSection,
        completedSections: Array.from(completedSections)
      };
      localStorage.setItem(STORAGE_KEY, JSON.stringify(dataToSave));
    }
  }, [formData, currentSection, completedSections]);

  // Save data (to API if surveyId exists, otherwise localStorage)
  const saveData = useCallback(async () => {
    setIsSaving(true);
    
    try {
      if (surveyId && surveyId.startsWith('local-') === false) {
        // Save to API
        const response = await fetch(`/api/survey/${surveyId}`, {
          method: 'PATCH',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
            formData,
            currentSection,
            completedSections: Array.from(completedSections)
          })
        });
        
        if (!response.ok) {
          throw new Error('Failed to save survey');
        }
      }
      
      // Always save to localStorage as backup
      saveToLocalStorage();
      setLastSaved(new Date());
      hasChangesRef.current = false;
    } catch (error) {
      console.error('Error saving survey:', error);
      // Still save to localStorage even if API fails
      saveToLocalStorage();
    } finally {
      setIsSaving(false);
    }
  }, [surveyId, formData, currentSection, completedSections, saveToLocalStorage]);

  // Auto-save effect
  useEffect(() => {
    if (hasChangesRef.current) {
      if (autoSaveTimeoutRef.current) {
        clearTimeout(autoSaveTimeoutRef.current);
      }
      
      autoSaveTimeoutRef.current = setTimeout(() => {
        saveData();
      }, AUTO_SAVE_DELAY);
    }

    return () => {
      if (autoSaveTimeoutRef.current) {
        clearTimeout(autoSaveTimeoutRef.current);
      }
    };
  }, [formData, saveData]);

  // Update form data
  const updateFormData = useCallback((field: keyof SurveyFormData, value: unknown) => {
    setFormData(prev => ({ ...prev, [field]: value }));
    hasChangesRef.current = true;
  }, []);

  // Update nested form data
  const updateNestedData = useCallback((parent: keyof SurveyFormData, field: string, value: unknown) => {
    setFormData(prev => {
      const parentValue = prev[parent];
      if (typeof parentValue === 'object' && parentValue !== null) {
        return {
          ...prev,
          [parent]: { ...parentValue, [field]: value }
        };
      }
      return prev;
    });
    hasChangesRef.current = true;
  }, []);

  // Validate current section
  const validateCurrentSection = useCallback(() => {
    const result = validateSection(currentSection, formData, locale);
    setValidationErrors(result.errors);
    return result.isValid;
  }, [currentSection, formData, locale]);

  // Clear validation errors
  const clearValidationErrors = useCallback(() => {
    setValidationErrors([]);
  }, []);

  // Get error for specific field
  const getFieldErrorFn = useCallback((fieldName: string) => {
    return getFieldError(validationErrors, fieldName);
  }, [validationErrors]);

  // Mark section as complete (with validation)
  const markSectionComplete = useCallback((section: number): boolean => {
    const result = validateSection(section, formData, locale);
    setValidationErrors(result.errors);
    
    if (result.isValid) {
      setCompletedSections(prev => new Set([...prev, section]));
      hasChangesRef.current = true;
      return true;
    }
    return false;
  }, [formData, locale]);

  // Export data as JSON
  const exportData = useCallback(() => {
    const dataStr = JSON.stringify(formData, null, 2);
    const dataBlob = new Blob([dataStr], { type: 'application/json' });
    const url = URL.createObjectURL(dataBlob);
    const link = document.createElement('a');
    link.href = url;
    link.download = `${formData.institutionName || 'institution'}_itsm_data.json`;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    URL.revokeObjectURL(url);
  }, [formData]);

  // Reset form and clear localStorage
  const resetForm = useCallback(() => {
    // Clear any pending auto-save first
    if (autoSaveTimeoutRef.current) {
      clearTimeout(autoSaveTimeoutRef.current);
      autoSaveTimeoutRef.current = null;
    }
    
    // Reset all state
    const initialFormData = createInitialFormData();
    setFormData(initialFormData);
    setCurrentSectionState(0);
    setCompletedSections(new Set());
    setValidationErrors([]);
    setLastSaved(null);
    hasChangesRef.current = false;
    
    // Write fresh data to localStorage (not just clear) to prevent stale reads
    if (typeof window !== 'undefined') {
      const freshData: StoredSurveyData = {
        version: STORAGE_VERSION,
        savedAt: new Date().toISOString(),
        status: 'draft',
        formData: initialFormData,
        currentSection: 0,
        completedSections: []
      };
      localStorage.setItem(STORAGE_KEY, JSON.stringify(freshData));
    }
  }, []);

  return {
    formData,
    currentSection,
    completedSections,
    isSaving,
    lastSaved,
    validationErrors,
    updateFormData,
    updateNestedData,
    setCurrentSection,
    markSectionComplete,
    validateCurrentSection,
    getFieldError: getFieldErrorFn,
    clearValidationErrors,
    saveData,
    exportData,
    resetForm
  };
}
