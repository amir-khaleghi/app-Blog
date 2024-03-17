import { useQuery } from '@tanstack/react-query';
import axios from 'axios';

const usePostHook = () => {
  /* Get Data ----------------------- */
  const { isLoading: isLoadingPosts, data: posts = [] } = useQuery({
    queryKey: ['posts'],
    queryFn: async () => {
      const response = await axios.get('/api/posts');
      return response.data;
    },
  });

  return { posts, isLoadingPosts };
};
export default usePostHook;
