import { NextRequest, NextResponse } from 'next/server';
import { isUserAdmin } from '../../../../lib/supabase-admin';
import { getAuth } from '@clerk/nextjs/server';

export async function GET(req: NextRequest) {
  const { userId } = getAuth(req);
  if (!userId) {
    return NextResponse.json({ admin: false }, { status: 401 });
  }
  const isAdmin = await isUserAdmin(userId);
  return NextResponse.json({ admin: isAdmin });
}
