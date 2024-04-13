import SkeletonCard from '@/features/home/components/skeletons/SkeletonCard';

import NotResultsFound from '@/components/NotResultsFound';

import type { Pokemon } from '@/models/pokemon';

import PokemonCard from './PokemonCard';

interface Props {
  pokemon: Pokemon | undefined;
  isLoading: boolean;
  isError: boolean;
  pokemonName: string;
}

export default function SinglePokemon({
  pokemon,
  isLoading,
  isError,
  pokemonName,
}: Props) {
  if (isError && !pokemon) {
    return (
      <NotResultsFound search={pokemonName} searchName="pokemon" path="/home" />
    );
  }
  return (
    <div className="w-full mt-5 md:mt-3">
      {!isLoading ? (
        pokemon && (
          <PokemonCard
            {...pokemon}
            baseExperience={pokemon.base_experience}
            name={pokemon.name}
            types={pokemon.types}
            image={pokemon.sprites.other.home.front_shiny}
            hitPoints={pokemon.stats?.[0]?.base_stat}
          />
        )
      ) : (
        <SkeletonCard />
      )}
    </div>
  );
}
