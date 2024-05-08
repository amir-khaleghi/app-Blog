'use client';

import { ModeToggle } from './ModeToggle';
// import { useTheme } from 'next-themes';
import Image from 'next/image';
import Link from 'next/link';
import blog3 from '@/public/blog3.svg';
import vector1 from '@/public/vector1.svg';
const Footer = () => {
  return (
    <div className="flex relative items-center justify-between border-t p-2 w-full mt-80   max-w-[700px]">
      <div className="absolute bottom-16 -right-40 -z-10 overflow-x-hidden">
        <Image
          className="w-[1200px]"
          src={vector1}
          width="300"
          height="300"
          alt="blog svg"
        />
      </div>
      <div className="absolute bottom-16 sm:bottom-14 sm:left-20 -z-10">
        <Image
          className="w-40 md:w-60"
          src={blog3}
          width={150}
          height={150}
          alt="blog svg"
        />
      </div>
      <div className="text-sm sm:text-md">
        @2024
        <Link
          target="_blank"
          rel="noopener"
          href="http://amirdev.dev"
        >
          {' '}
          amirdev.dev{' '}
        </Link>
        | All Rights Reserved
      </div>
      <ModeToggle />
    </div>
  );
};
export default Footer;
