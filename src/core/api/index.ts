import axios from 'axios';
import config from '@/core/config';

export const pokemonAPI = axios.create({
  baseURL: `${config().pokemon_api_url}/v2/`,
});
