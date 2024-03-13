import Footer from '@/components/Footer';
import Navbar from '@/components/Navbar';
import { PostForm } from '@/components/PostForm';
import vector1 from '@/public/vector1.svg';
import Image from 'next/image';
const NewPost = () => {
  return (
    <main className="flex flex-col items-center justify-between min-h-screen  px-4   pt-10 ">
      <div className="absolute top-16 -left-40 rotate-180 -z-10 overflow-x-hidden">
        <Image
          className="w-[1200px]"
          src={vector1}
          width="300"
          height="300"
          alt="blog svg"
        />
      </div>
      <div className="sm:gap-20 md:px-20 ">
        <Navbar />
        <PostForm />
      </div>
      <Footer />
    </main>
  );
};
export default NewPost;
