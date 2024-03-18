import Footer from '@/components/Footer';
import PostCardSkeleton from '@/components/PostCardSkeleton';
import PostList from '@/components/PostList';
import { db } from '@/lib/db';
import { Suspense, cache } from 'react';
import Image from 'next/image';
// import { blog4 } from '@/public';
import blog4 from '@/public/blog4.svg';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
const getPosts = cache(async () => {
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
});

export default async function Home() {
  const posts = await getPosts();
  return (
    <div className="flex flex-col justify-between min-h-screen">
      {posts.length > 0 ? (
        <Suspense fallback={<PostCardSkeleton />}>
          <PostList posts={posts} />
        </Suspense>
      ) : (
        <div className=" flex flex-col items-center justify-center  gap-8">
          <Image
            className="w-60 md:w-80"
            src={blog4}
            width="300"
            height="300"
            alt="blog svg"
          />
          <Link href="/create-post">
            <Button className="text-xl hover:scale-110 hover:bg-orange-500 ease-in-out transition  duration-700">
              Add New Post
            </Button>
          </Link>
        </div>
      )}

      <Footer />
    </div>
  );
}
