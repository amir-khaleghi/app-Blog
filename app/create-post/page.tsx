import Footer from '@/components/Footer';
import Navbar from '@/components/Navbar';
import { PostForm } from '@/components/PostForm';

const NewPost = () => {
  return (
    <main className="flex flex-col items-center justify-between min-h-screen  px-4   pt-10 ">
      <div className="sm:gap-20 md:px-20 ">
        <Navbar />
        <PostForm />
      </div>
      <Footer />
    </main>
  );
};
export default NewPost;
