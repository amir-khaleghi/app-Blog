// ─── Type ─────────────────────────────────────────── 🟩 ─

import Link from 'next/link';
import { Button } from './ui/button';

interface PaginationBarProps {
  currentPage: number;
  totalPages: number;
}

// ─── Comp ─────────────────────────────────────────── 🟩 ─

const PaginationBar = ({ currentPage, totalPages }: PaginationBarProps) => {
  // ─────────────────────────────────────────────────────────

  return (
    <>
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
