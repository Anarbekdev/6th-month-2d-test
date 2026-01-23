import { Select, Card, Typography, Button } from 'antd'
import { useState } from 'react'
import { useCollectionStore } from '../store/collectionStore'
import { calcPower } from '../store/calcPower'

const { Title } = Typography
const { Option } = Select

export default function PokemonArena() {
  const { collection } = useCollectionStore()
  const [p1, setP1] = useState(null)
  const [p2, setP2] = useState(null)
  const [winner, setWinner] = useState(null)

  const fight = () => {
    if (!p1 || !p2) return
    const power1 = calcPower(p1)
    const power2 = calcPower(p2)
    setWinner(power1 >= power2 ? p1 : p2)
  }

  return (
    <div style={{ padding: 20, boxSizing: 'border-box', }}>
      <Title level={3} style={{ textAlign: 'center' }}>
        Pokemon Battle Arena
      </Title>

      <div
        style={{
          display: 'flex',
          flexWrap: 'wrap',
          justifyContent: 'center',
          gap: 16,
          marginBottom: 20
        }}
      >
        <Select
          placeholder="Select Pokemon 1"
          style={{ minWidth: 250 }}
          value={p1?.id}
          onChange={(id) => setP1(collection.find(p => p.id === id))}
        >
          {collection.map(p => (
            <Option key={p.id} value={p.id}>
              <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
                <img
                  src={p.sprites.front_default}
                  alt={p.name}
                  style={{ objectFit: 'contain', maxHeight: 40 }}
                />
                <span>{p.name}</span>
              </div>
            </Option>
          ))}
        </Select>

        <Select
          placeholder="Select Pokemon 2"
          style={{ minWidth: 250 }}
          value={p2?.id}
          onChange={(id) => setP2(collection.find(p => p.id === id))}
        >
          {collection.map(p => (
            <Option key={p.id} value={p.id}>
              <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
                <img
                  src={p.sprites.front_default}
                  alt={p.name}
                  style={{ objectFit: 'contain', maxHeight: 40 }}
                />
                <span>{p.name}</span>
              </div>
            </Option>
          ))}
        </Select>
      </div>

      <div style={{ textAlign: 'center', marginBottom: 20 }}>
        <Button type="primary" size="large" onClick={fight} disabled={!p1 || !p2}>
          Fight!
        </Button>
      </div>

      {winner && (
        <Card
          style={{
            maxWidth: 300,
            margin: '0 auto',
            textAlign: 'center',
            borderColor: '#1890ff'
          }}
          hoverable
        >
          <img
            src={winner.sprites.front_default}
            alt={winner.name}
            style={{ objectFit: 'contain', maxHeight: 100, marginBottom: 8 }}
          />
          <Title level={4} style={{ margin: 0 }}>
            🏆 Winner: {winner.name}
          </Title>
          <p>⚡ Power: {calcPower(winner)}</p>
        </Card>
      )}
    </div>
  )
}
