import '@/styles/globals.css';
import { ReactNode } from 'react';
import { ThemeProvider } from '@/components/theme-provider';
import Image from 'next/image';
import vector1 from '@/public/vector1.svg';
import Navbar from '@/components/Navbar';

const AuthRootLayout = ({ children }: { children: ReactNode }) => {
  return (
    <html lang="en ">
      <head />
      <body className=" h-screen w-screen  font-sans   overflow-hidden">
        <div className=" pb-none  px-4 w-full h-full">
          <div className="absolute top-16 -left-40 rotate-180 -z-20 overflow-x-hidden">
            <Image
              className="w-[1200px]"
              src={vector1}
              width="300"
              height="300"
              alt="blog svg"
            />
          </div>
          <ThemeProvider
            attribute="class"
            defaultTheme="system"
            enableSystem
            disableTransitionOnChange
          >
            {children}
          </ThemeProvider>
          <div className="absolute bottom-0 -right-40  -z-20 overflow-x-hidden">
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
