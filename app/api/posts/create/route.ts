import { db } from '@/lib/db';
import { getKindeServerSession } from '@kinde-oss/kinde-auth-nextjs/server';
import { NextResponse } from 'next/server';

export async function POST(req: Request) {
  const { getUser } = getKindeServerSession();
  const user = await getUser();

  try {
    const body = await req.json();
    const userId = user?.id; // Implement this function to extract user ID from the request

    if (!userId) {
      return NextResponse.json(
        { message: 'User not authenticated' },
        { status: 401 }
      );
    }

    const post = await db.post.create({
      data: {
        name: body.name,
        content: body.content,
        tagId: body.tag,
        userId: userId,
      },
    });

    return NextResponse.json(post, { status: 200 });
  } catch (error) {
    return NextResponse.json(
      { message: 'Could not create post' },
      { status: 500 }
    );
  }
}
