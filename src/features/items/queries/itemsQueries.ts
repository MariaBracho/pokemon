import { useQuery } from '@tanstack/react-query';

import type { PaginateProps } from '@/models/paginate';

import {
  getSingleItem,
  getItemsWithDetails,
} from '@/features/items/services/itemsServices';

const ITEMS_QUERY_KEY = 'ITEMS_QUERY_KEY';
const SINGLE_ITEM_KEY = 'SINGLE_ITEM_KEY';

export const useGetItems = ({ page }: PaginateProps) => {
  return useQuery({
    queryKey: [ITEMS_QUERY_KEY, page],
    queryFn: async () => await getItemsWithDetails({ page }),
  });
};

export const useGetSingleItem = (pokemon: string | number) => {
  return useQuery({
    queryKey: [SINGLE_ITEM_KEY, pokemon],
    queryFn: async () => await getSingleItem(pokemon),
  });
};
