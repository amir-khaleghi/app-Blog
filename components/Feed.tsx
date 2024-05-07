import { CardComp } from '@/components/CardComp';
import { db } from '@/lib/db';
import Image from 'next/image';
import { FC, Suspense } from 'react';

interface Post {
  id: string;
  name: string;
  content: string;
  tag: { id: string; name: string };
  userId: string;
}

interface PostListProps {
  posts: { [key: string]: Post }; // Assuming posts is an object with string keys
}

export const getUserImage = async (userId: string) => {
  let userImage = await db.user.findFirst({
    where: {
      id: userId,
    },
    select: {
      profileImage: true,
    },
  });
  return userImage?.profileImage;
};

// ─── Comp ─────────────────────────────────────────── 🟩 ─

const Feed: FC<PostListProps> = async ({ posts }) => {
  const postArray = Object.values(posts); // Convert object values to an array

  // ─── Return ──────────────────────────────────────────────

  return (
    <div className="flex  flex-wrap max-w-[700px] items-center justify-center pt-4 gap-4 ">
      <Suspense fallback={<div>Loading...</div>}>
        {postArray.length > 0 ? (
          postArray?.map((post) => {
            const { id, name: title, content, tag, userId } = post;
            return (
              <div
                className="w-full"
                key={id}
              >
                {getUserImage(userId).then((userImage) => (
                  <CardComp
                    id={id}
                    className="bg-orange-300 w-full text-xs ease-in-out duration-300 rounded-md shadow-md border-zinc-100 bg-gradient-to-t from-muted/50 to-muted hover:select-none justify-between flex flex-col relative"
                    title={title}
                    tag={tag}
                    buttonRText={'Read More'}
                    buttonLText={'Save'}
                  >
                    {getUserImage(userId).then(
                      (userImage) =>
                        userImage && (
                          <Image
                            src={userImage}
                            alt="userImage"
                            width={40}
                            height={40}
                            className="absolute right-0 top-0 rounded-tr-sm"
                          />
                        )
                    )}
                    {content.slice(0, 120)} ...
                  </CardComp>
                ))}
              </div>
            );
          })
        ) : (
          <div
            className="flex flex-col gap-
        8 items-center"
          >
            This is Empty yet!!!
          </div>
        )}
      </Suspense>
    </div>
  );
};
export default Feed;
