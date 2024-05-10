import Image from 'next/image';
import { NavigationComp } from './NavigationComp';
import { getKindeServerSession } from '@kinde-oss/kinde-auth-nextjs/server';
import { revalidatePath } from 'next/cache';

/* Handler -------------------------- */
export async function getUserData() {
  const { getUser } = getKindeServerSession();
  const user = await getUser();
  revalidatePath('/home');
  return user;
}

// ─── Comp ─────────────────────────────────────────── 🟩 ─

const Navbar = async () => {
  const user = await getUserData();
  // ─── Return ──────────────────────────────────────────────

  return (
    <div className=" lg:w-[700px] md:w-[600px]">
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

        <NavigationComp user={user} />
      </div>
      <div className=" md:hidden items-center  justify-center flex flex-col mb-[20px] gap-4">
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
