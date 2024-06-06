import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { db } from '@/lib/db';
import {
  RegisterLink,
  LoginLink,
} from '@kinde-oss/kinde-auth-nextjs/components';
import { revalidatePath } from 'next/cache';
import Image from 'next/image';

/* Handler -------------------------- */
async function getUsers() {
  const users = await db.user.findMany();

  revalidatePath('/auth/register');
  return users;
}

// ─── Comp ─────────────────────────────────────────── 🟩 ─

const page = async () => {
  const users = await getUsers();
  // ─── Return ──────────────────────────────────────────────

  return (
    <div className="flex flex-col items-center justify-center h-screen gap-4 ">
      <div className="flex flex-col items-center justify-center gap-4  border-1 shadow-2xl border-zinc-400 p-4 rounded-3xl">
        <Image
          className="text-xl text-center w-20 mb-5"
          src="/icon.png"
          alt="logo"
          width={200}
          height={200}
        />
        <h1 className="text-xl text-center w-60">
          Share your thoughts with everyone
        </h1>
        <div className="flex gap-4 w-full items-center justify-between">
          <Button size="lg">
            <LoginLink>Sign in</LoginLink>
          </Button>
          <Button size="lg">
            <RegisterLink>Register</RegisterLink>
          </Button>
        </div>
        <div className="w-full">
          <Card className="p-4 justify-around flex">
            Current Users : {users.length}
          </Card>
        </div>
      </div>
    </div>
  );
};
export default page;
