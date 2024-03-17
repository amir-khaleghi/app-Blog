import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { Link } from 'lucide-react';
import { Button } from './ui/button';
const FormSkeleton = () => {
  return (
    <Card>
      <CardHeader className="">
        <CardTitle></CardTitle>
        {/* <CardDescription>{description}</CardDescription> */}
      </CardHeader>
      <CardContent></CardContent>
      <CardFooter className="flex justify-end">
        {/* <Button variant="outline">{buttonLText}</Button> */}
        <Button></Button>
      </CardFooter>
    </Card>
  );
};

export default FormSkeleton;
