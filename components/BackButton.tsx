import { useRouter } from 'next/navigation';
import { Button } from './ui/button';
import { Undo2 } from 'lucide-react';

interface BackButtonProps {
  className: string;
}

const BackButton = ({ className }: BackButtonProps) => {
  const router = useRouter();
  return (
    <Button
      className={className}
      onClick={() => router.back()}
    >
      <Undo2 /> Back
    </Button>
  );
};
export default BackButton;
