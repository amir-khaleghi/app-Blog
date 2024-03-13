import Footer from '@/components/Footer';
import Navbar from '@/components/Navbar';
import { CardComp } from '@/components/CardComp';
import { Card } from '@/components/ui/card';

const db = [
  {
    id: 'asdkfdkjfkl',
    title: 'Post Name',
    description: 'Create a new post',
    content:
      'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Repellat illo quos perspiciatis eligendi provident expedita repudiandae officiis omnis, ipsa delectus! Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt veniam consequatur ea voluptatibus rem esse nostrum reprehenderit beatae ipsa vitae.',
  },
  {
    id: 'asdkfdkjfkl',
    title: 'Post Name',
    description: 'Create a new post',
    content:
      'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Repellat illo quos perspiciatis eligendi provident expedita repudiandae officiis omnis, ipsa delectus! Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt veniam consequatur ea voluptatibus rem esse nostrum reprehenderit beatae ipsa vitae.',
  },
  {
    id: 'asdkfdkjfkl',
    title: 'Post Name',
    description: 'Create a new post',
    content:
      'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Repellat illo quos perspiciatis eligendi provident expedita repudiandae officiis omnis, ipsa delectus! Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt veniam consequatur ea voluptatibus rem esse nostrum reprehenderit beatae ipsa vitae.',
  },
  {
    id: 'asdkfdkjfkl',
    title: 'Post Name',
    description: 'Create a new post',
    content:
      'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Repellat illo quos perspiciatis eligendi provident expedita repudiandae officiis omnis, ipsa delectus! Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt veniam consequatur ea voluptatibus rem esse nostrum reprehenderit beatae ipsa vitae.',
  },
  {
    id: 'asdkfdkjfkl',
    title: 'Post Name',
    description: 'Create a new post',
    content:
      'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Repellat illo quos perspiciatis eligendi provident expedita repudiandae officiis omnis, ipsa delectus! Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt veniam consequatur ea voluptatibus rem esse nostrum reprehenderit beatae ipsa vitae.',
  },
  {
    id: 'asdkfdkjfkl',
    title: 'Post Name',
    description: 'Create a new post',
    content:
      'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Repellat illo quos perspiciatis eligendi provident expedita repudiandae officiis omnis, ipsa delectus! Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt veniam consequatur ea voluptatibus rem esse nostrum reprehenderit beatae ipsa vitae.',
  },
  {
    id: 'asdkfdkjfkl',
    title: 'Post Name',
    description: 'Create a new post',
    content:
      'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Repellat illo quos perspiciatis eligendi provident expedita repudiandae officiis omnis, ipsa delectus! Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt veniam consequatur ea voluptatibus rem esse nostrum reprehenderit beatae ipsa vitae.',
  },
  {
    id: 'asdkfdkjfkl',
    title: 'Post Name',
    description: 'Create a new post',
    content:
      'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Repellat illo quos perspiciatis eligendi provident expedita repudiandae officiis omnis, ipsa delectus! Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt veniam consequatur ea voluptatibus rem esse nostrum reprehenderit beatae ipsa vitae.',
  },
  {
    id: 'asdkfdkjfkl',
    title: 'Post Name',
    description: 'Create a new post',
    content:
      'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Repellat illo quos perspiciatis eligendi provident expedita repudiandae officiis omnis, ipsa delectus! Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt veniam consequatur ea voluptatibus rem esse nostrum reprehenderit beatae ipsa vitae.',
  },
];
export default function Home() {
  return (
    <main className="flex flex-col items-center justify-between min-h-screen  px-4  pt-10 ">
      <div className="sm:gap-20 md:px-20">
        <Navbar />
      </div>
      <div className="flex flex-wrap sm:px-10  items-center justify-center gap-6 md:pt-24 lg:px-[100px] md:px-8">
        {db.map((card) => {
          const { id, title, description, content } = card;
          return (
            <div
              className="max-w-80 grow"
              key={id}
            >
              <CardComp
                className="bg-orange-300 max-w-[350px] grow ease-in-out duration-300 rounded-md  shadow-md dark:shadow-white bg-gradient-to-t from-muted/50 to-muted hover:scale-105 hover:select-none hover:-rotate-1"
                title={title}
                description={description}
                buttonRText={'Read More'}
                buttonLText={'Save'}
              >
                {content.slice(0, 150)} ...
              </CardComp>
            </div>
          );
        })}
      </div>
      <Footer />
    </main>
  );
}
