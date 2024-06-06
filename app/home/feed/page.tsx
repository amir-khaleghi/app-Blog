import Footer from '@/components/Footer';
import Feed from '@/components/Feed';

interface HomeProps {
  searchParams: { page: string };
}
export default async function Home({
  searchParams: { page = '1' },
}: HomeProps) {
  return (
    <>
      <Feed page={page} />
      <Footer />
    </>
  );
}
