import { google } from 'googleapis';
import { SurveyFormData } from '@/types/survey';
import * as fs from 'fs';
import * as path from 'path';

// Sheet configuration
const SHEET_NAME = 'Sheet1';
const SPREADSHEET_ID = process.env.GOOGLE_SHEET_ID;

// Paths for Google credentials file (Render Secret Files)
const CREDENTIALS_PATHS = [
  '/etc/secrets/google-credentials.json',  // Render Secret Files location
  path.join(process.cwd(), 'google-credentials.json'),  // App root
];

// Complete column headers for the spreadsheet - matching all survey fields
export const SHEET_HEADERS = [
  // Metadata (5 fields)
  'Row ID',
  'Timestamp',
  'Language',
  'Current Section',
  'Is Completed',
  
  // Section 0: Institution Profile (12 fields)
  'Institution Name',
  'Institution Type 1',
  'Institution Type 2',
  'Institution Type',
  'Student Population',
  'Employee Count',
  'Faculty Count',
  'Campus Count',
  'Contact Name',
  'Contact Email',
  'Contact Role',
  'Fiscal Year',
  
  // Section 1: IT Organization (16 fields)
  'IT Reporting Structure',
  'CIO/CTO Title',
  'IT Staff Count',
  'IT FTE - Leadership',
  'IT FTE - Infrastructure',
  'IT FTE - Applications',
  'IT FTE - Security',
  'IT FTE - Service Desk',
  'IT FTE - Project Mgmt',
  'IT FTE - Data',
  'IT FTE - Network',
  'IT FTE - Other',
  'Organizational Model',
  'Sourcing - Infrastructure',
  'Sourcing - Applications',
  'Sourcing - Service Desk',
  'Sourcing - Security',
  
  // Section 2: IT Processes (10 fields)
  'ITIL Maturity',
  'Service Desk Tool',
  'Monthly Tickets',
  'FCR',
  'Resolution Time',
  'Service Desk Availability',
  'PM Methodology',
  'Annual Projects',
  'Project Success Rate',
  'SDLC Practice',
  
  // Section 3: Applications Portfolio (28 fields)
  'SIS Vendor',
  'SIS Hosting',
  'SIS Users',
  'SIS Satisfaction',
  'LMS Vendor',
  'LMS Hosting',
  'LMS Users',
  'LMS Satisfaction',
  'ERP Vendor',
  'ERP Hosting',
  'ERP Users',
  'ERP Satisfaction',
  'HRIS Vendor',
  'HRIS Hosting',
  'HRIS Users',
  'HRIS Satisfaction',
  'CRM Vendor',
  'CRM Purpose',
  'CRM Hosting',
  'CRM Users',
  'CRM Satisfaction',
  'Library Vendor',
  'Library Users',
  'Portal Vendor',
  'Portal Users',
  'Total Applications',
  'SaaS Percent',
  'Integration Strategy',
  
  // Section 4: Process Mapping (5 fields)
  'Process System Mappings (JSON)',
  'Integration Challenges',
  'Integration Gaps',
  'Integration Maturity Level',
  'Active Integrations',
  
  // Section 5: Data Analytics (7 fields)
  'Data Warehouse Platform',
  'Data Warehouse Status',
  'Data Warehouse Coverage',
  'BI Tool',
  'Data Governance',
  'Data Lake',
  'Master Data',
  'Data Quality Score',
  
  // Section 6: AI Technology (6 fields)
  'AI Strategy',
  'AI Spending',
  'AI Use Cases',
  'AI Platforms',
  'AI Governance',
  'AI Initiatives',
  
  // Section 7: Infrastructure (14 fields)
  'Datacenter Strategy',
  'Datacenter Location',
  'Cloud Providers',
  'Cloud Spend',
  'Cloud Workload Percent',
  'Cloud Strategy',
  'Network Vendor',
  'Network Bandwidth',
  'Network WiFi',
  'Network SD-WAN',
  'Network WAN Provider',
  'Virtualization Platform',
  'Backup Solution',
  'DR Site',
  
  // Section 8: Security (12 fields)
  'Security Framework',
  'Security Reporting',
  'Compliance Standards',
  'Security Tool - Endpoint',
  'Security Tool - SIEM',
  'Security Tool - IAM',
  'Security Tool - Firewall',
  'Security Tool - DLP',
  'MFA Implementation',
  'Security Training',
  'Last Security Audit',
  'Security Incidents',
  
  // Section 9: Financial (15 fields)
  'Total IT Budget',
  'Budget - Personnel',
  'Budget - Hardware',
  'Budget - Software',
  'Budget - Cloud',
  'Budget - Telecom',
  'Budget - Security',
  'Budget - Projects',
  'Budget - Support',
  'Budget - Training',
  'Budget - Other',
  'IT Budget Percent',
  'Cost Per Student',
  'Cost Per Employee',
  'CapEx OpEx Ratio',
  
  // Section 10: Digitization (12 fields)
  'Process Maturity - Admissions',
  'Process Maturity - Enrollment',
  'Process Maturity - Academic',
  'Process Maturity - Finance',
  'Process Maturity - HR',
  'Process Maturity - Student Services',
  'Process Maturity - Alumni',
  'Process Maturity - Research',
  'Process Digitization Score',
  'Digital Strategy',
  'Pain Points',
  'Improvement Priorities',
  
  // Full JSON backup
  'Form Data (JSON)',
];

/**
 * Load credentials from JSON file (for Render Secret Files)
 */
function loadCredentialsFromFile(): { client_email: string; private_key: string } | null {
  for (const credPath of CREDENTIALS_PATHS) {
    try {
      if (fs.existsSync(credPath)) {
        console.log(`Loading Google credentials from: ${credPath}`);
        const content = fs.readFileSync(credPath, 'utf-8');
        const credentials = JSON.parse(content);
        
        if (credentials.client_email && credentials.private_key) {
          console.log('Successfully loaded credentials from file');
          return {
            client_email: credentials.client_email,
            private_key: credentials.private_key,
          };
        }
      }
    } catch (error) {
      console.log(`Could not load credentials from ${credPath}:`, error);
    }
  }
  return null;
}

/**
 * Parse private key to handle multiple formats from environment variables
 * Handles: escaped \n, literal \n, double-escaped \\n, and quoted strings
 */
function parsePrivateKey(key: string | undefined): string | null {
  if (!key) return null;
  
  let privateKey = key;
  
  // Remove surrounding quotes if present (some env var systems add them)
  if ((privateKey.startsWith('"') && privateKey.endsWith('"')) ||
      (privateKey.startsWith("'") && privateKey.endsWith("'"))) {
    privateKey = privateKey.slice(1, -1);
  }
  
  // Replace escaped newlines with actual newlines
  // Handle both \n and \\n formats
  privateKey = privateKey
    .replace(/\\\\n/g, '\n')  // \\n -> newline
    .replace(/\\n/g, '\n');    // \n -> newline
  
  // Validate PEM format
  if (!privateKey.includes('-----BEGIN') || !privateKey.includes('-----END')) {
    console.error('Invalid private key format: missing PEM headers');
    return null;
  }
  
  return privateKey;
}

/**
 * Create Google Auth client
 * Priority: 1) JSON credentials file, 2) Environment variables
 */
function createAuth() {
  // Try loading from file first (Render Secret Files)
  const fileCredentials = loadCredentialsFromFile();
  
  if (fileCredentials) {
    return new google.auth.GoogleAuth({
      credentials: {
        client_email: fileCredentials.client_email,
        private_key: fileCredentials.private_key,
      },
      scopes: ['https://www.googleapis.com/auth/spreadsheets'],
    });
  }
  
  // Fall back to environment variables
  console.log('No credentials file found, trying environment variables...');
  const clientEmail = process.env.GOOGLE_SERVICE_ACCOUNT_EMAIL;
  const privateKey = parsePrivateKey(process.env.GOOGLE_PRIVATE_KEY);

  if (!clientEmail || !privateKey) {
    console.error('Missing Google credentials - clientEmail:', !!clientEmail, 'privateKey:', !!privateKey);
    return null;
  }

  return new google.auth.GoogleAuth({
    credentials: {
      client_email: clientEmail,
      private_key: privateKey,
    },
    scopes: ['https://www.googleapis.com/auth/spreadsheets'],
  });
}

/**
 * Get Google Sheets client
 */
function getSheetsClient() {
  const auth = createAuth();
  if (!auth) return null;

  return google.sheets({ version: 'v4', auth });
}

/**
 * Initialize sheet with headers if empty
 */
export async function initializeSheet(): Promise<boolean> {
  const sheets = getSheetsClient();
  if (!sheets || !SPREADSHEET_ID) return false;

  try {
    // Check if headers exist
    const response = await sheets.spreadsheets.values.get({
      spreadsheetId: SPREADSHEET_ID,
      range: `${SHEET_NAME}!A1:Z1`,
    });

    // If no data or headers differ, update headers
    if (!response.data.values || response.data.values.length === 0) {
      await sheets.spreadsheets.values.update({
        spreadsheetId: SPREADSHEET_ID,
        range: `${SHEET_NAME}!A1`,
        valueInputOption: 'USER_ENTERED',
        requestBody: {
          values: [SHEET_HEADERS],
        },
      });
    }

    return true;
  } catch (error) {
    console.error('Error initializing sheet:', error);
    return false;
  }
}

/**
 * Generate a unique row ID
 */
function generateRowId(email: string): string {
  const timestamp = Date.now();
  const emailPrefix = email?.split('@')[0] || 'anonymous';
  return `${emailPrefix}_${timestamp}`;
}

/**
 * Flatten form data for spreadsheet row - captures ALL survey fields
 */
function flattenFormData(
  formData: Partial<SurveyFormData>,
  rowId: string,
  language: string,
  currentSection: number,
  isCompleted: boolean
): (string | number | boolean)[] {
  return [
    // Metadata
    rowId,
    new Date().toISOString(),
    language,
    currentSection,
    isCompleted,
    
    // Section 0: Institution Profile
    formData.institutionName || '',
    formData.institutionType1 || '',
    formData.institutionType2 || '',
    formData.institutionType || '',
    formData.studentPopulation || '',
    formData.employeeCount || '',
    formData.facultyCount || '',
    formData.campusCount || '',
    formData.contactName || '',
    formData.contactEmail || '',
    formData.contactRole || '',
    formData.fiscalYear || '',
    
    // Section 1: IT Organization
    formData.itReportingStructure || '',
    formData.cioCtoTitle || '',
    formData.itStaffCount || '',
    formData.itFteBreakdown?.leadership || '',
    formData.itFteBreakdown?.infrastructure || '',
    formData.itFteBreakdown?.applications || '',
    formData.itFteBreakdown?.security || '',
    formData.itFteBreakdown?.servicedesk || '',
    formData.itFteBreakdown?.projectmgmt || '',
    formData.itFteBreakdown?.data || '',
    formData.itFteBreakdown?.network || '',
    formData.itFteBreakdown?.other || '',
    formData.organizationalModel || '',
    formData.sourcingModel?.infrastructure || '',
    formData.sourcingModel?.applications || '',
    formData.sourcingModel?.servicedesk || '',
    formData.sourcingModel?.security || '',
    
    // Section 2: IT Processes
    formData.itilMaturity || '',
    formData.serviceDesk?.tool || '',
    formData.serviceDesk?.monthlyTickets || '',
    formData.serviceDesk?.fcr || '',
    formData.serviceDesk?.resolutionTime || '',
    formData.serviceDesk?.availability || '',
    formData.pmMethodology || '',
    formData.annualProjects || '',
    formData.projectSuccessRate || '',
    formData.sdlcPractice || '',
    
    // Section 3: Applications Portfolio
    formData.sis?.vendor || '',
    formData.sis?.hosting || '',
    formData.sis?.users || '',
    formData.sis?.satisfaction || '',
    formData.lms?.vendor || '',
    formData.lms?.hosting || '',
    formData.lms?.users || '',
    formData.lms?.satisfaction || '',
    formData.erp?.vendor || '',
    formData.erp?.hosting || '',
    formData.erp?.users || '',
    formData.erp?.satisfaction || '',
    formData.hris?.vendor || '',
    formData.hris?.hosting || '',
    formData.hris?.users || '',
    formData.hris?.satisfaction || '',
    formData.crm?.vendor || '',
    formData.crm?.purpose || '',
    formData.crm?.hosting || '',
    formData.crm?.users || '',
    formData.crm?.satisfaction || '',
    formData.library?.vendor || '',
    formData.library?.users || '',
    formData.portal?.vendor || '',
    formData.portal?.users || '',
    formData.totalApplications || '',
    formData.saasPercent || '',
    formData.integrationStrategy || '',
    
    // Section 4: Process Mapping
    JSON.stringify(formData.processSystemMappings || []),
    formData.integrationChallenges || '',
    (formData.integrationGaps || []).join(', '),
    formData.integrationMaturityLevel || '',
    formData.activeIntegrations || '',
    
    // Section 5: Data Analytics
    formData.dataWarehouse?.platform || '',
    formData.dataWarehouse?.status || '',
    formData.dataWarehouse?.coverage || '',
    formData.biTool || '',
    formData.dataGovernance || '',
    formData.dataLake || '',
    formData.masterData || '',
    formData.dataQualityScore || '',
    
    // Section 6: AI Technology
    formData.aiStrategy || '',
    formData.aiSpending || '',
    (formData.aiUseCases || []).join(', '),
    formData.aiPlatforms || '',
    formData.aiGovernance || '',
    formData.aiInitiatives || '',
    
    // Section 7: Infrastructure
    formData.datacenterStrategy || '',
    formData.datacenterLocation || '',
    (formData.cloudAdoption?.providers || []).join(', '),
    formData.cloudAdoption?.spend || '',
    formData.cloudAdoption?.workloadPercent || '',
    formData.cloudAdoption?.strategy || '',
    formData.networkInfra?.vendor || '',
    formData.networkInfra?.bandwidth || '',
    formData.networkInfra?.wifi || '',
    formData.networkInfra?.sdwan || '',
    formData.networkInfra?.wanProvider || '',
    formData.virtualizationPlatform || '',
    formData.backupSolution || '',
    formData.drSite || '',
    
    // Section 8: Security
    formData.securityFramework || '',
    formData.securityReporting || '',
    (formData.complianceStandards || []).join(', '),
    formData.securityTools?.endpoint || '',
    formData.securityTools?.siem || '',
    formData.securityTools?.iam || '',
    formData.securityTools?.firewall || '',
    formData.securityTools?.dlp || '',
    formData.mfaImplementation || '',
    formData.securityTraining || '',
    formData.lastSecurityAudit || '',
    formData.securityIncidents || '',
    
    // Section 9: Financial
    formData.totalItBudget || '',
    formData.budgetBreakdown?.personnel || '',
    formData.budgetBreakdown?.hardware || '',
    formData.budgetBreakdown?.software || '',
    formData.budgetBreakdown?.cloud || '',
    formData.budgetBreakdown?.telecom || '',
    formData.budgetBreakdown?.security || '',
    formData.budgetBreakdown?.projects || '',
    formData.budgetBreakdown?.support || '',
    formData.budgetBreakdown?.training || '',
    formData.budgetBreakdown?.other || '',
    formData.itBudgetPercent || '',
    formData.costPerStudent || '',
    formData.costPerEmployee || '',
    formData.capexOpexRatio || '',
    
    // Section 10: Digitization
    formData.processMaturity?.admissions || '',
    formData.processMaturity?.enrollment || '',
    formData.processMaturity?.academic || '',
    formData.processMaturity?.finance || '',
    formData.processMaturity?.hr || '',
    formData.processMaturity?.studentServices || '',
    formData.processMaturity?.alumni || '',
    formData.processMaturity?.research || '',
    formData.processDigitizationScore || '',
    formData.digitalStrategy || '',
    formData.painPoints || '',
    formData.improvementPriorities || '',
    
    // Full JSON backup
    JSON.stringify(formData),
  ];
}

/**
 * Append a new survey response
 */
export async function appendSurveyResponse(
  formData: SurveyFormData,
  language: string = 'vi',
  currentSection: number = 0,
  isCompleted: boolean = false
): Promise<{ success: boolean; rowId?: string; error?: string }> {
  const sheets = getSheetsClient();
  if (!sheets || !SPREADSHEET_ID) {
    return { success: false, error: 'Google Sheets not configured' };
  }

  try {
    await initializeSheet();

    const rowId = generateRowId(formData.contactEmail);
    const rowData = flattenFormData(formData, rowId, language, currentSection, isCompleted);

    await sheets.spreadsheets.values.append({
      spreadsheetId: SPREADSHEET_ID,
      range: `${SHEET_NAME}!A:ZZ`,
      valueInputOption: 'USER_ENTERED',
      insertDataOption: 'INSERT_ROWS',
      requestBody: {
        values: [rowData],
      },
    });

    return { success: true, rowId };
  } catch (error) {
    console.error('Error appending survey response:', error);
    return { success: false, error: String(error) };
  }
}

/**
 * Get all survey responses
 */
export async function getAllSurveyResponses(): Promise<{
  success: boolean;
  data?: Array<{ id: string; [key: string]: unknown }>;
  error?: string;
}> {
  const sheets = getSheetsClient();
  if (!sheets || !SPREADSHEET_ID) {
    return { success: false, error: 'Google Sheets not configured' };
  }

  try {
    const response = await sheets.spreadsheets.values.get({
      spreadsheetId: SPREADSHEET_ID,
      range: `${SHEET_NAME}!A:ZZ`,
    });

    const rows = response.data.values;
    if (!rows || rows.length <= 1) {
      return { success: true, data: [] };
    }

    const headers = rows[0];
    const data = rows.slice(1).map((row) => {
      const obj: { id: string; [key: string]: unknown } = { id: row[0] || '' };
      headers.forEach((header: string, index: number) => {
        obj[header] = row[index] || '';
      });
      return obj;
    });

    return { success: true, data };
  } catch (error) {
    console.error('Error fetching survey responses:', error);
    return { success: false, error: String(error) };
  }
}

/**
 * Find row index by Row ID
 */
async function findRowByRowId(rowId: string): Promise<number | null> {
  const sheets = getSheetsClient();
  if (!sheets || !SPREADSHEET_ID) return null;

  try {
    const response = await sheets.spreadsheets.values.get({
      spreadsheetId: SPREADSHEET_ID,
      range: `${SHEET_NAME}!A:A`,
    });

    const rows = response.data.values;
    if (!rows) return null;

    for (let i = 0; i < rows.length; i++) {
      if (rows[i][0] === rowId) {
        return i + 1; // 1-indexed for Sheets API
      }
    }

    return null;
  } catch (error) {
    console.error('Error finding row:', error);
    return null;
  }
}

/**
 * Get a specific survey response by Row ID
 */
export async function getSurveyResponseById(rowId: string): Promise<{
  success: boolean;
  data?: { id: string; form_data: SurveyFormData; [key: string]: unknown };
  error?: string;
}> {
  const sheets = getSheetsClient();
  if (!sheets || !SPREADSHEET_ID) {
    return { success: false, error: 'Google Sheets not configured' };
  }

  try {
    const rowIndex = await findRowByRowId(rowId);
    if (!rowIndex) {
      return { success: false, error: 'Survey not found' };
    }

    // Get headers and the specific row
    const [headersResponse, rowResponse] = await Promise.all([
      sheets.spreadsheets.values.get({
        spreadsheetId: SPREADSHEET_ID,
        range: `${SHEET_NAME}!1:1`,
      }),
      sheets.spreadsheets.values.get({
        spreadsheetId: SPREADSHEET_ID,
        range: `${SHEET_NAME}!${rowIndex}:${rowIndex}`,
      }),
    ]);

    const headers = headersResponse.data.values?.[0] || [];
    const row = rowResponse.data.values?.[0] || [];

    // Build response object
    const obj: { id: string; form_data: SurveyFormData; [key: string]: unknown } = {
      id: row[0] || '',
      form_data: {} as SurveyFormData,
    };

    headers.forEach((header: string, index: number) => {
      obj[header] = row[index] || '';
    });

    // Parse JSON form data if available
    const jsonColumnIndex = headers.indexOf('Form Data (JSON)');
    if (jsonColumnIndex !== -1 && row[jsonColumnIndex]) {
      try {
        obj.form_data = JSON.parse(row[jsonColumnIndex]);
      } catch {
        // Use empty form data if parsing fails
      }
    }

    return { success: true, data: obj };
  } catch (error) {
    console.error('Error fetching survey response:', error);
    return { success: false, error: String(error) };
  }
}

/**
 * Update a survey response by Row ID
 */
export async function updateSurveyResponse(
  rowId: string,
  formData: Partial<SurveyFormData>,
  currentSection?: number,
  isCompleted?: boolean
): Promise<{ success: boolean; error?: string }> {
  const sheets = getSheetsClient();
  if (!sheets || !SPREADSHEET_ID) {
    return { success: false, error: 'Google Sheets not configured' };
  }

  try {
    const rowIndex = await findRowByRowId(rowId);
    if (!rowIndex) {
      return { success: false, error: 'Survey not found' };
    }

    // Get existing row to preserve some values
    const existingResponse = await sheets.spreadsheets.values.get({
      spreadsheetId: SPREADSHEET_ID,
      range: `${SHEET_NAME}!${rowIndex}:${rowIndex}`,
    });

    const existingRow = existingResponse.data.values?.[0] || [];
    const language = existingRow[2] || 'vi';
    const section = currentSection ?? (parseInt(existingRow[3]) || 0);
    const completed = isCompleted ?? (existingRow[4] === 'TRUE');

    // Update timestamp and data
    const rowData = flattenFormData(formData, rowId, language, section, completed);
    rowData[1] = new Date().toISOString(); // Update timestamp

    await sheets.spreadsheets.values.update({
      spreadsheetId: SPREADSHEET_ID,
      range: `${SHEET_NAME}!A${rowIndex}`,
      valueInputOption: 'USER_ENTERED',
      requestBody: {
        values: [rowData],
      },
    });

    return { success: true };
  } catch (error) {
    console.error('Error updating survey response:', error);
    return { success: false, error: String(error) };
  }
}

/**
 * Delete a survey response by Row ID
 */
export async function deleteSurveyResponse(rowId: string): Promise<{
  success: boolean;
  error?: string;
}> {
  const sheets = getSheetsClient();
  if (!sheets || !SPREADSHEET_ID) {
    return { success: false, error: 'Google Sheets not configured' };
  }

  try {
    const rowIndex = await findRowByRowId(rowId);
    if (!rowIndex) {
      return { success: false, error: 'Survey not found' };
    }

    // Get spreadsheet info to get sheet ID
    const spreadsheet = await sheets.spreadsheets.get({
      spreadsheetId: SPREADSHEET_ID,
    });

    const sheet = spreadsheet.data.sheets?.find(
      (s) => s.properties?.title === SHEET_NAME
    );
    const sheetId = sheet?.properties?.sheetId;

    if (sheetId === undefined) {
      return { success: false, error: 'Sheet not found' };
    }

    // Delete the row
    await sheets.spreadsheets.batchUpdate({
      spreadsheetId: SPREADSHEET_ID,
      requestBody: {
        requests: [
          {
            deleteDimension: {
              range: {
                sheetId: sheetId,
                dimension: 'ROWS',
                startIndex: rowIndex - 1, // 0-indexed
                endIndex: rowIndex,
              },
            },
          },
        ],
      },
    });

    return { success: true };
  } catch (error) {
    console.error('Error deleting survey response:', error);
    return { success: false, error: String(error) };
  }
}

/**
 * Reset Sheet1 headers to match current schema
 */
export async function resetSheetHeaders(): Promise<{ success: boolean; error?: string }> {
  const sheets = getSheetsClient();
  if (!sheets || !SPREADSHEET_ID) {
    return { success: false, error: 'Google Sheets not configured' };
  }

  try {
    await sheets.spreadsheets.values.update({
      spreadsheetId: SPREADSHEET_ID,
      range: `${SHEET_NAME}!A1`,
      valueInputOption: 'USER_ENTERED',
      requestBody: {
        values: [SHEET_HEADERS],
      },
    });

    return { success: true };
  } catch (error) {
    console.error('Error resetting sheet headers:', error);
    return { success: false, error: String(error) };
  }
}

/**
 * Check if Google Sheets is configured
 */
export function isGoogleSheetsConfigured(): boolean {
  return !!(
    process.env.GOOGLE_SERVICE_ACCOUNT_EMAIL &&
    process.env.GOOGLE_PRIVATE_KEY &&
    process.env.GOOGLE_SHEET_ID
  );
}
