import type {
  FrontSprites,
  FrontSpritesBase,
  GenerationSprite,
  Sprite,
} from './sprite';

interface Icons {
  front_default: string;
  front_female: null | string;
}

interface RedBlue {
  back_default: string;
  back_gray: string;
  front_default: string;
  front_gray: string;
}

interface Yellow {
  back_default: string;
  back_gray: string;
  front_default: string;
  front_gray: string;
}

interface BlackWhite extends Sprite {
  animated: Sprite;
}

interface GenerationI {
  'red-blue': RedBlue;
  yellow: Yellow;
}

interface GenerationIi {
  crystal: GenerationSprite;
  gold: GenerationSprite;
  silver: GenerationSprite;
}

interface GenerationIii {
  emerald: FrontSpritesBase;
  'firered-leafgreen': GenerationSprite;
  'ruby-sapphire': GenerationSprite;
}

interface GenerationIv {
  'diamond-pearl': Sprite;
  'heartgold-soulsilver': Sprite;
  platinum: Sprite;
}

interface GenerationV {
  'black-white': BlackWhite;
}

export interface GenerationVi {
  'omegaruby-alphasapphire': FrontSprites;
  'x-y': FrontSprites;
}

interface GenerationVii {
  icons: Icons;
  'ultra-sun-ultra-moon': FrontSprites;
}

interface GenerationViii {
  icons: Icons;
}

export interface Versions {
  'generation-i': GenerationI;
  'generation-ii': GenerationIi;
  'generation-iii': GenerationIii;
  'generation-iv': GenerationIv;
  'generation-v': GenerationV;
  'generation-vi': GenerationVi;
  'generation-vii': GenerationVii;
  'generation-viii': GenerationViii;
}
