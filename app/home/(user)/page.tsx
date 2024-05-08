import Footer from '@/components/Footer';
import PostList from '@/components/PostList';

interface HomeProps {
  searchParams: { page: string };
}
export default async function Home({
  searchParams: { page = '1' },
}: HomeProps) {
  // ─── Return ──────────────────────────────────────────────

  return (
    <>
      <div className="min-h-[450px]">
        <PostList page={page} />
      </div>
      <Footer />
    </>
  );
}
