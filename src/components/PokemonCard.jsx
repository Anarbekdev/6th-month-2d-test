import { Card, Button } from 'antd'
import { useCollectionStore } from '../store/collectionStore'
import { useNavigate } from 'react-router-dom';
export const PokemonCard = ({ pokemon }) =>  {
  const  catchPokemon  = useCollectionStore(s => s.catchPokemon)
  
//  console.log(pokemon.sprites.other.dream_world.front_default);
//  console.log(pokemon);
 const navigate = useNavigate()

  return (
    <Card
      title={pokemon.name}
      cover={
        <img
          src={pokemon.sprites.other.dream_world.front_default}
          alt={pokemon.name}
          style={{
            height: '200px',       // фиксированная высота
            width: '100%',          // адаптивно
            objectFit: 'contain',   // сохраняем пропорции
            display: 'block',
            margin: '0 auto'
          }}
        />
      }
      onClick={() => navigate(`/pokemon/${pokemon.id}`)}
    >
      <p>HP: {pokemon.stats[0].base_stat}</p>
      <p>Attack: {pokemon.stats[1].base_stat}</p>

      <Button type="primary" onClick={(e) => {
        e.stopPropagation();
 catchPokemon(pokemon)
      }}>
        Catch
      </Button>
    </Card>
  )
}
