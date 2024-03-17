import Footer from '@/components/Footer';
import PostCardSkeleton from '@/components/PostCardSkeleton';
import PostList from '@/components/PostList';
import { db } from '@/lib/db';
import { Suspense } from 'react';
import Image from 'next/image';
// import { blog4 } from '@/public';
import blog4 from '@/public/blog4.svg';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
async function getPosts() {
  const posts = await db.post.findMany({
    select: {
      id: true,
      name: true,
      content: true,
      tag: true,
    },
    orderBy: {
      updtedAt: 'desc',
    },
  });

  return {
    props: {
      posts,
    },
    revalidate: 2, // Regenerate the page every 60 seconds
  };
}

export default async function Home() {
  const { props } = await getPosts();
  return (
    <div className="flex flex-col justify-between min-h-screen">
      {props && props.posts.length > 0 ? (
        <Suspense fallback={<PostCardSkeleton />}>
          <PostList posts={props.posts} />
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
