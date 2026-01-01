import { z } from 'zod';

/**
 * Zod validation schemas for survey data
 */

// IT FTE Breakdown schema
export const itFteBreakdownSchema = z.object({
  leadership: z.string().optional(),
  infrastructure: z.string().optional(),
  applications: z.string().optional(),
  security: z.string().optional(),
  servicedesk: z.string().optional(),
  projectmgmt: z.string().optional(),
  data: z.string().optional(),
  network: z.string().optional(),
  other: z.string().optional(),
});

// Service Desk schema
export const serviceDeskSchema = z.object({
  tool: z.string().optional(),
  monthlyTickets: z.string().optional(),
  fcr: z.string().optional(),
  resolutionTime: z.string().optional(),
  availability: z.string().optional(),
});

// Change Management schema
export const changeManagementSchema = z.object({
  cabFrequency: z.string().optional(),
  successRate: z.string().optional(),
  tool: z.string().optional(),
});

// Incident Management schema
export const incidentManagementSchema = z.object({
  mttr: z.string().optional(),
  majorIncidents: z.string().optional(),
});

// Problem Management schema
export const problemManagementSchema = z.object({
  knownErrors: z.string().optional(),
  rootCauseAnalysis: z.string().optional(),
});

// Asset Management schema
export const assetManagementSchema = z.object({
  tool: z.string().optional(),
  cmdbAccuracy: z.string().optional(),
  coverage: z.string().optional(),
});

// ERP System schema
export const erpSystemSchema = z.object({
  vendor: z.string().optional(),
  version: z.string().optional(),
  hosting: z.string().optional(),
  implementationYear: z.string().optional(),
  modules: z.array(z.string()).optional(),
  integration: z.string().optional(),
});

// LMS System schema
export const lmsSystemSchema = z.object({
  vendor: z.string().optional(),
  hosting: z.string().optional(),
  users: z.string().optional(),
  satisfaction: z.string().optional(),
});

// SIS System schema
export const sisSystemSchema = z.object({
  vendor: z.string().optional(),
  hosting: z.string().optional(),
  integration: z.string().optional(),
  customization: z.string().optional(),
});

// CRM System schema
export const crmSystemSchema = z.object({
  vendor: z.string().optional(),
  purpose: z.string().optional(),
  users: z.string().optional(),
});

// Data Warehouse schema
export const dataWarehouseSchema = z.object({
  platform: z.string().optional(),
  status: z.string().optional(),
  coverage: z.string().optional(),
});

// Cloud Adoption schema
export const cloudAdoptionSchema = z.object({
  providers: z.array(z.string()).optional(),
  spend: z.string().optional(),
  workloadPercent: z.string().optional(),
  strategy: z.string().optional(),
});

// Network Infrastructure schema
export const networkInfraSchema = z.object({
  vendor: z.string().optional(),
  bandwidth: z.string().optional(),
  wifi: z.string().optional(),
  sdwan: z.string().optional(),
  wanProvider: z.string().optional(),
});

// Security Tools schema
export const securityToolsSchema = z.object({
  endpoint: z.string().optional(),
  siem: z.string().optional(),
  iam: z.string().optional(),
  firewall: z.string().optional(),
  dlp: z.string().optional(),
});

// Budget Breakdown schema
export const budgetBreakdownSchema = z.object({
  personnel: z.string().optional(),
  hardware: z.string().optional(),
  software: z.string().optional(),
  cloud: z.string().optional(),
  telecom: z.string().optional(),
  security: z.string().optional(),
  projects: z.string().optional(),
  support: z.string().optional(),
  training: z.string().optional(),
  other: z.string().optional(),
});

// Process Maturity schema
export const processMaturitySchema = z.record(z.string(), z.string());

// Process System Mapping schema
export const processSystemMappingSchema = z.object({
  process: z.string().optional(),
  primarySystem: z.string().optional(),
  supportingSystems: z.string().optional(),
  dataFlow: z.string().optional(),
});

// Complete Survey Form Data schema
export const surveyFormDataSchema = z.object({
  // Institution Profile
  institutionName: z.string().optional(),
  institutionType1: z.string().optional(),
  institutionType2: z.string().optional(),
  institutionType: z.string().optional(),
  studentPopulation: z.string().optional(),
  employeeCount: z.string().optional(),
  facultyCount: z.string().optional(),
  campusCount: z.string().optional(),
  contactName: z.string().optional(),
  contactEmail: z.string().email().optional().or(z.literal('')),
  contactRole: z.string().optional(),
  fiscalYear: z.string().optional(),

  // IT Organization Structure
  itReportingStructure: z.string().optional(),
  cioCtoTitle: z.string().optional(),
  itStaffCount: z.string().optional(),
  itFteBreakdown: itFteBreakdownSchema.optional(),
  organizationalModel: z.string().optional(),
  sourcingModel: z.record(z.string(), z.string()).optional(),

  // IT Processes & ITSM Maturity
  itilMaturity: z.string().optional(),
  serviceDesk: serviceDeskSchema.optional(),
  changeManagement: changeManagementSchema.optional(),
  incidentManagement: incidentManagementSchema.optional(),
  problemManagement: problemManagementSchema.optional(),
  assetManagement: assetManagementSchema.optional(),

  // Applications Landscape
  erp: erpSystemSchema.optional(),
  lms: lmsSystemSchema.optional(),
  sis: sisSystemSchema.optional(),
  crm: crmSystemSchema.optional(),
  totalApplications: z.string().optional(),
  applicationsByCategory: z.record(z.string(), z.string()).optional(),
  integrationPlatform: z.string().optional(),
  apiManagementTool: z.string().optional(),
  ssoProvider: z.string().optional(),
  etlTool: z.string().optional(),
  
  // Additional Applications
  studentPortal: z.string().optional(),
  facultyPortal: z.string().optional(),
  mobileApp: z.string().optional(),
  librarySystem: z.string().optional(),
  advisingSystem: z.string().optional(),
  careerServices: z.string().optional(),

  // Process-System Mapping
  processSystemMappings: z.array(processSystemMappingSchema).optional(),
  integrationChallenges: z.string().optional(),
  integrationGaps: z.array(z.string()).optional(),
  integrationMaturityLevel: z.string().optional(),
  activeIntegrations: z.string().optional(),

  // Data & Analytics
  dataWarehouse: dataWarehouseSchema.optional(),
  biTool: z.string().optional(),
  dataGovernance: z.string().optional(),
  dataLake: z.string().optional(),
  masterData: z.string().optional(),
  dataQualityScore: z.string().optional(),

  // AI & Emerging Technologies
  aiStrategy: z.string().optional(),
  aiSpending: z.string().optional(),
  aiUseCases: z.array(z.string()).optional(),
  aiPlatforms: z.string().optional(),
  aiGovernance: z.string().optional(),
  aiInitiatives: z.string().optional(),

  // Infrastructure & Cloud
  datacenterStrategy: z.string().optional(),
  datacenterLocation: z.string().optional(),
  cloudAdoption: cloudAdoptionSchema.optional(),
  networkInfra: networkInfraSchema.optional(),
  virtualizationPlatform: z.string().optional(),
  backupSolution: z.string().optional(),
  drSite: z.string().optional(),

  // Security & Compliance
  securityFramework: z.string().optional(),
  securityReporting: z.string().optional(),
  complianceStandards: z.array(z.string()).optional(),
  securityTools: securityToolsSchema.optional(),
  mfaImplementation: z.string().optional(),
  securityTraining: z.string().optional(),
  lastSecurityAudit: z.string().optional(),
  securityIncidents: z.string().optional(),

  // IT Financial Data
  totalItBudget: z.string().optional(),
  budgetBreakdown: budgetBreakdownSchema.optional(),
  itBudgetPercent: z.string().optional(),
  costPerStudent: z.string().optional(),
  costPerEmployee: z.string().optional(),
  capexOpexRatio: z.string().optional(),

  // Process Digitization
  processMaturity: processMaturitySchema.optional(),
  quickWins: z.array(z.string()).optional(),

  // Digital Maturity Scores
  processDigitizationScore: z.string().optional(),
  dataMaturityScore: z.string().optional(),
  itOperationsScore: z.string().optional(),
  painPoints: z.string().optional(),
});

// Survey request body schema for API
export const surveyRequestSchema = z.object({
  language: z.enum(['vi', 'en']).optional(),
  formData: surveyFormDataSchema.optional(),
  currentSection: z.number().min(0).max(10).optional(),
  completedSections: z.array(z.number()).optional(),
  isCompleted: z.boolean().optional(),
});

// Create survey request schema
export const createSurveySchema = z.object({
  language: z.enum(['vi', 'en']).default('vi'),
  formData: surveyFormDataSchema.optional(),
});

// Update survey request schema
export const updateSurveySchema = z.object({
  formData: surveyFormDataSchema.optional(),
  currentSection: z.number().min(0).max(10).optional(),
  completedSections: z.array(z.number()).optional(),
  isCompleted: z.boolean().optional(),
});

export type SurveyFormDataInput = z.infer<typeof surveyFormDataSchema>;
export type SurveyRequestInput = z.infer<typeof surveyRequestSchema>;
export type CreateSurveyInput = z.infer<typeof createSurveySchema>;
export type UpdateSurveyInput = z.infer<typeof updateSurveySchema>;

