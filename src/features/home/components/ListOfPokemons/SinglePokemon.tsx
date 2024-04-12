import type { Pokemon } from '@/models/pokemon';
import PokemonCard from './PokemonCard';
import SkeletonCard from './SkeletonCard';
import NotFoundPokemon from './NotFoundPokemon';

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
    return <NotFoundPokemon pokemonName={pokemonName} />;
  }
  return (
    <div className="w-full mt-5 md:mt-3">
      {!isLoading ? (
        pokemon && (
          <PokemonCard
            {...pokemon}
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
