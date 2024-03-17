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
      createAt: 'desc',
    },
  });
  return posts;
}

export default async function Home() {
  const posts = await getPosts();
  return (
    <div className="flex flex-col justify-between min-h-screen">
      <PostList posts={posts} />

      <Footer />
    </div>
  );
}
