import { db } from '@/lib/db';
import { NextResponse } from 'next/server';

export async function GET() {
  try {
    const posts = await db.tag.findMany();
    return NextResponse.json(posts, { status: 200 });
  } catch (error) {
    return NextResponse.json(
      { message: 'could not fetch tags!!💥' },
      { status: 500 }
    );
  }
}
