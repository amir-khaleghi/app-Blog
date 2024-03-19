import { db } from '@/lib/db';
import Image from 'next/image';
// import { blog4 } from '@/public';
import blog4 from '@/public/blog4.svg';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { revalidatePath } from 'next/cache';

async function getPosts() {
  'use server';
  const posts = await db.post.findMany({
    select: {
      id: true,
      name: true,
      content: true,
      tag: true,
    },
    orderBy: {
      createAt: 'desc',
    },
  });
  revalidatePath('/');
  return posts;
}

export default async function Home() {
  const posts = await getPosts();
  return (
    <div className="flex flex-col justify-between min-h-screen">
      {posts.length > 0 ? (
        <div className="flex flex-wrap sm:px-10  items-center justify-center  gap-6  lg:px-[100px] md:px-8">
          {posts?.map((post) => {
            const { id, name, content, tag } = post;

            return (
              <div
                className="min-w-80 "
                key={id}
              >
                <Card className="bg-orange-300 max-w-[350px] grow ease-in-out duration-300 rounded-md  shadow-md dark:shadow-white bg-gradient-to-t from-muted/50 to-muted hover:scale-105 hover:select-none hover:-rotate-1">
                  <CardHeader className="">
                    <CardTitle>{name}</CardTitle>
                    {/* <CardDescription>{description}</CardDescription> */}
                  </CardHeader>
                  <CardContent>{content}</CardContent>
                  <CardFooter className="flex justify-between">
                    <Badge variant="outline">{tag?.name}</Badge>

                    {/* <Button variant="outline">{buttonLText}</Button> */}
                    <Link href={`post-page/${id}`}>
                      <Button>Read More</Button>
                    </Link>
                  </CardFooter>
                </Card>
              </div>
            );
          })}
        </div>
      ) : (
        <div className=" flex flex-col items-center justify-center  gap-8">
          <Image
            className="w-60 md:w-80"
            src={blog4}
            width="300"
            height="300"
            alt="blog svg"
          />
          <Link href="/create-post">
            <Button className="text-xl hover:scale-110 hover:bg-orange-500 ease-in-out transition  duration-700">
              Add New Post
            </Button>
          </Link>
        </div>
      )}

      {/* <Footer /> */}
    </div>
  );
}
