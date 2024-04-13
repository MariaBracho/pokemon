import ListOfItems from '@/features/items/components/ListOfItems';
import type { SearchParams } from '@/models/searchParams';

export default function Items({ searchParams }: SearchParams) {
  return <ListOfItems search={searchParams.search} page={searchParams.page} />;
}
