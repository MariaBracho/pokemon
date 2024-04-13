import ListOfItems from '@/features/items/components/ListOfItems';

import type { SearchParams } from '@/models/searchParams';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Items',
};

export default function Items({
  searchParams: { search, page },
}: SearchParams) {
  return <ListOfItems search={search} page={page} />;
}
