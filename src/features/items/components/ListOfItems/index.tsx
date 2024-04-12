'use client';

import Pagination from '@/components/table/Pagination';

import { getMaxPage } from '@/utils/getMaxPage';

import {
  useGetItems,
  useGetSingleItem,
} from '@/features/items/queries/itemsQueries';

import ItemsCards from './ItemsCards';
import SingleItemCard from './SingleItemCard';
import { Suspense } from 'react';

export default function ListOfItems({
  search,
  page,
}: {
  search: string;
  page: string;
}) {
  const pageQuery = page ? Number(page) : 1;

  const { data: items, isLoading: isLoadingItems } = useGetItems({
    page: pageQuery,
  });

  const maxPage = getMaxPage(items?.count, 40);

  const {
    data: singleItem,
    isLoading: isLoadingSingleItem,
    isError,
  } = useGetSingleItem(search);

  return (
    <div className="flex flex-col items-center h-full">
      <div className="max-w-[1198px] w-full h-auto min-h-[60vh]  md:px-20">
        <div
          data-islist={!!search}
          className="w-full  data-[islist=true]:hidden mt-8 flex justify-between"
        >
          <div>
            <p className="text-white text-sm ">
              <span>Total results: </span>
              <span className="font-bold">{items?.results.length}</span>
            </p>
          </div>
          <div
            data-show={!!search}
            className="md:hidden data-[show=true]:hidden"
          >
            <Suspense>
              <Pagination maxPage={maxPage} />
            </Suspense>
          </div>
        </div>
        {!search ? (
          <ItemsCards isLoading={isLoadingItems} items={items?.results ?? []} />
        ) : (
          <SingleItemCard
            search={search}
            isLoading={isLoadingSingleItem}
            item={singleItem}
            isError={isError}
          />
        )}
      </div>
      <div
        data-show={!!search}
        className="mt-5 hidden md:block data-[show=true]:hidden"
      >
        <Pagination maxPage={maxPage} />
      </div>
    </div>
  );
}
