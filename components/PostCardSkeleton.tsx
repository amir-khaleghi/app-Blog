import { CardComp } from './CardComp';

const PostCardSkeleton = () => {
  return (
    <div className="flex flex-wrap sm:px-10  items-center justify-center  gap-6  lg:px-[100px] md:px-8">
      <CardComp className="bg-gradient-to-t from-muted/50 to-muted animate-pulse w-80 ">
        <div className="h-4 w-40 mb-10 bg-gray-300 rounded"></div>
        <div className="animate-pulse flex space-x-4">
          <div className="flex-1 space-y-6 py-1">
            <div className="h-2 bg-gray-300 rounded"></div>
            <div className="space-y-3">
              <div className="grid grid-cols-3 gap-4">
                <div className="h-2 bg-gray-300 rounded col-span-2"></div>
                <div className="h-2 bg-gray-300 rounded col-span-1"></div>
              </div>
              <div className="h-2 bg-gray-300 rounded w-8"></div>
            </div>
          </div>
        </div>
      </CardComp>
      <CardComp className="bg-gradient-to-t from-muted/50 to-muted animate-pulse w-80 ">
        <div className="h-4 w-40 mb-10 bg-gray-300 rounded"></div>
        <div className="animate-pulse flex space-x-4">
          <div className="flex-1 space-y-6 py-1">
            <div className="h-2 bg-gray-300 rounded"></div>
            <div className="space-y-3">
              <div className="grid grid-cols-3 gap-4">
                <div className="h-2 bg-gray-300 rounded col-span-2"></div>
                <div className="h-2 bg-gray-300 rounded col-span-1"></div>
              </div>
              <div className="h-2 bg-gray-300 rounded w-8"></div>
            </div>
          </div>
        </div>
      </CardComp>
      <CardComp className="bg-gradient-to-t from-muted/50 to-muted animate-pulse w-80 ">
        <div className="h-4 w-40 mb-10 bg-gray-300 rounded"></div>
        <div className="animate-pulse flex space-x-4">
          <div className="flex-1 space-y-6 py-1">
            <div className="h-2 bg-gray-300 rounded"></div>
            <div className="space-y-3">
              <div className="grid grid-cols-3 gap-4">
                <div className="h-2 bg-gray-300 rounded col-span-2"></div>
                <div className="h-2 bg-gray-300 rounded col-span-1"></div>
              </div>
              <div className="h-2 bg-gray-300 rounded w-8"></div>
            </div>
          </div>
        </div>
      </CardComp>
      <CardComp className="bg-gradient-to-t from-muted/50 to-muted animate-pulse w-80 ">
        <div className="h-4 w-40 mb-10 bg-gray-300 rounded"></div>
        <div className="animate-pulse flex space-x-4">
          <div className="flex-1 space-y-6 py-1">
            <div className="h-2 bg-gray-300 rounded"></div>
            <div className="space-y-3">
              <div className="grid grid-cols-3 gap-4">
                <div className="h-2 bg-gray-300 rounded col-span-2"></div>
                <div className="h-2 bg-gray-300 rounded col-span-1"></div>
              </div>
              <div className="h-2 bg-gray-300 rounded w-8"></div>
            </div>
          </div>
        </div>
      </CardComp>
    </div>
  );
};
export default PostCardSkeleton;
