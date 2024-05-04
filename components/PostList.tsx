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
    <div className="flex flex-wrap md:mx-[50px] lg:mx-[170px]  xl:mx-[300px] items-center justify-center pb-10 md:pt-20 gap-4 ">
      {posts?.map((post) => {
        const { id, name, content, tag } = post;

        return (
          <CardComp
            key={id}
            id={id}
            className="bg-orange-300 w-60 h-60 text-xs ease-in-out duration-300 rounded-md  shadow-md dark:shadow-white bg-gradient-to-t from-muted/50 to-muted hover:scale-105 hover:select-none justify-between flex flex-col "
            name={name}
            tag={tag}
            buttonRText={'Read More'}
            buttonLText={'Save'}
          >
            {content.slice(0, 120)} ...
          </CardComp>
        );
      })}
    </div>
  );
};
export default PostList;
