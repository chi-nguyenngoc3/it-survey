import { SurveyFormData } from '@/types/survey';

export interface ValidationError {
  field: string;
  message: string;
}

export interface SectionValidationResult {
  isValid: boolean;
  errors: ValidationError[];
}

// Field labels for validation messages
const fieldLabels: Record<string, { vi: string; en: string }> = {
  // Institution Profile
  institutionName: { vi: 'Tên Cơ sở', en: 'Institution Name' },
  institutionType1: { vi: 'Loại Cơ sở (Cấp 1)', en: 'Institution Type (Level 1)' },
  institutionType2: { vi: 'Hệ thống Trường (Cấp 2)', en: 'School System (Level 2)' },
  institutionType: { vi: 'Loại Cơ sở (Học thuật)', en: 'Institution Type (Academic)' },
  studentPopulation: { vi: 'Số lượng Sinh viên', en: 'Student Population' },
  employeeCount: { vi: 'Tổng số Nhân viên', en: 'Employee Count' },
  facultyCount: { vi: 'Số lượng Giảng viên', en: 'Faculty Count' },
  fiscalYear: { vi: 'Năm Tài chính', en: 'Fiscal Year' },
  contactName: { vi: 'Tên Liên hệ', en: 'Contact Name' },
  contactEmail: { vi: 'Email Liên hệ', en: 'Contact Email' },
  contactRole: { vi: 'Chức vụ', en: 'Contact Role' },
  
  // IT Organization
  itReportingStructure: { vi: 'Cấu trúc Báo cáo IT', en: 'IT Reporting Structure' },
  cioCtoTitle: { vi: 'Chức danh CIO/CTO', en: 'CIO/CTO Title' },
  itStaffCount: { vi: 'Số lượng Nhân viên IT', en: 'IT Staff Count' },
  organizationalModel: { vi: 'Mô hình Tổ chức', en: 'Organizational Model' },
  
  // IT Processes
  itilMaturity: { vi: 'Mức độ Trưởng thành ITIL', en: 'ITIL Maturity Level' },
  'serviceDesk.tool': { vi: 'Công cụ ITSM', en: 'Service Desk Tool' },
  'changeManagement.cabFrequency': { vi: 'Tần suất họp CAB', en: 'CAB Meeting Frequency' },
  
  // Applications
  totalApplications: { vi: 'Tổng số Ứng dụng', en: 'Total Applications' },
  'sis.vendor': { vi: 'Nhà cung cấp SIS', en: 'SIS Vendor' },
  'sis.hosting': { vi: 'Hình thức triển khai SIS', en: 'SIS Hosting' },
  'lms.vendor': { vi: 'Nhà cung cấp LMS', en: 'LMS Vendor' },
  'lms.hosting': { vi: 'Hình thức triển khai LMS', en: 'LMS Hosting' },
  'erp.vendor': { vi: 'Nhà cung cấp ERP', en: 'ERP Vendor' },
  'erp.hosting': { vi: 'Hình thức triển khai ERP', en: 'ERP Hosting' },
  
  // Data Analytics
  biTool: { vi: 'Công cụ BI', en: 'BI Tool' },
  
  // AI Technology
  aiStrategy: { vi: 'Chiến lược AI', en: 'AI Strategy' },
  
  // Infrastructure
  datacenterStrategy: { vi: 'Chiến lược Datacenter', en: 'Datacenter Strategy' },
  
  // Security
  securityFramework: { vi: 'Framework Bảo mật', en: 'Security Framework' },
  
  // Financial
  totalItBudget: { vi: 'Tổng Ngân sách IT', en: 'Total IT Budget' },
};

/**
 * Get field label based on locale
 */
function getFieldLabel(field: string, locale: string): string {
  const label = fieldLabels[field];
  if (label) {
    return locale === 'vi' ? label.vi : label.en;
  }
  return field;
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

  const templates = {
    required: locale === 'vi' 
      ? (fieldName: string) => `"${fieldName}" là trường bắt buộc`
      : (fieldName: string) => `"${fieldName}" is required`,
    invalidEmail: locale === 'vi' 
      ? (fieldName: string) => `"${fieldName}" không hợp lệ`
      : (fieldName: string) => `"${fieldName}" is invalid`,
  };

  const addError = (field: string, type: 'required' | 'invalidEmail') => {
    const label = getFieldLabel(field, locale);
    const message = templates[type](label);
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
        addError('institutionName', 'required');
      }
      if (isRequired(formData.institutionType1)) {
        addError('institutionType1', 'required');
      }
      if (formData.institutionType1 === 'school' && isRequired(formData.institutionType2)) {
        addError('institutionType2', 'required');
      }
      if (isRequired(formData.institutionType)) {
        addError('institutionType', 'required');
      }
      if (isRequired(formData.studentPopulation)) {
        addError('studentPopulation', 'required');
      }
      if (isRequired(formData.employeeCount)) {
        addError('employeeCount', 'required');
      }
      if (isRequired(formData.facultyCount)) {
        addError('facultyCount', 'required');
      }
      if (isRequired(formData.fiscalYear)) {
        addError('fiscalYear', 'required');
      }
      if (isRequired(formData.contactName)) {
        addError('contactName', 'required');
      }
      if (isRequired(formData.contactEmail)) {
        addError('contactEmail', 'required');
      } else if (isInvalidEmail(formData.contactEmail)) {
        addError('contactEmail', 'invalidEmail');
      }
      if (isRequired(formData.contactRole)) {
        addError('contactRole', 'required');
      }
      break;

    case 1: // IT Organization
      if (isRequired(formData.itReportingStructure)) {
        addError('itReportingStructure', 'required');
      }
      if (isRequired(formData.cioCtoTitle)) {
        addError('cioCtoTitle', 'required');
      }
      if (isRequired(formData.itStaffCount)) {
        addError('itStaffCount', 'required');
      }
      if (isRequired(formData.organizationalModel)) {
        addError('organizationalModel', 'required');
      }
      break;

    case 2: // IT Processes
      if (isRequired(formData.itilMaturity)) {
        addError('itilMaturity', 'required');
      }
      if (isRequired(formData.serviceDesk?.tool)) {
        addError('serviceDesk.tool', 'required');
      }
      if (isRequired(formData.changeManagement?.cabFrequency)) {
        addError('changeManagement.cabFrequency', 'required');
      }
      break;

    case 3: // Applications Portfolio
      if (isRequired(formData.sis?.vendor)) {
        addError('sis.vendor', 'required');
      }
      if (isRequired(formData.sis?.hosting)) {
        addError('sis.hosting', 'required');
      }
      if (isRequired(formData.lms?.vendor)) {
        addError('lms.vendor', 'required');
      }
      if (isRequired(formData.lms?.hosting)) {
        addError('lms.hosting', 'required');
      }
      if (isRequired(formData.erp?.vendor)) {
        addError('erp.vendor', 'required');
      }
      if (isRequired(formData.erp?.hosting)) {
        addError('erp.hosting', 'required');
      }
      if (isRequired(formData.totalApplications)) {
        addError('totalApplications', 'required');
      }
      break;

    case 4: // Process Mapping
      // Optional section - no required fields
      break;

    case 5: // Data Analytics
      if (isRequired(formData.biTool)) {
        addError('biTool', 'required');
      }
      break;

    case 6: // AI Technology
      if (isRequired(formData.aiStrategy)) {
        addError('aiStrategy', 'required');
      }
      break;

    case 7: // Infrastructure
      if (isRequired(formData.datacenterStrategy)) {
        addError('datacenterStrategy', 'required');
      }
      break;

    case 8: // Security
      if (isRequired(formData.securityFramework)) {
        addError('securityFramework', 'required');
      }
      break;

    case 9: // Financial
      if (isRequired(formData.totalItBudget)) {
        addError('totalItBudget', 'required');
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
