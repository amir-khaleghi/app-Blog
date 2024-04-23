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
    <div className="flex flex-wrap sm:px-10  items-center justify-center pb-10 gap-6  lg:px-[100px] md:px-8">
      {posts?.map((post) => {
        const { id, name, content, tag } = post;

        return (
          <CardComp
            key={id}
            id={id}
            className="bg-orange-300 w-80 h-80 grow ease-in-out duration-300 rounded-md  shadow-md dark:shadow-white bg-gradient-to-t from-muted/50 to-muted hover:scale-105 hover:select-none justify-between flex flex-col hover:-rotate-1"
            name={name}
            tag={tag}
            buttonRText={'Read More'}
            buttonLText={'Save'}
          >
            {content.slice(0, 250)} ...
          </CardComp>
        );
      })}
    </div>
  );
};
export default PostList;
