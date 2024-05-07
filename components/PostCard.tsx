'use client';
import { Button } from '@/components/ui/button';
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';

import Link from 'next/link';
import { Pencil, Trash2 } from 'lucide-react';
import BackButton from './BackButton';
import { cn } from '@/lib/utils';
import { Tag } from '@prisma/client';
import { FC } from 'react';
import { useMutation } from '@tanstack/react-query';
import axios from 'axios';
import { useRouter } from 'next/navigation';

interface PostCardProps {
  post: {
    id: string;
    name: string;
    content: string;
    tag: Tag;
  };
  className: string;
  isUser: boolean;
}

// ─── Comp ─────────────────────────────────────────── 🟩 ─

const PostCard: FC<PostCardProps> = ({ post, className, isUser }) => {
  const router = useRouter();

  const { id, name, content } = post;

  // ─── Deletepost ──────────────────────────────────────────a

  const { mutate: deletePostHandler, isPending } = useMutation({
    mutationFn: async () => {
      return axios.delete(`/api/posts/${id}`);
    },

    onError: (error) => {
      console.log('We have error in mutation', error);
    },
    onSuccess: () => {
      router.push('/');
      router.refresh();
    },
  });

  // ─── Return ──────────────────────────────────────────────

  return (
    <Card className={cn('max-w-[1000px] relative', className)}>
      <BackButton className="right-0 absolute  top-0 rounded-tl-none rounded-br-none " />
      <CardHeader>
        <CardTitle>{name}</CardTitle>
      </CardHeader>
      <CardContent className="pb-20">{content}</CardContent>
      {isUser ? (
        <CardFooter className="flex justify-between w-full absolute bottom-0">
          <Link href={`/home/edit/${id}`}>
            <Button
              size="sm"
              className="w-fit gap-2"
            >
              <Pencil />
              Edit
            </Button>
          </Link>
          {isPending ? (
            <Button
              size="sm"
              className="w-40 bg-red-100 ease-in-out duration-500 transition hover:scale-95"
            >
              <div className="loader"></div>
              <Trash2 />
              Delete
            </Button>
          ) : (
            <Button
              size="sm"
              className="w-fit gap-2"
              variant="destructive"
              onClick={() => deletePostHandler()}
            >
              <Trash2 />
              Delete
            </Button>
          )}
        </CardFooter>
      ) : null}
    </Card>
  );
};
export default PostCard;
