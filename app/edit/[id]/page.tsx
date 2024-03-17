'use client';
import { FormInputs } from '@/app/create-post/page';
import { getPost } from '@/app/post-page/[id]/page';
import Footer from '@/components/Footer';
import { PostForm } from '@/components/PostForm';
import useFormHook from '@/hooks/useFormHook';
import { useMutation, useQuery } from '@tanstack/react-query';
import axios from 'axios';
import { useRouter } from 'next/navigation';
import { useEffect } from 'react';
import { z } from 'zod';
// import { useRouter } from 'next/navigation';

/* Type ----------------------------- */
interface EditProps {
  params: {
    id: string;
  };
}
// ─── Comp ─────────────────────────────────────────── 🟩 ─

const EditPost = ({ params }) => {
  const id = params.id;

  // Get the router object
  // const router = useRouter();
  /* Router --------------------------- */
  const router = useRouter();

  // ─── Custom Hook ─────────────────────────────────────────

  const { form, formSchema } = useFormHook();
  // ─── Edit Post ──────────────────────────────────────────

  const { data: postData } = useQuery({
    queryKey: ['posts', id],
    queryFn: async () => {
      const response = await axios.get(`/api/posts/${id}`);
      return response?.data;
    },
  });

  /* Handler ------------------------ */

  const { mutate: updatePost, isPending } = useMutation({
    mutationFn: (updatedPost: FormInputs) => {
      return axios.patch(`/api/posts/${id}`, updatedPost);
    },
    onError: (error) => {
      console.log('We have error in mutation', error);
    },
    onSuccess: () => {
      router.push(`/`);
      router.refresh();
    },
  });

  /* 2.Define A Submit Handler for form data ------ */
  function handleEditPost(values: z.infer<typeof formSchema>) {
    updatePost(values);
    /* Reset Form ------------------- */
    form.reset({
      name: '',
      tag: 'Select',
      content: '',
    });

    // Navigate back to the home page
    // router.back();
  }

  // ─── Return ───────────────────────────────────────── 🟩 ─

  return (
    <div className="relative w-full items-center justify-center flex flex-col">
      <PostForm
        postData={postData}
        title="Edit Post"
        buttonName="Update"
        submitHandler={handleEditPost}
      />
      <Footer />
    </div>
  );
};
export default EditPost;
