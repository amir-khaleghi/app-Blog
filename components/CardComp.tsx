import * as React from 'react';

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

/* Type ----------------------------- */
interface CardCompProps {
  className?: string;
  title: string;
  description: string;
  buttonRText: string;
  buttonLText: string;
  children?: React.ReactNode;
}

// ─── Comp ─────────────────────────────────────────── 🟩 ─

export function CardComp({
  className,
  children,
  title,
  description,
  buttonRText,
  buttonLText,
}: CardCompProps) {
  return (
    <Card className={cn(className)}>
      <CardHeader className="">
        <CardTitle>{title}</CardTitle>
        <CardDescription>{description}</CardDescription>
      </CardHeader>
      <CardContent>{children}</CardContent>
      <CardFooter className="flex justify-end">
        {/* <Button variant="outline">{buttonLText}</Button> */}
        <Button>
          <Link href={title.toString().toLowerCase().replace(/\s+/g, '-')}>
            {buttonRText}
          </Link>
        </Button>
      </CardFooter>
    </Card>
  );
}
