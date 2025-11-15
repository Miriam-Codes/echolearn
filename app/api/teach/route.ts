import { NextResponse } from 'next/server';
import { teachController } from '@/src/controllers/teach.controller';
import { ValidationError } from '@/src/utils/validators';

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const result = await teachController.handleTeach(body);
    return NextResponse.json(result, { status: 200 });
  } catch (error) {
    console.error('[POST /api/teach] Error:', error);

    if (error instanceof ValidationError) {
      return NextResponse.json(
        { error: error.message },
        { status: 400 }
      );
    }

    return NextResponse.json(
      { error: error instanceof Error ? error.message : 'Internal server error' },
      { status: 500 }
    );
  }
}