import { db } from '@/lib/db';
import Image from 'next/image';
// import { blog4 } from '@/public';
import blog4 from '@/public/blog4.svg';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { revalidatePath } from 'next/cache';
import Footer from '@/components/Footer';
import PostList from '@/components/PostList';

async function getPosts() {
  'use server';
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
