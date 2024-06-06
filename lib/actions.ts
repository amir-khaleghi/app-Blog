import { revalidatePath } from 'next/cache';
import { getKindeServerSession } from '@kinde-oss/kinde-auth-nextjs/server';
import { db } from '@/lib/db';

/* Get Data ------------------------- */
export async function getPosts({ currentPage, pageSize }) {
  ('use server');
  const { getUser } = getKindeServerSession();
  const user = await getUser();

  const posts = await db.post.findMany({
    where: {
      userId: user?.id,
    },

    // orderBy: {
    //   createAt: 'desc',
    // },
    // //how many items to skip
    // skip: (currentPage - 1) * pageSize,
    // //how many items to return
    // take: pageSize,
  });

  revalidatePath('/');
  return posts;
}
/* Get Data ------------------------- */
export async function getFeedPosts({ currentPage, pageSize }) {
  'use server';
  const posts = await db.post.findMany({
    select: {
      id: true,
      name: true,
      content: true,
      tag: true,
      userId: true,
    },
    orderBy: {
      createAt: 'desc',
    },
    //how many items to skip
    skip: (currentPage - 1) * pageSize,
    //how many items to return
    take: pageSize,
  });
  revalidatePath('/');
  return posts;
}
