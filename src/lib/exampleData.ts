/**
 * Example Data for Survey Sections
 * Used for testing and demonstration purposes
 */

import { SurveyFormData } from '@/types/survey';

// Section 0: Institution Profile
// Example based on NHG - Tập đoàn Giáo dục Nguyễn Hoàng (https://nhg.vn/vi/thanh-vien)
export const exampleInstitutionProfile: Partial<SurveyFormData> = {
  institutionName: 'Tập đoàn Giáo dục Nguyễn Hoàng (NHG)',
  institutionType1: 'school',
  institutionType2: 'sna',
  institutionType: 'private_multi_campus',
  studentPopulation: '65000',
  employeeCount: '8500',
  facultyCount: '4200',
  campusCount: '35',
  contactName: 'Trần Minh Đức',
  contactEmail: 'it.director@nhg.vn',
  contactRole: 'Giám đốc Công nghệ Thông tin',
  fiscalYear: 'FY2024',
};

// Section 1: IT Organization
// Example based on NHG - large multi-campus education group with 35+ campuses
export const exampleITOrganization: Partial<SurveyFormData> = {
  itReportingStructure: 'coo',
  cioCtoTitle: 'Giám đốc Công nghệ Thông tin (CIO)',
  itStaffCount: '120',
  organizationalModel: 'hybrid',
  itFteBreakdown: {
    leadership: '12',
    infrastructure: '25',
    applications: '22',
    security: '15',
    servicedesk: '28',
    projectmgmt: '8',
    data: '10',
    network: '12',
    other: '8',
  },
};

// Section 2: IT Processes
export const exampleITProcesses: Partial<SurveyFormData> = {
  itilMaturity: '3',
  serviceDesk: {
    tool: 'ServiceNow',
    monthlyTickets: '3500',
    fcr: '72',
    resolutionTime: '18',
    availability: '24x7',
  },
  changeManagement: {
    cabFrequency: 'weekly',
    successRate: '94',
    tool: 'ServiceNow Change Management',
  },
  incidentManagement: {
    mttr: '4',
    majorIncidents: '2',
  },
  problemManagement: {
    knownErrors: '45',
    rootCauseAnalysis: 'yes',
  },
  assetManagement: {
    tool: 'ServiceNow ITAM',
    cmdbAccuracy: '87',
    coverage: '92',
  },
};

// Section 3: Applications Portfolio
export const exampleApplications: Partial<SurveyFormData> = {
  sis: {
    vendor: 'Ellucian Banner',
    hosting: 'hybrid',
    integration: 'API & ETL',
    customization: 'moderate',
  },
  lms: {
    vendor: 'Canvas by Instructure',
    hosting: 'cloud_saas',
    users: '28000',
    satisfaction: '4',
  },
  erp: {
    vendor: 'Workday',
    version: '2024.1',
    hosting: 'cloud_saas',
    implementationYear: '2021',
    modules: ['finance', 'hr', 'procurement'],
    integration: 'API',
  },
  crm: {
    vendor: 'Salesforce Education Cloud',
    purpose: 'comprehensive',
    users: '120',
  },
  totalApplications: '145',
  integrationPlatform: 'MuleSoft Anypoint',
  apiManagementTool: 'MuleSoft API Manager',
  ssoProvider: 'Azure Active Directory',
  etlTool: 'Informatica PowerCenter',
  studentPortal: 'Custom built on React',
  facultyPortal: 'Canvas + Custom integration',
  mobileApp: 'Native iOS & Android',
  librarySystem: 'Ex Libris Alma',
  advisingSystem: 'EAB Navigate',
  careerServices: 'Handshake',
};

// Section 4: Process Mapping
// Process keys must match: recruitment, admissions, registration, courseDelivery, gradeManagement, 
// financialAid, billing, degreeAudit, advising, retention, graduation, alumni
export const exampleProcessMapping: Partial<SurveyFormData> = {
  processSystemMappings: [
    {
      process: 'recruitment',
      primarySystem: 'CRM',
      supportingSystems: 'Website, Email Marketing',
      dataFlow: 'Web → CRM → SIS',
    },
    {
      process: 'admissions',
      primarySystem: 'CRM',
      supportingSystems: 'SIS, DocuSign',
      dataFlow: 'CRM → SIS',
    },
    {
      process: 'registration',
      primarySystem: 'SIS',
      supportingSystems: 'LMS, Portal',
      dataFlow: 'SIS ↔ LMS',
    },
    {
      process: 'courseDelivery',
      primarySystem: 'LMS',
      supportingSystems: 'Zoom, SIS',
      dataFlow: 'LMS ↔ SIS',
    },
    {
      process: 'gradeManagement',
      primarySystem: 'SIS',
      supportingSystems: 'LMS, BI',
      dataFlow: 'LMS → SIS → BI',
    },
    {
      process: 'financialAid',
      primarySystem: 'ERP',
      supportingSystems: 'SIS, Document Imaging',
      dataFlow: 'SIS → ERP',
    },
    {
      process: 'billing',
      primarySystem: 'ERP',
      supportingSystems: 'SIS, Payment Gateway',
      dataFlow: 'SIS → ERP → Bank',
    },
    {
      process: 'degreeAudit',
      primarySystem: 'SIS',
      supportingSystems: 'BI, Reporting',
      dataFlow: 'SIS → BI',
    },
    {
      process: 'advising',
      primarySystem: 'SIS',
      supportingSystems: 'CRM, LMS',
      dataFlow: 'SIS ↔ CRM',
    },
    {
      process: 'retention',
      primarySystem: 'BI',
      supportingSystems: 'SIS, LMS, CRM',
      dataFlow: 'All → BI → Alerts',
    },
    {
      process: 'graduation',
      primarySystem: 'SIS',
      supportingSystems: 'ERP, Document Mgmt',
      dataFlow: 'SIS → ERP',
    },
    {
      process: 'alumni',
      primarySystem: 'CRM',
      supportingSystems: 'SIS, Fundraising',
      dataFlow: 'SIS → CRM',
    },
  ],
  integrationChallenges: 'Data synchronization delays between SIS and LMS during peak registration. Manual reconciliation required for financial data.',
  integrationGaps: ['sisLms', 'crmSis', 'biAll', 'manualReconciliation'],
  integrationMaturityLevel: '3',
  activeIntegrations: '78',
};

// Section 5: Data Analytics
export const exampleDataAnalytics: Partial<SurveyFormData> = {
  dataWarehouse: {
    platform: 'Snowflake',
    status: 'production',
    coverage: '75',
  },
  biTool: 'Tableau Server',
  dataGovernance: 'formal',
  dataLake: 'pilot',
  masterData: 'Student data: SIS (Banner/Ellucian)\nEmployee data: Workday HCM\nFinance data: Workday Finance\nCourse catalog: SIS\nUsing Informatica MDM for data quality and matching.',
  dataQualityScore: '78',
};

// Section 6: AI Technology
export const exampleAITechnology: Partial<SurveyFormData> = {
  aiStrategy: 'developing',
  aiSpending: '$250,000',
  aiUseCases: [
    'Chatbots & Virtual Assistants',
    'Predictive Analytics',
    'Student Success Prediction',
    'Automated Grading',
    'Administrative Automation'
  ],
  aiPlatforms: 'Microsoft Azure AI, OpenAI API, Google Vertex AI',
  aiGovernance: 'developing',
  aiInitiatives: 'Currently piloting AI chatbot for student services. Developing predictive analytics for student retention. Challenges include data quality, faculty adoption, and budget constraints. Future plans include AI-powered content generation for course materials.',
};

// Section 7: Infrastructure
export const exampleInfrastructure: Partial<SurveyFormData> = {
  datacenterStrategy: 'hybrid',
  datacenterLocation: 'On-campus primary + Azure secondary',
  cloudAdoption: {
    providers: ['AWS', 'Microsoft Azure', 'Google Cloud'],
    spend: '$1,200,000',
    workloadPercent: '55',
    strategy: 'cloud_first',
  },
  networkInfra: {
    vendor: 'Cisco',
    bandwidth: '10',
    wifi: 'wifi6',
    sdwan: 'deployed',
    wanProvider: 'VNPT + Viettel (redundant)',
  },
  virtualizationPlatform: 'VMware vSphere 8',
  backupSolution: 'Veeam Backup & Replication',
  drSite: 'Azure Site Recovery',
};

// Section 8: Security
export const exampleSecurity: Partial<SurveyFormData> = {
  securityFramework: 'nist',
  securityReporting: 'cio',
  complianceStandards: ['FERPA', 'GDPR', 'SOC 2', 'PCI DSS'],
  securityTools: {
    endpoint: 'CrowdStrike Falcon',
    siem: 'Microsoft Sentinel',
    iam: 'Azure AD Premium P2',
    firewall: 'Palo Alto Networks',
    dlp: 'Microsoft Purview',
  },
  mfaImplementation: 'universal',
  securityTraining: 'annual_mandatory',
  lastSecurityAudit: 'June 2024',
  securityIncidents: '3',
};

// Section 9: Financial
export const exampleFinancial: Partial<SurveyFormData> = {
  totalItBudget: '$18,500,000',
  itBudgetPercent: '5.2',
  costPerStudent: '528',
  costPerEmployee: '4111',
  capexOpexRatio: '35:65',
  budgetBreakdown: {
    personnel: '38',
    hardware: '12',
    software: '22',
    cloud: '15',
    telecom: '5',
    security: '8',
    projects: '10',
    support: '6',
    training: '2',
    other: '2',
  },
};

// Section 10: Digitization
export const exampleDigitization: Partial<SurveyFormData> = {
  processMaturity: {
    admissions: '4',
    enrollment: '4',
    academic: '3',
    student_services: '3',
    alumni: '2',
    curriculum: '3',
    quality: '2',
    library: '4',
    research: '3',
    finance: '4',
    hr: '4',
    procurement: '3',
    facilities: '2',
  },
  quickWins: ['Online enrollment forms', 'Digital signatures', 'Mobile student ID'],
  processDigitizationScore: '3.5',
  dataMaturityScore: '3',
  itOperationsScore: '4',
  painPoints: 'Manual data entry for legacy systems, siloed data between departments, lack of real-time reporting for academic advisors.',
};

// Map section index to example data
export const sectionExampleData: Record<number, Partial<SurveyFormData>> = {
  0: exampleInstitutionProfile,
  1: exampleITOrganization,
  2: exampleITProcesses,
  3: exampleApplications,
  4: exampleProcessMapping,
  5: exampleDataAnalytics,
  6: exampleAITechnology,
  7: exampleInfrastructure,
  8: exampleSecurity,
  9: exampleFinancial,
  10: exampleDigitization,
};

/**
 * Get example data for a specific section
 */
export function getExampleDataForSection(sectionIndex: number): Partial<SurveyFormData> {
  return sectionExampleData[sectionIndex] || {};
}

