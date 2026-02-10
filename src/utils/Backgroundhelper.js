import { typeColors } from '../styles/colors';

export const getPokemonColor = (pokemon) => {
  if (!pokemon || !pokemon.types || pokemon.types.length === 0) {
    return '#f0f0f0';
  }
  const mainType = pokemon.types[0].type.name;
  return typeColors[mainType] || '#f0f0f0';
};