import Footer from '@/components/Footer';
import Navbar from '@/components/Navbar';
import { PostForm } from '@/components/PostForm';

const formLayoutData = {
  title: 'Create New Post',
  inputs: [{ label: 'Title', placeHolder: 'Post Tittle ...' }],
  select: {
    options: ['Tech', 'Web', 'Soft Skill', 'Next.js'],
  },
};
const NewPost = () => {
  return (
    <main className="flex flex-col items-center justify-between min-h-screen  px-4   ">
      <div className="sm:gap-20 md:px-20 ">
        <Navbar />
        <PostForm {...formLayoutData} />
      </div>
      <Footer />
    </main>
  );
};
export default NewPost;
