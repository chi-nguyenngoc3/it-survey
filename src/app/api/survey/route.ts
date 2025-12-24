import { NextRequest, NextResponse } from 'next/server';
import { createServerClient } from '@/lib/supabase/server';
import { createSurveySchema } from '@/lib/validations/survey';
import { createInitialFormData } from '@/types/survey';

/**
 * GET /api/survey - List all surveys
 */
export async function GET() {
  try {
    const supabase = createServerClient();
    
    if (!supabase) {
      // Return mock data if Supabase is not configured
      return NextResponse.json({
        success: true,
        data: [],
        message: 'Supabase not configured. Using local storage mode.'
      });
    }

    const { data, error } = await supabase
      .from('survey_responses')
      .select('*')
      .order('updated_at', { ascending: false });

    if (error) {
      return NextResponse.json(
        { success: false, error: error.message },
        { status: 500 }
      );
    }

    return NextResponse.json({ success: true, data });
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
      return NextResponse.json(
        { success: false, error: validationResult.error.issues },
        { status: 400 }
      );
    }

    const { language, formData } = validationResult.data;
    const supabase = createServerClient();

    if (!supabase) {
      // Return a mock ID if Supabase is not configured
      const mockId = `local-${Date.now()}`;
      return NextResponse.json({
        success: true,
        data: {
          id: mockId,
          language,
          form_data: formData || createInitialFormData(),
          current_section: 0,
          completed_sections: [],
          is_completed: false,
          created_at: new Date().toISOString(),
          updated_at: new Date().toISOString()
        },
        message: 'Created in local storage mode'
      });
    }

    const { data, error } = await supabase
      .from('survey_responses')
      .insert({
        language,
        form_data: formData || createInitialFormData(),
        current_section: 0,
        completed_sections: [],
        is_completed: false
      })
      .select()
      .single();

    if (error) {
      return NextResponse.json(
        { success: false, error: error.message },
        { status: 500 }
      );
    }

    return NextResponse.json({ success: true, data }, { status: 201 });
  } catch (error) {
    console.error('Error creating survey:', error);
    return NextResponse.json(
      { success: false, error: 'Internal server error' },
      { status: 500 }
    );
  }
}

