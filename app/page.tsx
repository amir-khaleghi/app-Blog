// app/page.tsx
import Footer from '@/components/Footer';
import PostList from '@/components/PostList';
import { db } from '@/lib/db';

export default async function Home() {
  const posts = await db.post.findMany({
    select: { id: true, name: true, content: true, tag: true },
    orderBy: { createdAt: 'desc' },
  });

  return (
    <div className="flex flex-col justify-between min-h-screen">
      <PostList posts={posts} />
      <Footer />
    </div>
  );
}
