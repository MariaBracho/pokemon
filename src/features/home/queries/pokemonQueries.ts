import { useQuery } from '@tanstack/react-query';
import { getPokemonsWithDetails } from '@/features/home/services/pokemons';
import type { PaginateProps } from '@/models/paginate';

const POKEMONS_QUERY_KEY = 'POKEMONS_QUERY_KEY';

export const useGetPokemons = ({ page }: PaginateProps) => {
  return useQuery({
    queryKey: [POKEMONS_QUERY_KEY, page],
    queryFn: async () => await getPokemonsWithDetails({ page }),
  });
};
