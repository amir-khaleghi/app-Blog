'use client';
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import { z } from 'zod';

const useFormHook = () => {
  const { handleSubmit } = useForm();

  /* Define Form Schema --------------- */
  const options = ['Tech', 'Web', 'Soft Skill', 'Next.js', 'TypeScript'];
  const formSchema = z.object({
    title: z.string().min(1, {
      message: `Title can't be empty`,
    }),
    content: z.string().min(1, {
      message: 'Content must be at least 10 characters.',
    }),
    category: z.string().refine((value) => options.includes(value), {
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

  return { form, formSchema, handleSubmit, options };
};
export default useFormHook;
