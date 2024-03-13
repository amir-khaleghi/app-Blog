'use client';

interface PostPageProps {
  params: { id: string };
}

const PostPage = ({ params }: PostPageProps) => {
  console.log(params);
  return (
    <main className="flex flex-col items-center justify-between min-h-screen  px-4 sm:px-20 py-10 ">
      <div>
        <h1>This is the Id of the page:</h1>
        {params.id}
      </div>
    </main>
  );
};
export default PostPage;
