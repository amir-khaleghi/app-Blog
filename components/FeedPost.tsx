import { CardComp } from '@/components/CardComp';
import { db } from '@/lib/db';
import Image from 'next/image';

/* Handler -------------------------- */
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

const FeedPost = async ({ post }) => {
  const { id, name: title, content, tag, userId } = post;
  let userImage = await getUserImage(userId);
  return (
    <div>
      <CardComp
        id={id}
        className="bg-orange-300 w-full text-xs ease-in-out duration-300 rounded-md shadow-md border-zinc-100 bg-gradient-to-t from-muted/50 to-muted hover:select-none justify-between flex flex-col relative"
        title={title}
        tag={tag}
        buttonRText={'Read More'}
        buttonLText={'Save'}
      >
        <Image
          src={userImage}
          alt="userImage"
          width={40}
          height={40}
          className="absolute right-0 top-0 rounded-tr-sm"
        />
        {content.slice(0, 120)} ...
      </CardComp>
    </div>
  );
};
export default FeedPost;
