// ─── Type ─────────────────────────────────────────── 🟩 ─

import Link from 'next/link';
import { Button } from './ui/button';

interface PaginationBarProps {
  currentPage: number;
  totalPages: number;
}

// ─── Comp ─────────────────────────────────────────── 🟩 ─

const PaginationBar = ({ currentPage, totalPages }: PaginationBarProps) => {
  /* Max Page ----------------------- */
  const maxPage = Math.min(totalPages, Math.max(currentPage + 4, 10));

  /* Min Page ----------------------- */
  const minPage = Math.max(1, Math.min(currentPage - 5, maxPage - 9));

  const numberedPageItems: JSX.Element[] = [];
  for (let page = minPage; page <= maxPage; page++) {
    numberedPageItems.push(
      <Link
        scroll={false}
        key={page}
        className={` ${currentPage === page ? 'bg-red-400' : ''}`}
        href={'?page=' + page}
      >
        {page}
      </Link>
    );
  }

  // ─────────────────────────────────────────────────────────

  return (
    <>
      {/* <div className=" hidden sm:block ">{numberedPageItems}</div> */}
      <div className="  flex relative    items-center">
        {currentPage > 1 && (
          <Link
            scroll={false}
            href={'?page=' + (currentPage - 1)}
            className="  p-2 text-xl absolute right-10"
          >
            ⇦
          </Link>
        )}
        <Button size="icon">{currentPage}</Button>
        {currentPage < totalPages && (
          <Link
            scroll={false}
            href={'?page=' + (currentPage + 1)}
            className="left-10 p-2 text-xl absolute"
          >
            ⇨
          </Link>
        )}
      </div>
    </>
  );
};
export default PaginationBar;
