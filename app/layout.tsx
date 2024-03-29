import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import { cn } from '@/lib/utils';
import { ThemeProvider } from '@/components/theme-provider';
import Image from 'next/image';
import vector1 from '@/public/vector1.svg';
import Navbar from '@/components/Navbar';
import Provider from '@/components/Provider';
const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Amirdev Blog',
  description: 'Created by Amir',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
    >
      <head>
        <link
          rel="icon"
          href="/icon.png"
        />
      </head>
      <body
        className={cn(
          inter.className,
          'flex flex-col items-center  min-h-screen  overflow-x-hidden'
        )}
      >
        <Provider>
          <div className="sm:gap-20 ">
            <Navbar />
          </div>
          <div className="absolute top-16 -left-40 rotate-180 -z-20 overflow-x-hidden">
            <Image
              className="w-[1200px]"
              src={vector1}
              width="300"
              height="300"
              alt="blog svg"
            />
          </div>

          <div className="p-4 overflow-x-hidden md:p-20 w-full">
            <ThemeProvider
              attribute="class"
              defaultTheme="system"
              enableSystem
              disableTransitionOnChange
            >
              {children}
            </ThemeProvider>
          </div>
        </Provider>
      </body>
    </html>
  );
}
