import { Card, Button, Tag, Space } from "antd";
import { useCollectionStore } from "../store/collectionStore";
import { useNavigate } from "react-router-dom";
import '../styles/pokemon.scss';
import { getPokemonColor } from '../utils/Backgroundhelper'


export const PokemonCard = ({ pokemon }) => {
  const catchPokemon = useCollectionStore((s) => s.catchPokemon);
  const navigate = useNavigate();

  const bgColor = getPokemonColor(pokemon)

  return (
    <Card
      hoverable 
      title={<span style={{ textTransform: 'capitalize' }}>{pokemon.name}</span>}
      className="card"
      style={{backgroundColor: bgColor, backgroundImage: `linear-gradient(180deg, rgba(255,255,255,0.7) 0%, ${bgColor} 100%)`,}}
      cover={
        <img
          src={pokemon.sprites.other.dream_world.front_default}
          alt={pokemon.name}
          className="pokemon-card-img"
        />
      }
      onClick={() => navigate(`/pokemon/${pokemon.id}`)}
    >
      <div className="circle-for-img"></div>
      
      {/* Секция с типами */}
      <div style={{ marginBottom: 12 }}>
        <Space size={[0, 4]} wrap>
          {pokemon.types.map((t) => (
            <Tag 
              key={t.type.name} 
              color={bgColor || 'default'}
              style={{ borderRadius: '4px', fontWeight: 'bold' }}
            >
              {t.type.name.toUpperCase()}
            </Tag>
          ))}
        </Space>
      </div>

      <p>HP: {pokemon.stats[0].base_stat}</p>
      <p>Attack: {pokemon.stats[1].base_stat}</p>

      <Button
        type="primary"
        block // Растянет кнопку на всю ширину для удобства
        style={{ marginTop: 10, fontWeight: 'bold' }}
        onClick={(e) => {
          e.stopPropagation();
          catchPokemon(pokemon);
        }}
      >
        CATCH
      </Button>
    </Card>
  );
};
