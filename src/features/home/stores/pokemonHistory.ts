'use client';

import { create } from 'zustand';
import { persist } from 'zustand/middleware';

interface PokemonHistoryStore {
  pokemonHistory: number[];
  setPokemonHistory: (id: number) => void;
}

const POKEMON_HISTORY_STORAGE_KEY = 'POKEMON_HISTORY_STORAGE_KEY';

const usePokemonHistoryStore = create(
  persist<PokemonHistoryStore>(
    (set) => ({
      pokemonHistory: [],
      setPokemonHistory: (pokemonId: number) => {
        set((state) => {
          const havePokemonId = state.pokemonHistory.includes(pokemonId);
          if (!havePokemonId) {
            return {
              pokemonHistory: [...state.pokemonHistory, pokemonId],
            };
          }
          return { pokemonHistory: state.pokemonHistory };
        });
      },
    }),
    {
      name: POKEMON_HISTORY_STORAGE_KEY,
    },
  ),
);

export default usePokemonHistoryStore;
