import type { GameIndex } from './gameIndex';
import type { URLDetails } from './urlDetail';

export interface HeldByPokemon {
  pokemon: URLDetails;
  version_details: VersionDetail[];
}

export interface EffectEntry {
  effect: string;
  language: URLDetails;
  short_effect: string;
}

export interface FlavorTextEntry {
  language: URLDetails;
  text: string;
  version_group: URLDetails;
}

export interface Name {
  language: URLDetails;
  name: string;
}

export interface Sprites {
  default: string;
}

export interface BabyTriggerFor {
  url: string;
}

export interface Item {
  attributes: URLDetails[];
  baby_trigger_for?: BabyTriggerFor;
  category: URLDetails;
  cost: number;
  effect_entries: EffectEntry[];
  flavor_text_entries: FlavorTextEntry[];
  fling_effect?: URLDetails;
  fling_power?: number;
  game_indices: GameIndex[];
  held_by_pokemon?: HeldByPokemon[];
  id: number;
  machines: any[];
  name: string;
  names: Name[];
  sprites: Sprites;
}

interface VersionDetail {
  rarity: number;
  version: URLDetails;
}

export interface HeldItem {
  item: URLDetails;
  version_details: VersionDetail[];
}
