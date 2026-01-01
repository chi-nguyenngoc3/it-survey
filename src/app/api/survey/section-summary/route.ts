import { NextResponse } from 'next/server';
import { google } from 'googleapis';

const SPREADSHEET_ID = process.env.GOOGLE_SHEET_ID;
const SHEET_NAME = 'Section Summary';

// Section summary data with field counts
const sectionSummary = [
  { index: 0, nameEn: 'Institution Profile', nameVi: 'Thông tin Tổ chức', component: 'InstitutionProfile.tsx', fieldCount: 12 },
  { index: 1, nameEn: 'IT Organization', nameVi: 'Tổ chức CNTT', component: 'ITOrganization.tsx', fieldCount: 17 },
  { index: 2, nameEn: 'IT Processes', nameVi: 'Quy trình CNTT', component: 'ITProcesses.tsx', fieldCount: 10 },
  { index: 3, nameEn: 'Applications Portfolio', nameVi: 'Danh mục Ứng dụng', component: 'ApplicationsPortfolio.tsx', fieldCount: 28 },
  { index: 4, nameEn: 'Process Mapping', nameVi: 'Ma trận Ánh xạ Quy trình-Hệ thống', component: 'ProcessMapping.tsx', fieldCount: 5 },
  { index: 5, nameEn: 'Data & Analytics', nameVi: 'Dữ liệu & Phân tích', component: 'DataAnalytics.tsx', fieldCount: 8 },
  { index: 6, nameEn: 'AI & Technology', nameVi: 'AI & Công nghệ Mới', component: 'AITechnology.tsx', fieldCount: 6 },
  { index: 7, nameEn: 'Infrastructure', nameVi: 'Hạ tầng & Đám mây', component: 'Infrastructure.tsx', fieldCount: 14 },
  { index: 8, nameEn: 'Security', nameVi: 'Bảo mật & Tuân thủ', component: 'Security.tsx', fieldCount: 12 },
  { index: 9, nameEn: 'Financial', nameVi: 'Phân tích Tài chính CNTT', component: 'Financial.tsx', fieldCount: 15 },
  { index: 10, nameEn: 'Digitization', nameVi: 'Số hóa Quy trình', component: 'Digitization.tsx', fieldCount: 12 },
];

function createAuth() {
  const clientEmail = process.env.GOOGLE_SERVICE_ACCOUNT_EMAIL;
  const privateKey = process.env.GOOGLE_PRIVATE_KEY?.replace(/\\n/g, '\n');

  if (!clientEmail || !privateKey) {
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
 * POST /api/survey/section-summary
 * Create or update the Section Summary sheet
 */
export async function POST() {
  const auth = createAuth();
  if (!auth || !SPREADSHEET_ID) {
    return NextResponse.json(
      { success: false, error: 'Google Sheets not configured' },
      { status: 500 }
    );
  }

  const sheets = google.sheets({ version: 'v4', auth });

  try {
    // Check if sheet exists
    const spreadsheet = await sheets.spreadsheets.get({
      spreadsheetId: SPREADSHEET_ID,
    });

    const existingSheet = spreadsheet.data.sheets?.find(
      (s) => s.properties?.title === SHEET_NAME
    );

    // Create sheet if it doesn't exist
    if (!existingSheet) {
      await sheets.spreadsheets.batchUpdate({
        spreadsheetId: SPREADSHEET_ID,
        requestBody: {
          requests: [
            {
              addSheet: {
                properties: {
                  title: SHEET_NAME,
                },
              },
            },
          ],
        },
      });
    }

    // Prepare headers and data
    const headers = [
      'Section Index',
      'Section Name (EN)',
      'Section Name (VI)',
      'Component File',
      'Field Count',
      'Notes',
    ];

    const rows = sectionSummary.map((section) => [
      section.index,
      section.nameEn,
      section.nameVi,
      section.component,
      section.fieldCount,
      '', // Notes column for additional info
    ]);

    // Calculate totals
    const totalFields = sectionSummary.reduce((sum, s) => sum + s.fieldCount, 0);
    const totalRow = ['', 'TOTAL', '', '', totalFields, 'Total survey fields (excluding metadata)'];

    // Clear and write data
    await sheets.spreadsheets.values.clear({
      spreadsheetId: SPREADSHEET_ID,
      range: `${SHEET_NAME}!A:Z`,
    });

    await sheets.spreadsheets.values.update({
      spreadsheetId: SPREADSHEET_ID,
      range: `${SHEET_NAME}!A1`,
      valueInputOption: 'USER_ENTERED',
      requestBody: {
        values: [headers, ...rows, [], totalRow],
      },
    });

    // Format the sheet - bold headers, adjust column widths
    const sheetId = existingSheet?.properties?.sheetId || 
      (await sheets.spreadsheets.get({ spreadsheetId: SPREADSHEET_ID }))
        .data.sheets?.find((s) => s.properties?.title === SHEET_NAME)?.properties?.sheetId;

    if (sheetId !== undefined) {
      await sheets.spreadsheets.batchUpdate({
        spreadsheetId: SPREADSHEET_ID,
        requestBody: {
          requests: [
            // Bold header row
            {
              repeatCell: {
                range: {
                  sheetId,
                  startRowIndex: 0,
                  endRowIndex: 1,
                },
                cell: {
                  userEnteredFormat: {
                    textFormat: { bold: true },
                    backgroundColor: { red: 0.9, green: 0.9, blue: 0.9 },
                  },
                },
                fields: 'userEnteredFormat(textFormat,backgroundColor)',
              },
            },
            // Bold total row
            {
              repeatCell: {
                range: {
                  sheetId,
                  startRowIndex: rows.length + 2, // +1 for header, +1 for empty row
                  endRowIndex: rows.length + 3,
                },
                cell: {
                  userEnteredFormat: {
                    textFormat: { bold: true },
                    backgroundColor: { red: 0.95, green: 0.95, blue: 0.8 },
                  },
                },
                fields: 'userEnteredFormat(textFormat,backgroundColor)',
              },
            },
            // Auto-resize columns
            {
              autoResizeDimensions: {
                dimensions: {
                  sheetId,
                  dimension: 'COLUMNS',
                  startIndex: 0,
                  endIndex: 6,
                },
              },
            },
          ],
        },
      });
    }

    return NextResponse.json({
      success: true,
      message: `Created Section Summary sheet with ${sectionSummary.length} sections`,
      totalFields,
      url: `https://docs.google.com/spreadsheets/d/${SPREADSHEET_ID}`,
    });
  } catch (error) {
    console.error('Error creating Section Summary sheet:', error);
    return NextResponse.json(
      { success: false, error: String(error) },
      { status: 500 }
    );
  }
}

/**
 * GET /api/survey/section-summary
 * Get section summary data
 */
export async function GET() {
  const totalFields = sectionSummary.reduce((sum, s) => sum + s.fieldCount, 0);
  
  return NextResponse.json({
    success: true,
    sections: sectionSummary,
    totalSections: sectionSummary.length,
    totalFields,
  });
}

