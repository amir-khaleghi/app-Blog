import { FC, Suspense } from 'react';
import FeedPost from './FeedPost';

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

// ─── Comp ─────────────────────────────────────────── 🟩 ─

const Feed: FC<PostListProps> = async ({ posts }) => {
  const postArray = Object.values(posts); // Convert object values to an array

  // ─── Return ──────────────────────────────────────────────

  return (
    <Suspense fallback={<div>Loading...</div>}>
      <div className="flex  flex-wrap max-w-[700px] items-center justify-center pt-4 gap-4 ">
        {postArray.length > 0 ? (
          postArray?.map((post) => {
            return (
              <div
                className="w-full"
                key={post.id}
              >
                <FeedPost post={post} />
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
      </div>
    </Suspense>
  );
};
export default Feed;
