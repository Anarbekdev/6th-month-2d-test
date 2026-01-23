import { create } from "zustand"
import {pokemonApi} from '../api/axios'
export const usePokemonStore = create((set, get) => ({
  pokemons: [],
  offset: 0,
  isLoading: false,

  loadMore: async () => {
    const { offset, pokemons, isLoading } = get()
    if (isLoading) return

    set({ isLoading: true })

    const res = await pokemonApi.get(`/pokemon?limit=20&offset=${offset}`)

    const detailed = await Promise.all(
      res.data.results.map(p =>
        pokemonApi.get(`/pokemon/${p.name}`).then(r => r.data)
      )
    )

    set({
      pokemons: [...pokemons, ...detailed],
      offset: offset + 20,
      isLoading: false,
    })
  },
}))
