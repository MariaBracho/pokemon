import ENTRY_POINTS from '@/constants/entryPoints';

import { pokemonAPI } from '@/core/api';

import type { PaginateProps, PaginateResponse } from '@/models/paginate';
import type { Item } from '@/models/heldItems';
import type { URLDetails } from '@/models/urlDetail';

const { ITEM } = ENTRY_POINTS;

type ItemName = string;
type ItemId = number;

type URLItem = URLDetails;

const LIMIT = 40;

export const getSingleItem = async (item: ItemName | ItemId = '') => {
  const { data } = await pokemonAPI.get<Item>(`${ITEM}/${item}`);
  return data;
};

export const getItems = async ({
  page,
  limit = LIMIT,
  search = '',
}: PaginateProps) => {
  const { data } = await pokemonAPI.get<PaginateResponse<URLItem>>(
    `${ITEM}/${search}`,
    {
      params: {
        limit,
        offset: page * limit,
      },
    },
  );
  return data;
};

export const getItemsWithDetails = async (
  paginate: PaginateProps,
): Promise<PaginateResponse<Item>> => {
  const items = await getItems(paginate);

  const itemsPromises = items.results.map(async ({ name }) => {
    const singlePokemon = await getSingleItem(name);
    return singlePokemon;
  });

  return {
    ...items,
    results: await Promise.all(itemsPromises),
  };
};
