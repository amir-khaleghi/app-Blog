import { CardComp } from '@/components/CardComp';
import blog2 from '@/public/blog.svg';
import { FC } from 'react';
import { Button } from './ui/button';
import Image from 'next/image';
import Link from 'next/link';
interface Post {
  id: string;
  name: string;
  content: string;
  tag: { id: string; name: string };
}

interface PostListProps {
  posts: { [key: string]: Post }; // Assuming posts is an object with string keys
}
// ─── Comp ─────────────────────────────────────────── 🟩 ─

const PostList: FC<PostListProps> = ({ posts }) => {
  const postArray = Object.values(posts); // Convert object values to an array

  // ─── Return ──────────────────────────────────────────────

  return (
    <div className="flex min-h-screen flex-wrap md:mx-[50px] lg:mx-[170px]  xl:mx-[300px] items-start justify-center mb-40 md:pt-20 gap-4 ">
      {postArray.length > 0 ? (
        postArray?.map((post) => {
          const { id, name: title, content, tag } = post;
          return (
            <CardComp
              key={id}
              id={id}
              className="bg-orange-300 min-w-60 h-60 text-xs ease-in-out duration-300 rounded-md  shadow-md dark:shadow-white bg-gradient-to-t from-muted/50 to-muted hover:scale-105 hover:select-none justify-between flex flex-col "
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
            width={300}
            height={300}
            alt="vector"
          />
          <Button>
            <Link href="/home/create-post">Add New post</Link>
          </Button>
        </div>
      )}
    </div>
  );
};
export default PostList;
