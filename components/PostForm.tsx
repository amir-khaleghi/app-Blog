'use client';

import * as React from 'react';
import { SubmitHandler, UseFormReturn } from 'react-hook-form';

import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';

import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';
import { Card, CardTitle } from './ui/card';
import { Textarea } from './ui/textarea';
import BackButton from './BackButton';
import useFormHook from '@/hooks/useFormHook';
import HomePageLoader from '@/app/loading';

// ─── Type ─────────────────────────────────────────── 🟩 ─

interface FormProps {
  title: string;
  buttonName: string;
  submitHandler: SubmitHandler<{
    title: string;
    content: string;
    category: string;
  }>;
  tags: string[];
}

// ─── Comp ─────────────────────────────────────────── 🟩 ─
export function PostForm({ title, buttonName, submitHandler }: FormProps) {
  /* Get Tags ----------------------- */

  const { form, tags, isLoadingTags } = useFormHook();

  // ─── Return ──────────────────────────────────────────────

  if (isLoadingTags) {
    return <HomePageLoader />;
  }

  return (
    <Card className="p-6  gap-4  flex flex-col max-w-[600px] w-full relative">
      <CardTitle>{title}</CardTitle>
      <BackButton className="absolute right-0 top-0 rounded-tl-none rounded-br-none " />
      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(submitHandler)}
          className="space-y-4 "
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
                          {tags.map((option, index) => {
                            return (
                              <SelectItem
                                {...field}
                                key={index}
                                value={option.name}
                              >
                                {option.name}
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
            {buttonName}
          </Button>
        </form>
      </Form>
    </Card>
  );
}
