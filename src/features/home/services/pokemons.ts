import ENTRY_POINTS from '@/constants/entryPoints';

import { pokemonAPI } from '@/core/api';

import type { PaginateProps, PaginateResponse } from '@/models/paginate';
import type { Pokemon } from '@/models/pokemon';
import type { URLDetails } from '@/models/urlDetail';

const { POKEMON } = ENTRY_POINTS;

type PokemonName = string;
type PokemonId = number;

type URLPokemon = URLDetails;

const LIMIT = 15;

export const getSinglePokemon = async (
  pokemon: PokemonName | PokemonId = '',
) => {
  const { data } = await pokemonAPI.get<Pokemon>(`${POKEMON}/${pokemon}`);
  return data;
};

export const getPokemons = async ({
  page,
  limit = LIMIT,
  search = '',
}: PaginateProps) => {
  const { data } = await pokemonAPI.get<PaginateResponse<URLPokemon>>(
    `${POKEMON}/${search}`,
    {
      params: {
        limit,
        offset: page * limit,
      },
    },
  );
  return data;
};

export const getPokemonsWithDetails = async (
  paginate: PaginateProps,
): Promise<PaginateResponse<Pokemon>> => {
  const pokemons = await getPokemons(paginate);

  const pokemonPromises = pokemons.results.map(async ({ name }) => {
    const singlePokemon = await getSinglePokemon(name);
    return singlePokemon;
  });

  return {
    ...pokemons,
    results: await Promise.all(pokemonPromises),
  };
};
