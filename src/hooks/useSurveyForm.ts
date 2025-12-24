'use client';

import { useState, useCallback, useEffect, useRef } from 'react';
import { SurveyFormData, createInitialFormData } from '@/types/survey';

const STORAGE_KEY = 'itsm-survey-data';
const AUTO_SAVE_DELAY = 30000; // 30 seconds

interface UseSurveyFormOptions {
  surveyId?: string;
  initialData?: Partial<SurveyFormData>;
}

interface UseSurveyFormReturn {
  formData: SurveyFormData;
  currentSection: number;
  completedSections: Set<number>;
  isSaving: boolean;
  lastSaved: Date | null;
  updateFormData: (field: keyof SurveyFormData, value: unknown) => void;
  updateNestedData: (parent: keyof SurveyFormData, field: string, value: unknown) => void;
  setCurrentSection: (section: number) => void;
  markSectionComplete: (section: number) => void;
  saveData: () => Promise<void>;
  exportData: () => void;
  resetForm: () => void;
}

/**
 * Custom hook for managing survey form state with auto-save
 */
export function useSurveyForm(options: UseSurveyFormOptions = {}): UseSurveyFormReturn {
  const { surveyId, initialData } = options;
  
  const [formData, setFormData] = useState<SurveyFormData>(() => {
    // Try to load from localStorage on initial mount
    if (typeof window !== 'undefined') {
      const saved = localStorage.getItem(STORAGE_KEY);
      if (saved) {
        try {
          const parsed = JSON.parse(saved);
          return { ...createInitialFormData(), ...parsed.formData };
        } catch {
          // Ignore parse errors
        }
      }
    }
    return { ...createInitialFormData(), ...initialData };
  });

  const [currentSection, setCurrentSectionState] = useState<number>(() => {
    if (typeof window !== 'undefined') {
      const saved = localStorage.getItem(STORAGE_KEY);
      if (saved) {
        try {
          const parsed = JSON.parse(saved);
          return parsed.currentSection || 0;
        } catch {
          // Ignore parse errors
        }
      }
    }
    return 0;
  });

  // Wrapper to save currentSection to localStorage immediately on change
  const setCurrentSection = useCallback((section: number) => {
    setCurrentSectionState(section);
    // Immediately persist to localStorage to survive language switches
    if (typeof window !== 'undefined') {
      try {
        const saved = localStorage.getItem(STORAGE_KEY);
        const existing = saved ? JSON.parse(saved) : {};
        localStorage.setItem(STORAGE_KEY, JSON.stringify({
          ...existing,
          currentSection: section,
          savedAt: new Date().toISOString()
        }));
      } catch {
        // Ignore errors
      }
    }
  }, []);

  const [completedSections, setCompletedSections] = useState<Set<number>>(() => {
    if (typeof window !== 'undefined') {
      const saved = localStorage.getItem(STORAGE_KEY);
      if (saved) {
        try {
          const parsed = JSON.parse(saved);
          return new Set(parsed.completedSections || []);
        } catch {
          // Ignore parse errors
        }
      }
    }
    return new Set();
  });

  const [isSaving, setIsSaving] = useState(false);
  const [lastSaved, setLastSaved] = useState<Date | null>(null);
  const autoSaveTimeoutRef = useRef<NodeJS.Timeout | null>(null);
  const hasChangesRef = useRef(false);

  // Save to localStorage
  const saveToLocalStorage = useCallback(() => {
    if (typeof window !== 'undefined') {
      const dataToSave = {
        formData,
        currentSection,
        completedSections: Array.from(completedSections),
        savedAt: new Date().toISOString()
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

  // Mark section as complete
  const markSectionComplete = useCallback((section: number) => {
    setCompletedSections(prev => new Set([...prev, section]));
    hasChangesRef.current = true;
  }, []);

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

  // Reset form
  const resetForm = useCallback(() => {
    setFormData(createInitialFormData());
    setCurrentSection(0);
    setCompletedSections(new Set());
    if (typeof window !== 'undefined') {
      localStorage.removeItem(STORAGE_KEY);
    }
    hasChangesRef.current = false;
  }, []);

  return {
    formData,
    currentSection,
    completedSections,
    isSaving,
    lastSaved,
    updateFormData,
    updateNestedData,
    setCurrentSection,
    markSectionComplete,
    saveData,
    exportData,
    resetForm
  };
}

