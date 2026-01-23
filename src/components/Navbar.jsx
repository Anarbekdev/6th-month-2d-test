// components/Navbar.jsx
import { Link } from 'react-router-dom'
import { Menu } from 'antd'

export const Navbar = () => {
  return (
    <div
      style={{
        position: 'sticky', 
        top: 0,
        zIndex: 1000,
        display: 'flex',
        justifyContent: 'center', 
        padding: '10px 20px',
        background: '#f0f0f0',
        boxShadow: '0 2px 4px rgba(0,0,0,0.1)',
        width: '100%',
      }}
    >
      <Menu mode="horizontal" defaultSelectedKeys={['1']} style={{ flex: 1, justifyContent: 'center' }}>
        <Menu.Item key="1">
          <Link to="/">Pokemons</Link>
        </Menu.Item>
        <Menu.Item key="2">
          <Link to="/arena">Arena</Link>
        </Menu.Item>
      </Menu>
    </div>
  )
}
