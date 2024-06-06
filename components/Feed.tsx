import { FC, Suspense } from 'react';
import FeedPost from './FeedPost';
import { getFeedPosts } from '@/lib/actions';
import { db } from '@/lib/db';
import PaginationBar from './PaginationBar';
import LoadingPage from './LoadingPage';

interface PostListProps {
  page: string;
}

// ─── Comp ─────────────────────────────────────────── 🟩 ─

const Feed: FC<PostListProps> = async ({ page }) => {
  /* Turn Search Param To Number ------ */
  const currentPage = parseInt(page);

  /* Pagination Data ---------------- */
  const pageSize = 6;
  const totalPosts = await db.post.count();
  const totalPages = Math.ceil(totalPosts / pageSize);

  const posts = await getFeedPosts({ currentPage, pageSize });

  const postArray = Object.values(posts); // Convert object values to an array

  // ─── Return ──────────────────────────────────────────────

  return (
    <Suspense fallback={<LoadingPage />}>
      <div className="flex  flex-wrap max-w-[700px] items-center justify-center pt-4 gap-4 mb-40">
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
    </Suspense>
  );
};
export default Feed;
