import { create } from 'zustand'


export const useCollectionStore = create((set) => ({
  collection: [],

  catchPokemon: (pokemon) =>
    set((state) => {

      if (state.collection.some(p => p.id === pokemon.id)) return state

      return {
        collection: [...state.collection, pokemon]
      }
    }),
}))