'use client';
import Footer from '@/components/Footer';
import FormSkeleton from '@/components/FormSkeleton';
import { PostForm } from '@/components/PostForm';
import useFormHook from '@/hooks/useFormHook';
import { useMutation } from '@tanstack/react-query';
import axios from 'axios';
import { Suspense } from 'react';
import { z } from 'zod';
import { useRouter } from 'next/navigation';
export type FormInputs = {
  name: string;
  content: string;
  tag: string;
};

const NewPost = () => {
  const { form, formSchema } = useFormHook();

  const router = useRouter();

  /* Handler ------------------------ */

  const { mutate: createPost, isPending } = useMutation({
    mutationFn: (newPost: FormInputs) => {
      return axios.post('/api/posts/create', newPost);
    },
    onError: (error) => {
      console.log('We have error in mutation', error);
    },
    onSuccess: () => {
      router.push('/');
      router.refresh();
    },
  });

  /* 2.Define A Submit Handler ------ */
  function handleCreatePost(values: z.infer<typeof formSchema>) {
    createPost(values);
    form.reset({
      name: '',
      content: '',
      tag: 'Select', // Set the default category value
    });
    /* Reset Form ------------------- */
  }
  // ─── Return ──────────────────────────────────────────────

  return (
    <div className="relative w-full items-center  justify-center flex flex-col min-h-screen">
      <Suspense fallback={<FormSkeleton />}>
        <PostForm
          title="Create New Post"
          buttonName="Create"
          submitHandler={handleCreatePost}
          isPending={isPending}
        />
      </Suspense>
      <Footer />
    </div>
  );
};
export default NewPost;
