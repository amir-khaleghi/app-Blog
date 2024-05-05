import { Button } from '@/components/ui/button';
import {
  RegisterLink,
  LoginLink,
} from '@kinde-oss/kinde-auth-nextjs/components';

const page = () => {
  return (
    <div className="flex flex-col items-center justify-center h-screen gap-4">
      <h1>Hello my gorgeous friend, I'm so glad that you are here. 😃</h1>
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
