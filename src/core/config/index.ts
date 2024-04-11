export interface Config {
  pokemon_api_url: string;
}

export default function config(): Config {
  return {
    pokemon_api_url: process.env.POKEMON_API_URL ?? 'not_defined',
  };
}
