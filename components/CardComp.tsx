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
  title: string;
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
  title,
  buttonRText,
  buttonLText,
}: CardCompProps) {
  return (
    <Card className={cn(className)}>
      <div>
        <CardHeader className="">
          <CardTitle className="text-xl border-zinc-400 border-b pb-2">
            {title}
          </CardTitle>
          {/* <CardDescription>{description}</CardDescription> */}
        </CardHeader>
        <CardContent className="  tracking-wide">{children}</CardContent>
      </div>
      <CardFooter className="flex justify-between">
        <Badge variant="outline">{tag?.name}</Badge>

        {/* <Button variant="outline">{buttonLText}</Button> */}
        <Link href={`/home/post-page/${id}`}>
          <Button
            className="text-xs "
            size="sm"
          >
            {buttonRText}
          </Button>
        </Link>
      </CardFooter>
    </Card>
  );
}
