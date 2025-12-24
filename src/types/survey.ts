/**
 * ITSM Survey Types
 * Defines all data structures for the survey application
 */

// IT FTE Breakdown
export interface ITFteBreakdown {
  leadership: string;
  infrastructure: string;
  applications: string;
  security: string;
  servicedesk: string;
  projectmgmt: string;
  data: string;
  network: string;
  other: string;
}

// Service Desk
export interface ServiceDesk {
  tool: string;
  monthlyTickets: string;
  fcr: string;
  resolutionTime: string;
  availability: string;
}

// Change Management
export interface ChangeManagement {
  cabFrequency: string;
  successRate: string;
  tool: string;
}

// Incident Management
export interface IncidentManagement {
  mttr: string;
  majorIncidents: string;
}

// Problem Management
export interface ProblemManagement {
  knownErrors: string;
  rootCauseAnalysis: string;
}

// Asset Management
export interface AssetManagement {
  tool: string;
  cmdbAccuracy: string;
  coverage: string;
}

// ERP System
export interface ERPSystem {
  vendor: string;
  version: string;
  hosting: string;
  implementationYear: string;
  modules: string[];
  integration: string;
}

// LMS System
export interface LMSSystem {
  vendor: string;
  hosting: string;
  users: string;
  satisfaction: string;
}

// SIS System
export interface SISSystem {
  vendor: string;
  hosting: string;
  integration: string;
  customization: string;
}

// CRM System
export interface CRMSystem {
  vendor: string;
  purpose: string;
  users: string;
}

// Data Warehouse
export interface DataWarehouse {
  platform: string;
  status: string;
  coverage: string;
}

// Cloud Adoption
export interface CloudAdoption {
  providers: string[];
  spend: string;
  workloadPercent: string;
  strategy: string;
}

// Network Infrastructure
export interface NetworkInfra {
  vendor: string;
  bandwidth: string;
  wifi: string;
  sdwan: string;
  wanProvider: string;
}

// Security Tools
export interface SecurityTools {
  endpoint: string;
  siem: string;
  iam: string;
  firewall: string;
  dlp: string;
}

// Budget Breakdown
export interface BudgetBreakdown {
  personnel: string;
  hardware: string;
  software: string;
  cloud: string;
  telecom: string;
  security: string;
  projects: string;
  support: string;
  training: string;
  other: string;
}

// Process Maturity
export interface ProcessMaturity {
  admissions: string;
  enrollment: string;
  academic: string;
  student_services: string;
  alumni: string;
  curriculum: string;
  quality: string;
  library: string;
  research: string;
  finance: string;
  hr: string;
  procurement: string;
  facilities: string;
  [key: string]: string;
}

// Process System Mapping
export interface ProcessSystemMapping {
  process: string;
  primarySystem: string;
  supportingSystems: string;
  dataFlow: string;
}

// Complete Survey Form Data
export interface SurveyFormData {
  // Institution Profile
  institutionName: string;
  institutionType1: string;
  institutionType2: string;
  institutionType: string;
  studentPopulation: string;
  employeeCount: string;
  facultyCount: string;
  campusCount: string;
  contactName: string;
  contactEmail: string;
  contactRole: string;
  fiscalYear: string;

  // IT Organization Structure
  itReportingStructure: string;
  cioCtoTitle: string;
  itStaffCount: string;
  itFteBreakdown: ITFteBreakdown;
  organizationalModel: string;
  sourcingModel: Record<string, string>;

  // IT Processes & ITSM Maturity
  itilMaturity: string;
  serviceDesk: ServiceDesk;
  changeManagement: ChangeManagement;
  incidentManagement: IncidentManagement;
  problemManagement: ProblemManagement;
  assetManagement: AssetManagement;

  // Applications Landscape
  erp: ERPSystem;
  lms: LMSSystem;
  sis: SISSystem;
  crm: CRMSystem;
  totalApplications: string;
  applicationsByCategory: Record<string, string>;
  integrationPlatform: string;
  apiManagementTool: string;
  ssoProvider: string;
  etlTool: string;
  
  // Additional Applications
  studentPortal: string;
  facultyPortal: string;
  mobileApp: string;
  librarySystem: string;
  advisingSystem: string;
  careerServices: string;

  // Process-System Mapping
  processSystemMappings: ProcessSystemMapping[];
  integrationChallenges: string;
  integrationGaps: string[];
  integrationMaturityLevel: string;
  activeIntegrations: string;

  // Data & Analytics
  dataWarehouse: DataWarehouse;
  biTool: string;
  dataGovernance: string;
  dataLake: string;
  masterData: Record<string, string>;
  dataQualityScore: string;

  // AI & Emerging Technologies
  aiStrategy: string;
  aiSpending: string;
  aiUseCases: string[];
  aiPlatforms: string;
  aiGovernance: string;

  // Infrastructure & Cloud
  datacenterStrategy: string;
  datacenterLocation: string;
  cloudAdoption: CloudAdoption;
  networkInfra: NetworkInfra;
  virtualizationPlatform: string;
  backupSolution: string;
  drSite: string;

  // Security & Compliance
  securityFramework: string;
  securityReporting: string;
  complianceStandards: string[];
  securityTools: SecurityTools;
  mfaImplementation: string;
  securityTraining: string;
  lastSecurityAudit: string;
  securityIncidents: string;

  // IT Financial Data
  totalItBudget: string;
  budgetBreakdown: BudgetBreakdown;
  itBudgetPercent: string;
  costPerStudent: string;
  costPerEmployee: string;
  capexOpexRatio: string;

  // Process Digitization
  processMaturity: ProcessMaturity;
  quickWins: string[];

  // Digital Maturity Scores
  processDigitizationScore: string;
  dataMaturityScore: string;
  itOperationsScore: string;
  painPoints: string;
}

// Survey Response from Database
export interface SurveyResponse {
  id: string;
  institution_id: string | null;
  created_at: string;
  updated_at: string;
  language: 'vi' | 'en';
  form_data: SurveyFormData;
  current_section: number;
  completed_sections: number[];
  is_completed: boolean;
}

// API Response Types
export interface ApiResponse<T> {
  success: boolean;
  data?: T;
  error?: string;
}

// Section Names
export const SURVEY_SECTIONS = [
  'institution',
  'itOrganization',
  'itProcesses',
  'applications',
  'processMapping',
  'dataAnalytics',
  'aiTechnology',
  'infrastructure',
  'security',
  'financial',
  'digitization'
] as const;

export type SurveySection = typeof SURVEY_SECTIONS[number];

// Initial form data factory
export function createInitialFormData(): SurveyFormData {
  return {
    institutionName: '',
    institutionType1: '',
    institutionType2: '',
    institutionType: '',
    studentPopulation: '',
    employeeCount: '',
    facultyCount: '',
    campusCount: '',
    contactName: '',
    contactEmail: '',
    contactRole: '',
    fiscalYear: '',
    itReportingStructure: '',
    cioCtoTitle: '',
    itStaffCount: '',
    itFteBreakdown: {
      leadership: '',
      infrastructure: '',
      applications: '',
      security: '',
      servicedesk: '',
      projectmgmt: '',
      data: '',
      network: '',
      other: ''
    },
    organizationalModel: '',
    sourcingModel: {},
    itilMaturity: '',
    serviceDesk: {
      tool: '',
      monthlyTickets: '',
      fcr: '',
      resolutionTime: '',
      availability: ''
    },
    changeManagement: {
      cabFrequency: '',
      successRate: '',
      tool: ''
    },
    incidentManagement: {
      mttr: '',
      majorIncidents: ''
    },
    problemManagement: {
      knownErrors: '',
      rootCauseAnalysis: ''
    },
    assetManagement: {
      tool: '',
      cmdbAccuracy: '',
      coverage: ''
    },
    erp: {
      vendor: '',
      version: '',
      hosting: '',
      implementationYear: '',
      modules: [],
      integration: ''
    },
    lms: {
      vendor: '',
      hosting: '',
      users: '',
      satisfaction: ''
    },
    sis: {
      vendor: '',
      hosting: '',
      integration: '',
      customization: ''
    },
    crm: {
      vendor: '',
      purpose: '',
      users: ''
    },
    totalApplications: '',
    applicationsByCategory: {},
    integrationPlatform: '',
    apiManagementTool: '',
    ssoProvider: '',
    etlTool: '',
    studentPortal: '',
    facultyPortal: '',
    mobileApp: '',
    librarySystem: '',
    advisingSystem: '',
    careerServices: '',
    processSystemMappings: [],
    integrationChallenges: '',
    integrationGaps: [],
    integrationMaturityLevel: '',
    activeIntegrations: '',
    dataWarehouse: {
      platform: '',
      status: '',
      coverage: ''
    },
    biTool: '',
    dataGovernance: '',
    dataLake: '',
    masterData: {},
    dataQualityScore: '',
    aiStrategy: '',
    aiSpending: '',
    aiUseCases: [],
    aiPlatforms: '',
    aiGovernance: '',
    datacenterStrategy: '',
    datacenterLocation: '',
    cloudAdoption: {
      providers: [],
      spend: '',
      workloadPercent: '',
      strategy: ''
    },
    networkInfra: {
      vendor: '',
      bandwidth: '',
      wifi: '',
      sdwan: '',
      wanProvider: ''
    },
    virtualizationPlatform: '',
    backupSolution: '',
    drSite: '',
    securityFramework: '',
    securityReporting: '',
    complianceStandards: [],
    securityTools: {
      endpoint: '',
      siem: '',
      iam: '',
      firewall: '',
      dlp: ''
    },
    mfaImplementation: '',
    securityTraining: '',
    lastSecurityAudit: '',
    securityIncidents: '',
    totalItBudget: '',
    budgetBreakdown: {
      personnel: '',
      hardware: '',
      software: '',
      cloud: '',
      telecom: '',
      security: '',
      projects: '',
      support: '',
      training: '',
      other: ''
    },
    itBudgetPercent: '',
    costPerStudent: '',
    costPerEmployee: '',
    capexOpexRatio: '',
    processMaturity: {
      admissions: '',
      enrollment: '',
      academic: '',
      student_services: '',
      alumni: '',
      curriculum: '',
      quality: '',
      library: '',
      research: '',
      finance: '',
      hr: '',
      procurement: '',
      facilities: ''
    },
    quickWins: [],
    processDigitizationScore: '',
    dataMaturityScore: '',
    itOperationsScore: '',
    painPoints: ''
  };
}

