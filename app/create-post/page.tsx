import Footer from '@/components/Footer';
import { Form } from '@/components/Form';
import Navbar from '@/components/Navbar';

const formData = {
  title: 'Create Post',
  description: '',
  inputs: [{ label: 'Title', placeHolder: 'Post Name' }],
  select: [
    {
      label: 'Category',
      options: ['Tech', 'Web', 'Soft Skill', 'Next.js'],
    },
  ],
};
const NewPost = () => {
  return (
    <main className="flex flex-col items-center justify-between min-h-screen  px-4   ">
      <div className="sm:gap-20 md:px-20">
        <Navbar />
      </div>
      <Form {...formData} />
      <Footer />
    </main>
  );
};
export default NewPost;
