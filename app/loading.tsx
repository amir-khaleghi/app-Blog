import { Card } from '@/components/ui/card';

export default function HomePageLoader() {
  return (
    <div className="flex justify-center items-center w-full min-h-screen h-80">
      <Card className="p-4">
        <div className="w-24 h-24 border-4 border-dashed rounded-full border-black animate-spin dark:border-white"></div>
      </Card>
    </div>
  );
}
