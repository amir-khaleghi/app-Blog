'use client';
import Image from 'next/image';
import { NavigationComp } from './NavigationComp';
import blog from '@/public/blog.svg';
import blog2 from '@/public/blog2.svg';
import { usePathname } from 'next/navigation';
const Navbar = () => {
  const path = usePathname();

  return (
    <div className="flex relative my-5 border-b-2   items-center justify-center md:w-[600px]  mb-[500px] md:mb-0">
      <div className="absolute md:-left-20 md:-top-4 top-20 flex flex-col md:flex-row items-center gap-4 ">
        <Image
          className="rounded-full w-40  md:w-20 md:mt-8 "
          src="https://avatars.githubusercontent.com/u/89293266?v=4"
          width="300"
          height="300"
          alt="My Image"
        />
      </div>
      {path === '/create-post' ? (
        <div className="absolute top-72 md:-top-10  -z-10 md:-right-80 ">
          <Image
            className="w-60 md:w-80"
            src={blog}
            width="300"
            height="300"
            alt="blog svg"
          />
        </div>
      ) : (
        <div className="absolute top-72 md:-top-10  -z-10 md:-right-80 ">
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
    </div>
  );
};
export default Navbar;
