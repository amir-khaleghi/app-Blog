import { db } from '@/lib/db';
import { revalidatePath } from 'next/cache';
import Footer from '@/components/Footer';
import PostList from '@/components/PostList';
import { getKindeServerSession } from '@kinde-oss/kinde-auth-nextjs/server';

async function getPosts() {
  'use server';
  const { getUser } = getKindeServerSession();
  const user = await getUser();
  const posts = await db.post.findMany({
    where: {
      userId: user?.id,
    },
    select: {
      id: true,
      name: true,
      content: true,
      tag: true,
    },
    orderBy: {
      createAt: 'desc',
    },
  });
  revalidatePath('/');
  return posts;
}

export default async function Home() {
  const posts = await getPosts();
  return (
    <div>
      <PostList posts={posts} />
      <Footer />
    </div>
  );
}
