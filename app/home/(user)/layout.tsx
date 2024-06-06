import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import '@/styles/globals.css';
import { cn } from '@/lib/utils';
import { ThemeProvider } from '@/components/theme-provider';
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
          'flex flex-col items-center overflow-x-hidden'
        )}
      >
        <Provider>
          <div className="">
            <Navbar />
          </div>

          <div className="overflow-x-hidden flex items-center flex-col justify-center pb-none md:px-20 px-4 pt-4 w-full h-full">
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
