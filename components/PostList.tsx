'use client';
import { CardComp } from '@/components/CardComp';

import { FC } from 'react';

interface PostListProps {
  posts: {
    id: string;
    title: string;
    content: string;
    tag: { id: string; name: string };
  };
}

const PostList: FC<PostListProps> = ({ posts }) => {
  return (
    <div className="flex flex-wrap sm:px-10  items-center justify-center  gap-6  lg:px-[100px] md:px-8">
      {posts.map((post) => {
        const { id, name, content, tag } = post;

        return (
          <div
            className="min-w-80 "
            key={id}
          >
            <CardComp
              id={id}
              className="bg-orange-300 max-w-[350px] grow ease-in-out duration-300 rounded-md  shadow-md dark:shadow-white bg-gradient-to-t from-muted/50 to-muted hover:scale-105 hover:select-none hover:-rotate-1"
              name={name}
              tag={tag}
              buttonRText={'Read More'}
              buttonLText={'Save'}
            >
              {content.slice(0, 150)} ...
            </CardComp>
          </div>
        );
      })}
    </div>
  );
};
export default PostList;
