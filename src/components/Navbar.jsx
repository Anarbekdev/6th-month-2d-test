// components/Navbar.jsx
import { Link } from 'react-router-dom'
import { Menu } from 'antd'

export const Navbar = () => {
  return (
    <div
      style={{
        top: 0,
        zIndex: 1000,
        display: 'flex',
        // background: 'red',
        justifyContent: 'space-around', 
        padding: '10px 30px',
        width: '100%',
      }}
    >
      <Menu mode="horizontal" defaultSelectedKeys={['1']} style={{width: '100%', display: 'flex',}} >
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
