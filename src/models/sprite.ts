import type { Versions } from './versions';

export interface FrontSpritesBase {
  front_default: string;
  front_shiny: string;
}

export interface FrontSprites extends FrontSpritesBase {
  front_female: any;
  front_shiny_female: any;
}

export interface BackSprites {
  back_default: string;
  back_female: any;
  back_shiny: string;
  back_shiny_female: any;
}

export type Sprite = BackSprites & FrontSprites;

export type GenerationSprite = Omit<
  Sprite,
  | Sprite['back_female']
  | Sprite['back_shiny_female']
  | Sprite['front_female']
  | Sprite['front_shiny_female']
>;

export interface DreamWorld {
  front_default: string;
  front_female: any;
}

export interface OfficialArtwork {
  front_default: string;
  front_shiny: string;
}

export interface Other {
  dream_world: DreamWorld;
  home: FrontSpritesBase;
  'official-artwork': OfficialArtwork;
  showdown: Sprite;
}

export interface OtherSprites extends Sprite {
  other: Other;
  versions: Versions;
}
