'use client';
import Footer from '@/components/Footer';
import { PostForm } from '@/components/PostForm';
import useFormHook from '@/hooks/useFormHook';
import { z } from 'zod';

const NewPost = () => {
  /* Handler ------------------------ */

  const { form, formSchema, options } = useFormHook();
  /* 2.Define A Submit Handler ------ */
  function handleCreatePost(values: z.infer<typeof formSchema>) {
    console.log(values);

    /* Reset Form ------------------- */
    form.reset({
      title: '',
      category: 'Select', // Set the default category value
      content: '',
    });
  }
  // ─── Return ──────────────────────────────────────────────

  return (
    <div className="relative w-full items-center justify-center flex flex-col">
      <PostForm
        title="Create New Post"
        buttonName="Create"
        submitHandler={handleCreatePost}
        options={options}
        form={form}
      />
      <Footer />
    </div>
  );
};
export default NewPost;
