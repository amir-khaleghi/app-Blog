'use client';
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import { z } from 'zod';
import axios from 'axios';
import { useQuery } from '@tanstack/react-query';

const useFormHook = () => {
  /* Get Data ----------------------- */
  const { isLoading: isLoadingTags, data: tags = [] } = useQuery({
    queryKey: ['test'],
    queryFn: async () => {
      const response = await axios.get('/api/tags');
      return response.data;
    },
  });

  /* Define Form Schema --------------- */

  // const tags = ['Technology', 'Web', 'Soft Skill', 'Next.js', 'TypeScript'];
  const tagNames = tags.map((tag) => tag.name);

  const formSchema = z.object({
    title: z.string().min(1, {
      message: `Title can't be empty`,
    }),
    content: z.string().min(1, {
      message: 'Content must be at least 10 characters.',
    }),
    category: z.string().refine((value) => tagNames.includes(value), {
      message: 'Please select a valid category from the tags.',
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

  return { form, formSchema, tags, isLoadingTags };
};
export default useFormHook;
