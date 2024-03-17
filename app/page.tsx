import Footer from '@/components/Footer';
import PostList from '@/components/PostList';
import { db } from '@/lib/db';

export const getServerSideProps = async () => {
  const posts = await db.post.findMany({
    select: { id: true, name: true, content: true, tag: true },
    orderBy: { createdAt: 'desc' },
  });

  return {
    props: {
      posts,
    },
  };
};

export default function Home({ posts }) {
  return (
    <div className="flex flex-col justify-between min-h-screen">
      <PostList posts={posts} />
      <Footer />
    </div>
  );
}
