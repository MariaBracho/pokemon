'use client';

import { useGetPokemons } from '../queries/pokemonQueries';
import PokemonCard from './PokemonCard';
import cls from 'classnames';

import style from './pokemon.module.css';

export default function ListOfPokemons() {
  const { data: pokemons, isLoading } = useGetPokemons({ page: 1 });

  return (
    <div className="flex justify-center">
      <div className={cls('flex gap-3 max-w-[1198px]', style.listOfPokemons)}>
        {pokemons && !isLoading ? (
          pokemons.map(({ id, name, sprites, types }) => {
            return (
              <PokemonCard
                key={id}
                name={name}
                types={types}
                image={sprites.other.home.front_shiny}
              />
            );
          })
        ) : (
          <p>...loading</p>
        )}
      </div>
    </div>
  );
}
