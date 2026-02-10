import { Select, Card, Typography, Button } from 'antd'
import { useState } from 'react'
import { useCollectionStore } from '../store/collectionStore'
import { calcPower } from '../store/calcPower'
import '../styles/pokemon.scss'
import { getPokemonColor } from '../utils/Backgroundhelper'
import { motion, AnimatePresence } from 'framer-motion'

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
    
    if (power1 === power2) {
      setWinner(Math.random() > 0.5 ? p1 : p2); 
    } else {
      setWinner(power1 > power2 ? p1 : p2);
    }
  }
  const bgColor = getPokemonColor(winner)

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

      <AnimatePresence mode="wait">
  {winner && (
    <motion.div
      key={winner.id} 
      initial={{ opacity: 0, y: 50, scale: 0.3 }} 
      animate={{ opacity: 1, y: 0, scale: 1 }} 
      exit={{ opacity: 0, scale: 0.5, transition: { duration: 0.2 } }} 
      transition={{ 
        type: "spring", 
        stiffness: 260, 
        damping: 20 
      }}
    >
      <Card
        hoverable
        style={{
          maxWidth: 300,
          margin: '20px auto',
          textAlign: 'center',
          backgroundColor: bgColor,
          backgroundImage: `linear-gradient(180deg, rgba(255,255,255,0.7) 0%, ${bgColor} 100%)`,
          borderRadius: '20px',
          border: `4px solid ${bgColor}`,
          boxShadow: '0 20px 40px rgba(0,0,0,0.2)'
        }}
      >
       
        <motion.img
          animate={{ y: [0, -10, 0] }} 
          transition={{ repeat: Infinity, duration: 2 }}
          src={winner.sprites.other.dream_world.front_default}
          style={{ width: '150px', height: '150px', objectFit: 'contain' }}
        />
        <Title level={2} style={{ color: '#fff', textShadow: '2px 2px 4px rgba(0,0,0,0.3)' }}>
           🏆 {winner.name}
        </Title>
        <div style={{ fontSize: 22, fontWeight: 'bold' }}>
          Power: {calcPower(winner)}
        </div>
      </Card>
    </motion.div>
  )}
</AnimatePresence>

    </div>
  )
}
