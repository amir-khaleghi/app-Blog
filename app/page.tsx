import Footer from '@/components/Footer';
import PostList from '@/components/PostList';
import { db } from '@/lib/db';

async function getPosts() {
  const posts = await db.post.findMany({
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
  return posts;
}
export default async function Home() {
  const posts = await getPosts();
  console.log(posts);
  return (
    <main className="flex flex-col justify-between min-h-screen">
      <PostList posts={posts} />

      <Footer />
    </main>
  );
}
