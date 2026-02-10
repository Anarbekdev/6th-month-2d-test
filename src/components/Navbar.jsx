// components/Navbar.jsx
import { Link } from "react-router-dom";
import { Menu, Badge } from "antd";
import { ShoppingCartOutlined } from "@ant-design/icons";

export const Navbar = () => {
  return (
    <div
      style={{
        top: 0,
        zIndex: 1000,
        display: "flex",
        background: "none",
        justifyContent: "space-around",
        padding: "10px 30px",
        width: "100%",
      }}
    >
      <Menu
        mode="horizontal"
        defaultSelectedKeys={["1"]}
        style={{ width: "100%", display: "flex", fontSize: 24 }}
      >
        <Menu.Item key="1">
          <Link to="/">Pokemons</Link>
        </Menu.Item>
        <Menu.Item key="2">
          <Link to="/arena">Arena</Link>
        </Menu.Item>
        <Menu.Item key="3">
          <Link to="/cart">
            <Badge size="small" offset={[10, 0]}>
              <ShoppingCartOutlined style={{ fontSize: 35 }} />
            </Badge>
          </Link>
        </Menu.Item>
      </Menu>
    </div>
  );
};
