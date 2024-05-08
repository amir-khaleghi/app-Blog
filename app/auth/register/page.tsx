import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { db } from '@/lib/db';
import {
  RegisterLink,
  LoginLink,
} from '@kinde-oss/kinde-auth-nextjs/components';

// ─── Comp ─────────────────────────────────────────── 🟩 ─

const page = async () => {
  const users = await db.user.findMany();
  let numberOfUsers = users.length;

  // ─── Return ──────────────────────────────────────────────

  return (
    <div className="flex flex-col items-center justify-center h-screen gap-4">
      <div className="flex flex-col items-center justify-center gap-4 ">
        <h1 className="text-xl text-center w-60">
          Hello my gorgeous friend, I am so glad that you are here. 😃
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
            Current Users : {numberOfUsers}
          </Card>
        </div>
      </div>
    </div>
  );
};
export default page;
