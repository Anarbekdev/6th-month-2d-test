import { useParams } from "react-router-dom";
import { usePokemonStore } from "../store/pokemonStore";
import { Card } from "antd";
import { useEffect } from "react";
import '../styles/pokemon.scss'
import { getPokemonColor } from "../utils/Backgroundhelper";

export const DetailPoke = () => {
  const { id } = useParams();
  const {pokemons, getPokemonById} = usePokemonStore();
  const pokemon = pokemons.find((poke) => poke.id === +id)
  // useEffect(() => {
  //   const audio = new Audio(pokemon?.cries?.latest)
  //   audio.play()
  
  // }, [])
useEffect(() => {
  getPokemonById(id)
},[id,pokemon])

const bgColor = getPokemonColor(pokemon)


  console.log(pokemon);

  if (!pokemon) return <p>data is empty...</p>;

  return (
    <>
      <Card
        title={pokemon.name}
        className="card"
        cover={
          <img
            src={pokemon.sprites.other.dream_world.front_default}
            alt={pokemon.name}
            style={{ maxWidth: 300, width: '100%', margin: '0 auto', display: 'block', objectFit: 'contain' }}
          />
        }
        style={{maxWidth: 500, margin: '0 auto', backgroundColor:bgColor}}
      >
        <p>HP: {pokemon.stats[0].base_stat}</p>
        <p>Attack: {pokemon.stats[1].base_stat}</p>
        
      </Card>
      <img src={pokemon.sprites.back_default}   />
      <img src={pokemon.sprites.front_default}  />
      <img src={pokemon.sprites.back_shiny}  />
      <img src={pokemon.sprites.front_shiny}  />
      <img src={pokemon.sprites.other.dream_world.front_default}  />    
      <img src={pokemon.sprites.other.home.front_default} className="imga" />
      <img src={pokemon.sprites.other.home.front_shiny}  />
      <img src={pokemon.sprites.other['official-artwork'].front_shiny} />
      <img src={pokemon.sprites.other['official-artwork'].front_default} className="IMG"  />
      <img src={pokemon.sprites.other.showdown.front_default} />
      <img src={pokemon.sprites.other.showdown.front_shiny}  />
      <img src={pokemon.sprites.other.showdown.back_default}  />
      <img src={pokemon.sprites.other.showdown.back_shiny}  />
    </>
  );
};
