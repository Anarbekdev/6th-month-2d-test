export const calcPower = (pokemon) => {
    if (!pokemon?.stats) return 0
  
    return pokemon.stats.reduce((total, s) => total + s.base_stat, 0)
  }