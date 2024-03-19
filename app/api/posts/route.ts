import { db } from '@/lib/db';
import { NextResponse } from 'next/server';

// ─── Get Post Data ────────────────────────────────── 🟩 ─

export async function GET() {
  try {
    const posts = await db.post.findMany();
    return NextResponse.json(posts, { status: 200 });
  } catch (error) {
    return NextResponse.json(
      { message: 'could not Create post!!💥' },
      { status: 500 }
    );
  }
}
