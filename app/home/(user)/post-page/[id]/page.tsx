import Footer from '@/components/Footer';
import PostCard from '@/components/PostCard';
import { db } from '@/lib/db';
import { getKindeServerSession } from '@kinde-oss/kinde-auth-nextjs/server';
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
      userId: true,
    },
  });
  return response;
}

const PostPage = async ({ params }: PostPageProps) => {
  const { getUser } = getKindeServerSession();
  const user = await getUser();
  /* Delete Post -------------------- */

  const post = await getPost(params.id);
  let isUser = post?.userId === user?.id;

  // ─── Return ───────────────────────────────────────── 🟩 ─
  return (
    <div className="relative w-full items-center min-h-screen  justify-between flex flex-col">
      <PostCard
        className="sm:min-w-[600px] min-h-80 w-80 mt-10"
        post={post}
        isUser={isUser}
      />
      <Footer />
    </div>
  );
};
export default PostPage;
