import { create } from "zustand"
import { pokemonApi} from '../api/axios'
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
  getPokemonById: async (id) => {
    const { pokemons } = get();
    
    // 1. Проверяем, может он уже есть? Если да, ничего не делаем
    if (pokemons.some(p => p.id === +id)) return;
  
    set({ isLoading: true });
    try {
      // 2. Запрос к API (через axios, как в твоем конфиге)
      const res = await pokemonApi.get(`/pokemon/${id}`);
      
      // 3. Добавляем одного нового покемона в массив
      set({ 
        pokemons: [...pokemons, res.data],
        isLoading: false 
      });
    } catch (error) {
      console.error("Ошибка при загрузке покемона:", error);
      set({ isLoading: false });
    }
  }

  
}))
