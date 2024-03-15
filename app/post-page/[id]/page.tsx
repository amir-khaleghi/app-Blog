'use client';
import * as React from 'react';

import Footer from '@/components/Footer';
import PostCard from '@/components/PostCard';
interface PostPageProps {
  params: { id: string };
}

// ─── Component ────────────────────────────────────── 🟩 ─

const PostPage = ({ params }: PostPageProps) => {
  /* Get Data Of Post ----------------- */

  // ─── Return ───────────────────────────────────────── 🟩 ─

  return (
    <div className="relative w-full items-center   justify-center flex flex-col">
      <PostCard id={params.id} />
      {/* <Footer /> */}
    </div>
  );
};
export default PostPage;
