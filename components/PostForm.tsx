'use client';

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
import { useEffect } from 'react';
import { FormInputs } from '@/app/home/(user)/create-post/page';

// ─── Type ─────────────────────────────────────────── 🟩 ─

interface FormProps {
  title: string;
  buttonName: string;
  submitHandler: SubmitHandler<{
    name: string;
    content: string;
    tag: string;
  }>;
  isPending: boolean;

  initialValue?: FormInputs;
}

// ─── Comp ─────────────────────────────────────────── 🟩 ─
export function PostForm({
  title,
  buttonName,
  submitHandler,
  isPending,
  postData,
}: FormProps) {
  /* Get Tags ----------------------- */

  const { form, tags } = useFormHook();
  useEffect(() => {
    if (postData) {
      form.setValue('name', postData.name);
      form.setValue('content', postData.content);
      form.setValue('tag', postData.tagId);
    }
  }, [postData, form]);
  // ─── Return ──────────────────────────────────────────────

  return (
    <Card className="p-6  gap-4  flex flex-col max-w-[400px] w-full relative">
      <CardTitle>{title}</CardTitle>
      <BackButton className="absolute right-0 top-0 rounded-tl-none rounded-br-none " />
      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(submitHandler)}
          className="space-y-2 "
        >
          <>
            {/* title */}
            <FormField
              control={form.control}
              name="name"
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
              name="tag"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Tag</FormLabel>
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
                          {tags.map((tag, index) => {
                            return (
                              <SelectItem
                                {...field}
                                key={index}
                                value={tag.id}
                              >
                                {tag.name}
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
                      className="min-h-60"
                      placeholder="Post Content ..."
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </>
          {isPending ? (
            <Button
              disabled={isPending}
              className="w-full bg-slate-500 ease-in-out duration-500 transition hover:scale-95"
            >
              <div className="loader"></div>
            </Button>
          ) : (
            <Button
              className="w-full ease-in-out duration-500 transition hover:scale-95"
              type="submit"
            >
              {buttonName}
            </Button>
          )}
        </form>
      </Form>
    </Card>
  );
}
