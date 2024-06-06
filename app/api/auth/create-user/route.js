import { db } from '@/lib/db';
import { getKindeServerSession } from '@kinde-oss/kinde-auth-nextjs/server';
import { NextResponse } from 'next/server';

export async function GET() {
  try {
    const { getUser } = getKindeServerSession();
    const user = await getUser();

    if (!user || user === null || !user.id) {
      console.error('Invalid user');
      return NextResponse.json({ error: 'Invalid user' }, { status: 400 });
    }

    let dbUser = await db.user
      .findUnique({
        where: { id: user.id },
      })
      .catch((err) => {
        console.error('Error fetching user from database:', err);
        throw err;
      });

    if (!dbUser) {
      try {
        dbUser = await db.user.create({
          data: {
            email: user.email ?? '',
            emailName: user.email.split('@')[0] ?? '',
            firstName: user.given_name ?? '',
            lastName: user.family_name ?? '',
            id: user.id,
            profileImage:
              user?.picture ?? `https://avatar.vercel.sh/${user?.given_name}`,
          },
        });
      } catch (err) {
        console.error('Error creating user in database:', err);
        throw err;
      }
    }

    return NextResponse.redirect('https://blog-app-d.vercel.app/home');
  } catch (err) {
    console.error('Internal Server Error:', err);
    return NextResponse.json(
      { error: 'Internal Server Error' },
      { status: 500 }
    );
  }
}
