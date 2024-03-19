import { Button } from '@/components/ui/button';
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { cn } from '@/lib/utils';
import Link from 'next/link';
import { Badge } from '@/components/ui/badge';
import { Tag } from '@prisma/client';

/* Type ----------------------------- */
interface CardCompProps {
  id: string;
  tag: Tag;
  className?: string;
  name: string;
  buttonRText: string;
  buttonLText: string;
  children?: React.ReactNode;
}

// ─── Comp ─────────────────────────────────────────── 🟩 ─

export function CardComp({
  id,
  tag,
  className,
  children,
  name,
  buttonRText,
  buttonLText,
}: CardCompProps) {
  return (
    <Card className={cn(className, 'flex flex-col justify-between')}>
      <div>
        <CardHeader className="">
          <CardTitle>{name}</CardTitle>
          {/* <CardDescription>{description}</CardDescription> */}
        </CardHeader>
        <CardContent>{children}</CardContent>
      </div>
      <CardFooter className="flex justify-between">
        <Badge variant="outline">{tag?.name}</Badge>

        {/* <Button variant="outline">{buttonLText}</Button> */}
        <Link href={`post-page/${id}`}>
          <Button className="hover:scale-105 duration-300 ease-in-out transition ">
            {buttonRText}
          </Button>
        </Link>
      </CardFooter>
    </Card>
  );
}
