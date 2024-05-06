import { Button } from '@/components/ui/button';
import {
  RegisterLink,
  LoginLink,
} from '@kinde-oss/kinde-auth-nextjs/components';

// ─── Comp ─────────────────────────────────────────── 🟩 ─

const page = () => {
  // ─── Return ──────────────────────────────────────────────

  return (
    <div className="flex flex-col items-center justify-center h-screen gap-4">
      <h1 className="text-xl text-center w-40">
        Hello my gorgeous friend, I am so glad that you are here. 😃
      </h1>
      <div className="flex gap-4">
        <Button size="lg">
          <LoginLink>Sign in</LoginLink>
        </Button>
        <Button size="lg">
          <RegisterLink>Register</RegisterLink>
        </Button>
      </div>
    </div>
  );
};
export default page;
