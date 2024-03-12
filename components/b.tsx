'use client';

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
import EditorText from './EditorText';
import { useForm } from 'react-hook-form';

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
  /* UseForm Hook --------------------- */
  const { register, handleSubmit } = useForm();

  const submit = (data) => console.log(data);

  // ─── Return ──────────────────────────────────────────────

  return (
    <Card className="w-[350px]">
      <CardHeader>
        <CardTitle>{title}</CardTitle>
        <CardDescription>{description}</CardDescription>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleSubmit(submit)}>
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
                    {...register('name')}
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
                  <select
                    {...register('tag')}
                    name=""
                    id=""
                  >
                    {options.map((option, index) => (
                      <option key={index}>{option}</option>
                    ))}
                  </select>
                </div>
              );
            })}
            <Textarea {...register('a')} />
          </div>
          <CardFooter className="flex justify-between mt-4 w-full p-0">
            <Button className="w-full">Deploy</Button>
          </CardFooter>
        </form>
      </CardContent>
    </Card>
  );
}
