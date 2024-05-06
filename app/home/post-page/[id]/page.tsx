import * as React from 'react';

import Footer from '@/components/Footer';
import PostCard from '@/components/PostCard';
import { db } from '@/lib/db';
interface PostPageProps {
  params: { id: string };
}

// ─── Component ────────────────────────────────────── 🟩 ─

export async function getPost(id: string) {
  const response = await db.post.findFirst({
    where: {
      id,
    },
    select: {
      id: true,
      name: true,
      content: true,
      tag: true,
    },
  });
  return response;
}

const PostPage = async ({ params }: PostPageProps) => {
  /* Delete Post -------------------- */

  const post = await getPost(params.id);
  // ─── Return ───────────────────────────────────────── 🟩 ─
  return (
    <div className="relative w-full items-center min-h-screen  justify-between flex flex-col">
      <PostCard
        className="sm:min-w-[600px] w-80 mt-10"
        post={post}
      />
      <Footer />
    </div>
  );
};
export default PostPage;
