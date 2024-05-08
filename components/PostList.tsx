import { CardComp } from '@/components/CardComp';
import blog2 from '@/public/blog.svg';
import { FC } from 'react';
import { Button } from './ui/button';
import Image from 'next/image';
import Link from 'next/link';
import dynamic from 'next/dynamic';
import { db } from '@/lib/db';
import { getPosts } from '@/lib/actions';

// ─── Type ─────────────────────────────────────────── 🟩 ─

interface Post {
  id: string;
  name: string;
  content: string;
  tag: { id: string; name: string };
}

interface PostListProps {
  page: string;
}

// ─── Lazy Loading ─────────────────────────────────── 🟩 ─

const PaginationBar = dynamic(() => import('@/components/PaginationBar'), {
  ssr: false,
});

// ─── Comp ─────────────────────────────────────────── 🟩 ─

const PostList: FC<PostListProps> = async ({ page }) => {
  /* Turn Search Param To Number ------ */
  const currentPage = parseInt(page);

  /* Pagination Data ---------------- */
  const pageSize = 4;
  const totalPosts = await db.post.count();
  const totalPages = Math.ceil(totalPosts / pageSize);

  const posts = await getPosts({ currentPage, pageSize });
  const postArray = Object.values(posts); // Convert object values to an array

  // ─── Return ──────────────────────────────────────────────

  return (
    <div className="flex flex-wrap md:mx-[50px] lg:mx-[170px] xl:mx-[300px] items-start justify-between pt-4 gap-4 ">
      {postArray.length > 0 ? (
        postArray?.map((post) => {
          const { id, name: title, content, tag } = post;
          return (
            <CardComp
              key={id}
              id={id}
              className="bg-orange-300 h-full w-60 min-h-[300px] text-xs ease-in-out duration-300 rounded-md grow shadow-md border-zinc-100 bg-gradient-to-t from-muted/50 to-muted hover:scale-105 hover:select-none justify-between flex flex-col "
              title={title}
              tag={tag}
              buttonRText={'Read More'}
              buttonLText={'Save'}
            >
              {content.slice(0, 120)} ...
            </CardComp>
          );
        })
      ) : (
        <div
          className="flex flex-col gap-
        8 items-center"
        >
          <Image
            src={blog2}
            width={120}
            height={120}
            alt="vector"
          />
          <Button>
            <Link href="/home/create-post">Add New post</Link>
          </Button>
        </div>
      )}

      {/* pagination */}
      <div className="item-center flex  justify-center w-full">
        {totalPosts > pageSize && (
          <PaginationBar
            currentPage={currentPage}
            totalPages={totalPages}
          />
        )}
      </div>
    </div>
  );
};
export default PostList;
