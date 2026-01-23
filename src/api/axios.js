import axios from 'axios'

export const pokemonApi = axios.create({
  baseURL: 'https://pokeapi.co/api/v2',
})

export const getPokemons = (limit = 20, offset = 0) =>
  pokemonApi.get(`/pokemon?limit=${limit}&offset=${offset}`)

export const getPokemonByName = (name) =>
  pokemonApi.get(`/pokemon/${name}`)
