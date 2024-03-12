'use client';

import { ModeToggle } from './ModeToggle';
import { useTheme } from 'next-themes';
import Image from 'next/image';
import Link from 'next/link';
import blog2 from '@/public/blog2.svg';
const Footer = () => {
  // const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();

  // useEffect only runs on the client, so now we can safely show the UI
  // useEffect(() => {
  //   setMounted(true);
  // }, []);

  // if (!mounted) {
  //   return null;
  // }

  return (
    <div className="flex relative items-center justify-between border-t p-2 w-full mt-20">
      <div className="absolute bottom-40 -z-10">
        <Image
          className="w-60 md:w-80"
          src={blog2}
          width="300"
          height="300"
          alt="blog svg"
        />
      </div>
      <div>
        @2024{' '}
        <Link
          target="_blank"
          rel="noopener"
          href="http://amirdev.dev"
        >
          amirdev.dev
        </Link>{' '}
        | All Rights Reserved
      </div>
      <ModeToggle />
    </div>
  );
};
export default Footer;
