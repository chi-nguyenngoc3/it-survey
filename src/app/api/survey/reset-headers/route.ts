import { NextResponse } from 'next/server';
import { resetSheetHeaders, SHEET_HEADERS } from '@/lib/google-sheets/client';

/**
 * POST /api/survey/reset-headers
 * Reset Sheet1 headers to match current schema (all 127 columns)
 */
export async function POST() {
  try {
    const result = await resetSheetHeaders();

    if (!result.success) {
      return NextResponse.json(
        { success: false, error: result.error },
        { status: 500 }
      );
    }

    return NextResponse.json({
      success: true,
      message: `Sheet1 headers updated with ${SHEET_HEADERS.length} columns`,
      columns: SHEET_HEADERS.length,
    });
  } catch (error) {
    console.error('Error resetting headers:', error);
    return NextResponse.json(
      { success: false, error: String(error) },
      { status: 500 }
    );
  }
}

/**
 * GET /api/survey/reset-headers
 * Get the current header schema
 */
export async function GET() {
  return NextResponse.json({
    success: true,
    totalColumns: SHEET_HEADERS.length,
    headers: SHEET_HEADERS,
  });
}

