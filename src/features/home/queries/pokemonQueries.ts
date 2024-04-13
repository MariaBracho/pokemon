import { useQuery } from '@tanstack/react-query';

import {
  getPokemonsWithDetails,
  getSinglePokemon,
} from '@/features/home/services/pokemons';

import type { PaginateProps } from '@/models/paginate';

const POKEMONS_QUERY_KEY = 'POKEMONS_QUERY_KEY';
const SINGLE_POKEMON_KEY = 'SINGLE_POKEMON_KEY';

export const useGetPokemons = ({ page }: PaginateProps) => {
  return useQuery({
    queryKey: [POKEMONS_QUERY_KEY, page],
    queryFn: async () => await getPokemonsWithDetails({ page }),
  });
};

export const useGetSinglePokemon = (pokemon: string | number) => {
  return useQuery({
    queryKey: [SINGLE_POKEMON_KEY, pokemon],
    queryFn: async () => await getSinglePokemon(pokemon),
  });
};
