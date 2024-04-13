import ListOfPokemons from '@/features/home/components/ListOfPokemons/ListOfPokemons';

import type { SearchParams } from '@/models/searchParams';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Home',
};

export default function Home({ searchParams: { search, page } }: SearchParams) {
  return <ListOfPokemons search={search} page={page} />;
}
