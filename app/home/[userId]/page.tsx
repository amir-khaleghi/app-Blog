import { db } from '@/lib/db';
import { revalidatePath } from 'next/cache';
import Footer from '@/components/Footer';
import Feed from '@/components/Feed';

async function getPosts() {
  'use server';
  const posts = await db.post.findMany({
    select: {
      id: true,
      name: true,
      content: true,
      tag: true,
      userId: true,
    },
    orderBy: {
      createAt: 'desc',
    },
  });
  revalidatePath('/');
  return posts;
}

export default async function Home({ params }: { params: { id: string } }) {
  const posts = await getPosts();
  return (
    <div>
      <Feed posts={posts} />
      <Footer />
    </div>
  );
}
