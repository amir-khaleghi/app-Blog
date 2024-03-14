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

interface PostCardProps {
  id: string;
}

// ─── Comp ─────────────────────────────────────────── 🟩 ─

const PostCard = ({ id }: PostCardProps) => {
  return (
    <Card className="max-w-[1000px] relative">
      <BackButton className="right-0 absolute top-0" />
      <CardHeader>
        <CardTitle>Post Title</CardTitle>
      </CardHeader>
      <CardContent>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere fugiat
        molestias iusto adipisci voluptate eaque expedita consequatur? Aperiam,
        hic eligendi. Sapiente quae tempora ea ratione quidem soluta officia
        culpa saepe dolor quibusdam, estias iusto adipisci voluptate eaque
        expedita consequatur? Aperiam, hic eligendi. Sapiente quae tempora ea
        ratione quidem soluta officia culpa saepe dolor quibusdam, estias iusto
        adipisci voluptate eaque expedita consequatur? Aperiam, hic eligendi.
        Sapiente quae tempora ea ratione quidem soluta officia culpa saepe dolor
        quibusdam, repellendus, optio commodi sed id nostrum modi numquam?
      </CardContent>
      <CardFooter className="flex justify-between">
        <Link href={`/edit/${id}`}>
          <Button className="w-fit gap-2">
            <Pencil />
            Edit
          </Button>
        </Link>
        <Button
          className="w-fit gap-2"
          variant="destructive"
        >
          <Trash2 />
          Delete
        </Button>
      </CardFooter>
    </Card>
  );
};
export default PostCard;
