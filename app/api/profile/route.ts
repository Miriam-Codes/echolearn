import { NextResponse } from 'next/server';
import { profileController, ProfileControllerError } from '@/src/controllers/profile.controller';

export async function GET(req: Request) {
  try {
    const { searchParams } = new URL(req.url);
    const userId = searchParams.get('userId');

    if (!userId) {
      return NextResponse.json(
        { error: 'userId query parameter is required' },
        { status: 400 }
      );
    }

    const result = await profileController.getProfile(userId);
    return NextResponse.json(result, { status: 200 });
  } catch (error) {
    console.error('[GET /api/profile] Error:', error);

    if (error instanceof ProfileControllerError) {
      return NextResponse.json(
        { error: error.message },
        { status: 404 }
      );
    }

    return NextResponse.json(
      { error: error instanceof Error ? error.message : 'Internal server error' },
      { status: 500 }
    );
  }
}