'use client';

import * as React from 'react';
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import { z } from 'zod';

import { Button } from '@/components/ui/button';

import { Input } from '@/components/ui/input';
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';

import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';
import { Card, CardTitle } from './ui/card';
import { Textarea } from './ui/textarea';
import { FormPostProps } from '@/types';

// ─── Comp ─────────────────────────────────────────── 🟩 ─

export function PostForm({ title, inputs, select }: FormPostProps) {
  /* Form Schema ---------------------- */
  const formSchema = z.object({
    title: z.string().min(1, {
      message: `Title can't be empty`,
    }),
    content: z.string().min(1, {
      message: 'Content must be at least 10 characters.',
    }),
    category: z.string().refine((value) => select.options.includes(value), {
      message: 'Please select a valid category from the options.',
    }),
  });

  /* // 1. Define Your Form. -------- */
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      title: '',
      category: '',
      content: '',
    },
  });

  /* 2.Define A Submit Handler ------ */
  function onSubmit(values: z.infer<typeof formSchema>) {
    // Do something with the form values.
    // ✅ This will be type-safe and validated.
    console.log(values);
  }

  // ─── Return ──────────────────────────────────────────────

  return (
    <Card className="p-6 gap-4 flex flex-col max-w-[600px] w-full">
      <CardTitle>{title}</CardTitle>
      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(onSubmit)}
          className="space-y-4"
        >
          <>
            {/* title */}
            <FormField
              control={form.control}
              name="title"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Title</FormLabel>
                  <FormControl>
                    <Input
                      placeholder="Post title ..."
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            {/* select */}
            <FormField
              control={form.control}
              defaultValue={select.options[0]}
              name="category"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Category</FormLabel>
                  <FormControl>
                    <Select
                      value={field.value}
                      onValueChange={field.onChange}
                    >
                      <SelectTrigger className="w-full">
                        <SelectValue placeholder="Select" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectGroup>
                          {select.options.map((option, index) => {
                            return (
                              <SelectItem
                                {...field}
                                key={index}
                                value={option}
                              >
                                {option}
                              </SelectItem>
                            );
                          })}
                        </SelectGroup>
                      </SelectContent>
                    </Select>
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            {/* content */}
            <FormField
              control={form.control}
              name="content"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Content</FormLabel>
                  <FormControl>
                    <Textarea
                      className="min-h-80"
                      placeholder="Post title ..."
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </>
          <Button
            className="w-full ease-in-out duration-500 transition hover:scale-95"
            type="submit"
          >
            Deploy
          </Button>
        </form>
      </Form>
    </Card>
  );
}
