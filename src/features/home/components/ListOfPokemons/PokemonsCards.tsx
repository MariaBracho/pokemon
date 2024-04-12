import type { Pokemon } from '@/models/pokemon';
import PokemonCard from './PokemonCard';
import cls from 'classnames';
import style from './pokemon.module.css';
import SkeletonCard from './SkeletonCard';
import { generateArray } from '@/utils/generateArray';

interface Props {
  isLoading: boolean;
  pokemons: Pokemon[] | undefined;
}

export default function PokemonsCards({ isLoading, pokemons }: Props) {
  const skeletonList = generateArray(15);
  return (
    <div className={cls(style.listOfPokemons, 'gap-2 md:gap-3 mt-5 md:mt-3')}>
      {pokemons && !isLoading
        ? pokemons.map(({ id, name, sprites, types, stats, ...rest }) => (
            <PokemonCard
              key={id}
              name={name}
              types={types}
              image={sprites.other.home.front_shiny}
              hitPoints={stats?.[0]?.base_stat}
              stats={stats}
              sprites={sprites}
              id={id}
              {...rest}
            />
          ))
        : skeletonList.map((item) => <SkeletonCard key={item} />)}
    </div>
  );
}
