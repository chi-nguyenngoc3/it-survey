import { NextRequest, NextResponse } from 'next/server';
import { createServerClient } from '@/lib/supabase/server';
import { updateSurveySchema } from '@/lib/validations/survey';

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
    const supabase = createServerClient();

    if (!supabase) {
      return NextResponse.json({
        success: false,
        error: 'Supabase not configured. Please use local storage mode.'
      }, { status: 503 });
    }

    const { data, error } = await supabase
      .from('survey_responses')
      .select('*')
      .eq('id', id)
      .single();

    if (error) {
      if (error.code === 'PGRST116') {
        return NextResponse.json(
          { success: false, error: 'Survey not found' },
          { status: 404 }
        );
      }
      return NextResponse.json(
        { success: false, error: error.message },
        { status: 500 }
      );
    }

    return NextResponse.json({ success: true, data });
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
    const supabase = createServerClient();

    if (!supabase) {
      return NextResponse.json({
        success: true,
        data: {
          id,
          form_data: formData,
          current_section: currentSection,
          completed_sections: completedSections,
          is_completed: isCompleted,
          updated_at: new Date().toISOString()
        },
        message: 'Updated in local storage mode'
      });
    }

    // Build update object dynamically
    const updateData: Record<string, unknown> = {};
    if (formData !== undefined) updateData.form_data = formData;
    if (currentSection !== undefined) updateData.current_section = currentSection;
    if (completedSections !== undefined) updateData.completed_sections = completedSections;
    if (isCompleted !== undefined) updateData.is_completed = isCompleted;

    const { data, error } = await supabase
      .from('survey_responses')
      .update(updateData)
      .eq('id', id)
      .select()
      .single();

    if (error) {
      if (error.code === 'PGRST116') {
        return NextResponse.json(
          { success: false, error: 'Survey not found' },
          { status: 404 }
        );
      }
      return NextResponse.json(
        { success: false, error: error.message },
        { status: 500 }
      );
    }

    return NextResponse.json({ success: true, data });
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
    const supabase = createServerClient();

    if (!supabase) {
      return NextResponse.json({
        success: true,
        message: 'Deleted from local storage mode'
      });
    }

    const { error } = await supabase
      .from('survey_responses')
      .delete()
      .eq('id', id);

    if (error) {
      return NextResponse.json(
        { success: false, error: error.message },
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

