import { useParams } from "react-router-dom";
import { usePokemonStore } from "../store/pokemonStore";
import { Card } from "antd";
import { useEffect } from "react";

export const DetailPoke = () => {
  const { id } = useParams();
  const pokemon = usePokemonStore((p) => p.pokemons.find((p) => p.id === +id));
  // useEffect(() => {
  //   const audio = new Audio(pokemon.cries.latest)
  //   audio.play()
  // }, [])
  console.log(pokemon);

  if (!pokemon) return <p>data is empty...</p>;
  console.log(pokemon);

  return (
    <>
      <Card
        title={pokemon.name}
        cover={
          <img
            src={pokemon.sprites.other.dream_world.front_default}
            alt={pokemon.name}
            style={{ maxWidth: 300, width: '100%', margin: '0 auto', display: 'block', objectFit: 'contain' }}
          />
        }
        style={{maxWidth: 500, margin: '0 auto'}}
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
