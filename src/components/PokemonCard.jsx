import { Card, Button } from 'antd'
import { useCollectionStore } from '../store/collectionStore'
export const PokemonCard = ({ pokemon }) =>  {
  const  catchPokemon  = useCollectionStore(s => s.catchPokemon)
  
 
  return (
    <Card
      title={pokemon.name}
      cover={<img src={pokemon.sprites.front_default} />}
    >
      <p>HP: {pokemon.stats[0].base_stat}</p>
      <p>Attack: {pokemon.stats[1].base_stat}</p>

      <Button type="primary" onClick={() => catchPokemon(pokemon)}>
        Catch
      </Button>
    </Card>
  )
}
