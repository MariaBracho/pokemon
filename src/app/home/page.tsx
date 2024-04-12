import ListOfPokemons from '@/features/home/components/ListOfPokemons/ListOfPokemons';
import type { SearchParams } from '@/models/searchParams';

export default function Home({ searchParams }: SearchParams) {
  return (
    <ListOfPokemons search={searchParams.search} page={searchParams.page} />
  );
}
