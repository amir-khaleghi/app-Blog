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
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { Textarea } from './ui/textarea';

/* Type ----------------------------- */
interface FormProps {
  className?: string;
  title: string;
  description: string;
  inputs: Array<{ label: string; placeHolder: string }>;
  select: Array<{ label: string; options: string[] }>;
}
// ─── Comp ─────────────────────────────────────────── 🟩 ─

export function Form({ title, description, inputs, select }: FormProps) {
  console.log(inputs);
  return (
    <Card className="w-[350px]">
      <CardHeader>
        <CardTitle>{title}</CardTitle>
        <CardDescription>{description}</CardDescription>
      </CardHeader>
      <CardContent>
        <form>
          <div className="grid w-full items-center gap-4">
            {inputs.map((item, index) => {
              const { label, placeHolder } = item;
              return (
                <div
                  key={index}
                  className="flex flex-col space-y-1.5"
                >
                  <Label htmlFor="name">{label}</Label>
                  <Input
                    id="name"
                    placeholder={placeHolder}
                  />
                </div>
              );
            })}
            {select.map((item, index) => {
              const { label, options } = item;
              return (
                <div
                  key={index}
                  className="flex flex-col space-y-1.5"
                >
                  <Label htmlFor={label}>{label}</Label>
                  <Select>
                    <SelectTrigger id={label}>
                      <SelectValue placeholder="Select" />
                    </SelectTrigger>
                    <SelectContent position="popper">
                      {options.map((option, index) => (
                        <SelectItem
                          key={index}
                          value={option}
                        >
                          {option}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>
              );
            })}
            <Textarea placeholder="Type your message here." />{' '}
          </div>
        </form>
      </CardContent>
      <CardFooter className="flex justify-between">
        <Button className="w-full">Deploy</Button>
      </CardFooter>
    </Card>
  );
}
