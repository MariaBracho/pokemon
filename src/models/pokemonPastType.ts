import type { PokemonType } from './pokemonType';
import type { URLDetails } from './urlDetail';

export interface PastType {
  generation: URLDetails;
  types: PokemonType[];
}
