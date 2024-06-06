import '@/styles/globals.css';
import { ReactNode } from 'react';
import Image from 'next/image';
import vector1 from '@/public/vector1.svg';

const AuthRootLayout = ({ children }: { children: ReactNode }) => {
  return (
    <html
      className="overflow-hidden"
      lang="en "
    >
      <head />
      <body className=" h-screen w-full relative font-sans   overflow-x-hidden">
        <div className=" pb-none  px-4   h-full  overflow-x-hidden">
          <div className="absolute top-16 -left-40 rotate-180 -z-20 ">
            <Image
              className="w-[1200px]"
              src={vector1}
              width="300"
              height="300"
              alt="blog svg"
            />
          </div>

          {children}

          <div className="absolute bottom-0 -right-40  -z-20 ">
            <Image
              className="w-[1200px]"
              src={vector1}
              width="300"
              height="300"
              alt="blog svg"
            />
          </div>
        </div>
      </body>
    </html>
  );
};
export default AuthRootLayout;
