'use client';
import Image from 'next/image';
import { NavigationComp } from './NavigationComp';
import blog from '@/public/blog.svg';
import blog2 from '@/public/blog2.svg';
// import { ModeToggle } from './ModeToggle';

import { usePathname } from 'next/navigation';
import { Rss } from 'lucide-react';
const Navbar = () => {
  const path = usePathname();

  return (
    <div>
      <div className="flex relative my-5 border-b-2 items-center justify-between md:w-[600px] md:mb-10 ">
        <div className="hidden md:block">
          <p className="absolute md:top-16 -top-6 left-4 select-none">
            Welcome Amir 👋
          </p>
          <div className="absolute md:-left-20 left-24 md:-top-4 top-24  flex flex-col md:flex-row items-center gap-4 ">
            <Image
              className="rounded-full w-40  md:w-20 md:mt-8 "
              src="https://avatars.githubusercontent.com/u/89293266?v=4"
              width="300"
              height="300"
              alt="My Image"
            />
          </div>
        </div>
        {path === '/create-post' ? (
          <div className="absolute top-80 md:top-10 right-16  -z-10 md:-right-80 ">
            <Image
              className="w-60 md:w-80"
              src={blog}
              width="300"
              height="300"
              alt="blog svg"
            />
          </div>
        ) : (
          <div className="absolute right-14 top-80 md:top-10 scale-150 -z-10 md:-right-[500px] ">
            <Image
              className="w-60 md:w-80"
              src={blog2}
              width="300"
              height="300"
              alt="blog svg"
            />
          </div>
        )}
        <NavigationComp />
        <Rss />
      </div>
      <div className=" md:hidden items-center  justify-center flex flex-col mb-[300px] gap-4">
        <Image
          className="rounded-full w-40  md:w-20 md:mt-8 "
          src="https://avatars.githubusercontent.com/u/89293266?v=4"
          width="300"
          height="300"
          alt="My Image"
        />
        <p className=" flex justify-center">Welcome Amir 👋</p>
      </div>
    </div>
  );
};
export default Navbar;
