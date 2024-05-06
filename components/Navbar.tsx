import Image from 'next/image';
import { NavigationComp } from './NavigationComp';
import blog2 from '@/public/blog2.svg';
// import { ModeToggle } from './ModeToggle';

import { Rss } from 'lucide-react';
import { getKindeServerSession } from '@kinde-oss/kinde-auth-nextjs/server';
// ─── Comp ─────────────────────────────────────────── 🟩 ─

const Navbar = async () => {
  const { getUser } = getKindeServerSession();
  const user = await getUser();

  // ─── Return ──────────────────────────────────────────────

  return (
    <div className="sm:w-[500px]">
      <div className="flex relative my-5 border-b-2 items-center justify-center w-full md:mb-10 ">
        <div className="hidden md:block">
          <p className="absolute md:top-16 -top-6 left-4 select-none">
            Welcome {user?.given_name} 👋
          </p>
          <div className="absolute md:-left-20 left-24 md:-top-4 top-24  flex flex-col md:flex-row items-center gap-4 ">
            <Image
              className="rounded-full w-40  md:w-20 md:mt-8 "
              src={user?.picture ?? 'https://avatar.vercel.sh/rauchg'}
              width="300"
              height="300"
              alt="My Image"
            />
          </div>
        </div>

        <div className="absolute right-12 top-80 md:top-10 scale-150 -z-10 md:left-[500px] ">
          <Image
            className="w-40 md:w-80"
            src={blog2}
            width="300"
            height="300"
            alt="blog svg"
          />
        </div>
        <NavigationComp />
        {/* <Rss /> */}
      </div>
      <div className=" md:hidden items-center  justify-center flex flex-col mb-[300px] gap-4">
        <Image
          className="rounded-full w-20  md:w-20 md:mt-8 "
          src={user?.picture ?? 'https://avatar.vercel.sh/rauchg'}
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
