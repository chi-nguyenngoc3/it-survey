import { NextRequest, NextResponse } from 'next/server';
import { updateSurveySchema } from '@/lib/validations/survey';
import {
  getSurveyResponseById,
  updateSurveyResponse,
  deleteSurveyResponse,
  isGoogleSheetsConfigured,
} from '@/lib/google-sheets/client';

interface RouteParams {
  params: Promise<{ id: string }>;
}

/**
 * GET /api/survey/[id] - Get a specific survey
 */
export async function GET(
  request: NextRequest,
  { params }: RouteParams
) {
  try {
    const { id } = await params;

    if (!isGoogleSheetsConfigured()) {
      return NextResponse.json({
        success: false,
        error: 'Google Sheets not configured. Please use local storage mode.',
      }, { status: 503 });
    }

    const result = await getSurveyResponseById(id);

    if (!result.success) {
      if (result.error === 'Survey not found') {
        return NextResponse.json(
          { success: false, error: 'Survey not found' },
          { status: 404 }
        );
      }
      return NextResponse.json(
        { success: false, error: result.error },
        { status: 500 }
      );
    }

    return NextResponse.json({ success: true, data: result.data });
  } catch (error) {
    console.error('Error fetching survey:', error);
    return NextResponse.json(
      { success: false, error: 'Internal server error' },
      { status: 500 }
    );
  }
}

/**
 * PATCH /api/survey/[id] - Update a survey (auto-save)
 */
export async function PATCH(
  request: NextRequest,
  { params }: RouteParams
) {
  try {
    const { id } = await params;
    const body = await request.json();
    const validationResult = updateSurveySchema.safeParse(body);

    if (!validationResult.success) {
      return NextResponse.json(
        { success: false, error: validationResult.error.issues },
        { status: 400 }
      );
    }

    const { formData, currentSection, completedSections, isCompleted } = validationResult.data;

    if (!isGoogleSheetsConfigured()) {
      return NextResponse.json({
        success: true,
        data: {
          id,
          form_data: formData,
          current_section: currentSection,
          completed_sections: completedSections,
          is_completed: isCompleted,
          updated_at: new Date().toISOString(),
        },
        message: 'Updated in local storage mode',
      });
    }

    // formData is optional in the schema, but we'll use an empty object if not provided
    const result = await updateSurveyResponse(
      id,
      formData || {},
      currentSection,
      isCompleted
    );

    if (!result.success) {
      if (result.error === 'Survey not found') {
        return NextResponse.json(
          { success: false, error: 'Survey not found' },
          { status: 404 }
        );
      }
      return NextResponse.json(
        { success: false, error: result.error },
        { status: 500 }
      );
    }

    return NextResponse.json({
      success: true,
      data: {
        id,
        form_data: formData,
        current_section: currentSection,
        completed_sections: completedSections,
        is_completed: isCompleted,
        updated_at: new Date().toISOString(),
      },
    });
  } catch (error) {
    console.error('Error updating survey:', error);
    return NextResponse.json(
      { success: false, error: 'Internal server error' },
      { status: 500 }
    );
  }
}

/**
 * DELETE /api/survey/[id] - Delete a survey
 */
export async function DELETE(
  request: NextRequest,
  { params }: RouteParams
) {
  try {
    const { id } = await params;

    if (!isGoogleSheetsConfigured()) {
      return NextResponse.json({
        success: true,
        message: 'Deleted from local storage mode',
      });
    }

    const result = await deleteSurveyResponse(id);

    if (!result.success) {
      return NextResponse.json(
        { success: false, error: result.error },
        { status: 500 }
      );
    }

    return NextResponse.json({ success: true, message: 'Survey deleted' });
  } catch (error) {
    console.error('Error deleting survey:', error);
    return NextResponse.json(
      { success: false, error: 'Internal server error' },
      { status: 500 }
    );
  }
}
