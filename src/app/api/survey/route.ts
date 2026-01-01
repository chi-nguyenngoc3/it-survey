import { NextRequest, NextResponse } from 'next/server';
import { createSurveySchema } from '@/lib/validations/survey';
import { createInitialFormData, SurveyFormData } from '@/types/survey';
import {
  appendSurveyResponse,
  getAllSurveyResponses,
  isGoogleSheetsConfigured,
} from '@/lib/google-sheets/client';

/**
 * GET /api/survey - List all surveys
 */
export async function GET() {
  try {
    if (!isGoogleSheetsConfigured()) {
      // Return empty data if Google Sheets is not configured
      return NextResponse.json({
        success: true,
        data: [],
        message: 'Google Sheets not configured. Using local storage mode.',
      });
    }

    const result = await getAllSurveyResponses();

    if (!result.success) {
      return NextResponse.json(
        { success: false, error: result.error },
        { status: 500 }
      );
    }

    return NextResponse.json({ success: true, data: result.data });
  } catch (error) {
    console.error('Error fetching surveys:', error);
    return NextResponse.json(
      { success: false, error: 'Internal server error' },
      { status: 500 }
    );
  }
}

/**
 * POST /api/survey - Create a new survey
 */
export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const validationResult = createSurveySchema.safeParse(body);

    if (!validationResult.success) {
      // Format validation errors as a readable string with field names
      const errorMessages = validationResult.error.issues.map(issue => {
        const path = issue.path.join('.');
        // Make field names more readable
        const fieldName = path
          .replace('formData.', '')
          .replace(/([A-Z])/g, ' $1')
          .replace(/\./g, ' → ')
          .trim();
        return fieldName ? `[${fieldName}] ${issue.message}` : issue.message;
      }).join('\n');
      
      return NextResponse.json(
        { 
          success: false, 
          error: `Validation errors:\n${errorMessages}`,
          issues: validationResult.error.issues 
        },
        { status: 400 }
      );
    }

    const { language, formData } = validationResult.data;
    
    // Create complete form data by merging with defaults
    // The frontend always sends complete formData, but we ensure type safety here
    const initialData = createInitialFormData();
    const surveyFormData: SurveyFormData = {
      ...initialData,
      ...(formData as Partial<SurveyFormData>),
      // Ensure nested objects are properly merged
      itFteBreakdown: { ...initialData.itFteBreakdown, ...formData?.itFteBreakdown },
      serviceDesk: { ...initialData.serviceDesk, ...formData?.serviceDesk },
      changeManagement: { ...initialData.changeManagement, ...formData?.changeManagement },
      incidentManagement: { ...initialData.incidentManagement, ...formData?.incidentManagement },
      problemManagement: { ...initialData.problemManagement, ...formData?.problemManagement },
      assetManagement: { ...initialData.assetManagement, ...formData?.assetManagement },
      erp: { ...initialData.erp, ...formData?.erp },
      lms: { ...initialData.lms, ...formData?.lms },
      sis: { ...initialData.sis, ...formData?.sis },
      crm: { ...initialData.crm, ...formData?.crm },
      dataWarehouse: { ...initialData.dataWarehouse, ...formData?.dataWarehouse },
      cloudAdoption: { ...initialData.cloudAdoption, ...formData?.cloudAdoption },
      networkInfra: { ...initialData.networkInfra, ...formData?.networkInfra },
      securityTools: { ...initialData.securityTools, ...formData?.securityTools },
      budgetBreakdown: { ...initialData.budgetBreakdown, ...formData?.budgetBreakdown },
      processMaturity: { ...initialData.processMaturity, ...formData?.processMaturity },
    };

    if (!isGoogleSheetsConfigured()) {
      // Return a mock ID if Google Sheets is not configured
      const mockId = `local-${Date.now()}`;
      return NextResponse.json({
        success: true,
        data: {
          id: mockId,
          language,
          form_data: surveyFormData,
          current_section: 10,
          completed_sections: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
          is_completed: true,
          created_at: new Date().toISOString(),
          updated_at: new Date().toISOString(),
        },
        message: 'Created in local storage mode',
      });
    }

    // Survey is completed when submitted via POST
    const result = await appendSurveyResponse(surveyFormData, language, 10, true);

    if (!result.success) {
      return NextResponse.json(
        { success: false, error: result.error },
        { status: 500 }
      );
    }

    return NextResponse.json(
      {
        success: true,
        data: {
          id: result.rowId,
          language,
          form_data: surveyFormData,
          current_section: 10,
          completed_sections: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
          is_completed: true,
          created_at: new Date().toISOString(),
          updated_at: new Date().toISOString(),
        },
      },
      { status: 201 }
    );
  } catch (error) {
    console.error('Error creating survey:', error);
    const errorMessage = error instanceof Error ? error.message : 'Internal server error';
    return NextResponse.json(
      { success: false, error: `Server error: ${errorMessage}` },
      { status: 500 }
    );
  }
}
