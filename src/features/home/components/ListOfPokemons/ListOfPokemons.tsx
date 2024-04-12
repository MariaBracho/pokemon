'use client';

import {
  useGetPokemons,
  useGetSinglePokemon,
} from '@/features/home/queries/pokemonQueries';

import PokemonsCards from './PokemonsCards';
import SinglePokemon from './SinglePokemon';
import Pagination from '@/components/table/Pagination';

export default function ListOfPokemons({
  search,
  page,
}: {
  search: string;
  page: string;
}) {
  const pageQuery = page ? Number(page) : 1;

  const { data: pokemons, isLoading: isLoadingPokemons } = useGetPokemons({
    page: pageQuery,
  });

  const maxPage =
    pokemons?.count && pokemons.count > 15 ? Math.ceil(pokemons.count / 15) : 1;

  const {
    data: singlePokemon,
    isLoading: isLoadingPokemon,
    isError,
  } = useGetSinglePokemon(search);

  return (
    <div className="flex flex-col items-center">
      <div className="max-w-[1198px] w-full">
        <div
          data-islist={!!search}
          className="w-full  data-[islist=true]:hidden mt-8 flex justify-between"
        >
          <div>
            <p className="text-white text-sm ">
              <span>Total results: </span>
              <span className="font-bold">{pokemons?.results.length}</span>
            </p>
          </div>
          <div
            data-show={!!search}
            className="md:hidden data-[show=true]:hidden"
          >
            <Pagination maxPage={maxPage} />
          </div>
        </div>
        {!search ? (
          <PokemonsCards
            isLoading={isLoadingPokemons}
            pokemons={pokemons?.results}
          />
        ) : (
          <SinglePokemon
            isError={isError}
            pokemonName={search}
            isLoading={isLoadingPokemon}
            pokemon={singlePokemon}
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
