import type { URLDetails } from './urlDetail';
import type { Ability } from './ability';
import type { HeldItem } from './heldItems';
import type { Cries } from './cries';
import type { Stat } from './stat';
import type { PokemonType } from './pokemonType';
import type { GameIndex } from './gameIndex';
import type { Move } from './move';
import type { OtherSprites } from './sprite';
import type { PastType } from './pokemonPastType';

export interface Pokemon {
  id: number;
  name: string;
  base_experience: number;
  height: number;
  is_default: boolean;
  order: number;
  weight: number;
  abilities: Ability[];
  forms: URLDetails[];
  game_indices: GameIndex[];
  held_items: HeldItem[];
  location_area_encounters: string;
  moves: Move[];
  species: URLDetails;
  sprites: OtherSprites;
  cries: Cries;
  stats: Stat[];
  types: PokemonType[];
  past_types: PastType[];
}
