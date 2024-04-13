'use client';

import { useEffect, useState } from 'react';
import { usePathname, useRouter, useSearchParams } from 'next/navigation';
import ArrowIcon from '@/components/icons/ArrowIcon';

export default function Pagination({ maxPage }: { maxPage: number }) {
  const searchParams = useSearchParams();
  const pathname = usePathname();

  const [currentPage, setCurrentPage] = useState(1);
  const [previusPage, setPreviusPage] = useState(0);

  const router = useRouter();

  useEffect(() => {
    setCurrentPage(Number(searchParams.get('page') ?? 1));
  }, [searchParams]);

  useEffect(() => {
    if (currentPage !== previusPage) {
      const params = new URLSearchParams(searchParams);
      params.set('page', currentPage.toString());
      setPreviusPage(currentPage);
      router.replace(`${pathname}?${params.toString()}`);
    }
  }, [currentPage, searchParams, pathname, router, previusPage]);

  const nextPage = () => {
    setCurrentPage((page) => ++page);
  };

  const prevPage = () => {
    setCurrentPage((page) => --page);
  };

  const isLastPageDisabled = currentPage === 1;
  const isNextPageDisbled = currentPage === maxPage;

  return (
    <div className="flex gap-4">
      <button
        data-testid="prevButton"
        onClick={prevPage}
        disabled={isLastPageDisabled}
        className="disabled:cursor-not-allowed outline-none"
      >
        <ArrowIcon />
      </button>
      <div data-testid="page-numbers" className="flex text-white gap-1">
        <p>{currentPage}</p>
        <p>/</p>
        <p>{maxPage}</p>
      </div>
      <button
        data-testid="nextButton"
        className="rotate-180  disabled:cursor-not-allowed outline-none"
        onClick={nextPage}
        disabled={isNextPageDisbled}
      >
        <ArrowIcon />
      </button>
    </div>
  );
}
