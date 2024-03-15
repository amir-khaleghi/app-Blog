'use client';
import BackButton from '@/components/BackButton';
import Footer from '@/components/Footer';
import { PostForm } from '@/components/PostForm';
import useFormHook from '@/hooks/useFormHook';
import { useRouter } from 'next/navigation';
import { z } from 'zod';
// import { useRouter } from 'next/navigation';

// ─── Comp ─────────────────────────────────────────── 🟩 ─

const EditPost = () => {
  // Get the router object
  // const router = useRouter();

  /* Router --------------------------- */
  const router = useRouter();

  // ─── Custom Hook ─────────────────────────────────────────

  const { form, formSchema, tags } = useFormHook();

  /* 2.Define A Submit Handler for form data ------ */
  function handleEditPost(values: z.infer<typeof formSchema>) {
    console.log(values);

    /* Reset Form ------------------- */
    form.reset({
      title: '',
      category: 'Select',
      content: '',
    });

    // Navigate back to the home page
    router.back();
  }

  // ─── Return ───────────────────────────────────────── 🟩 ─

  return (
    <div className="relative w-full items-center justify-center flex flex-col">
      <PostForm
        title="Edit Post"
        buttonName="Update"
        tags={tags.map((tag) => tag.name)}
        submitHandler={handleEditPost}
      />
      {/* <Footer /> */}
    </div>
  );
};
export default EditPost;
