import { SurveyFormData } from '@/types/survey';

export interface ValidationError {
  field: string;
  message: string;
}

export interface SectionValidationResult {
  isValid: boolean;
  errors: ValidationError[];
}

/**
 * Validate required fields for each section
 */
export function validateSection(
  sectionIndex: number,
  formData: SurveyFormData,
  locale: string = 'vi'
): SectionValidationResult {
  const errors: ValidationError[] = [];

  const messages = {
    required: locale === 'vi' ? 'Trường này là bắt buộc' : 'This field is required',
    invalidEmail: locale === 'vi' ? 'Email không hợp lệ' : 'Invalid email address',
  };

  const addError = (field: string, message: string) => {
    errors.push({ field, message });
  };

  const isRequired = (value: string | undefined | null): boolean => {
    return !value || value.trim() === '';
  };

  const isInvalidEmail = (value: string): boolean => {
    if (!value) return false;
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return !emailRegex.test(value);
  };

  switch (sectionIndex) {
    case 0: // Institution Profile
      if (isRequired(formData.institutionName)) {
        addError('institutionName', messages.required);
      }
      if (isRequired(formData.institutionType1)) {
        addError('institutionType1', messages.required);
      }
      if (formData.institutionType1 === 'school' && isRequired(formData.institutionType2)) {
        addError('institutionType2', messages.required);
      }
      if (isRequired(formData.institutionType)) {
        addError('institutionType', messages.required);
      }
      if (isRequired(formData.studentPopulation)) {
        addError('studentPopulation', messages.required);
      }
      if (isRequired(formData.employeeCount)) {
        addError('employeeCount', messages.required);
      }
      if (isRequired(formData.facultyCount)) {
        addError('facultyCount', messages.required);
      }
      if (isRequired(formData.fiscalYear)) {
        addError('fiscalYear', messages.required);
      }
      if (isRequired(formData.contactName)) {
        addError('contactName', messages.required);
      }
      if (isRequired(formData.contactEmail)) {
        addError('contactEmail', messages.required);
      } else if (isInvalidEmail(formData.contactEmail)) {
        addError('contactEmail', messages.invalidEmail);
      }
      if (isRequired(formData.contactRole)) {
        addError('contactRole', messages.required);
      }
      break;

    case 1: // IT Organization
      if (isRequired(formData.itReportingStructure)) {
        addError('itReportingStructure', messages.required);
      }
      if (isRequired(formData.itStaffCount)) {
        addError('itStaffCount', messages.required);
      }
      break;

    case 2: // IT Processes
      if (isRequired(formData.itilMaturity)) {
        addError('itilMaturity', messages.required);
      }
      break;

    case 3: // Applications Portfolio
      if (isRequired(formData.totalApplications)) {
        addError('totalApplications', messages.required);
      }
      break;

    case 4: // Process Mapping
      // Optional section - no required fields
      break;

    case 5: // Data Analytics
      if (isRequired(formData.biTool)) {
        addError('biTool', messages.required);
      }
      break;

    case 6: // AI Technology
      if (isRequired(formData.aiStrategy)) {
        addError('aiStrategy', messages.required);
      }
      break;

    case 7: // Infrastructure
      if (isRequired(formData.datacenterStrategy)) {
        addError('datacenterStrategy', messages.required);
      }
      break;

    case 8: // Security
      if (isRequired(formData.securityFramework)) {
        addError('securityFramework', messages.required);
      }
      break;

    case 9: // Financial
      if (isRequired(formData.totalItBudget)) {
        addError('totalItBudget', messages.required);
      }
      break;

    case 10: // Digitization
      // Optional section - no required fields
      break;
  }

  return {
    isValid: errors.length === 0,
    errors,
  };
}

/**
 * Get field-specific error message
 */
export function getFieldError(
  errors: ValidationError[],
  fieldName: string
): string | undefined {
  const error = errors.find((e) => e.field === fieldName);
  return error?.message;
}

