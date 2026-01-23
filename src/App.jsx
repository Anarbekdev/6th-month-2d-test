import { BrowserRouter, Route, Routes } from "react-router-dom";
import { PokemonList } from "./pages/PokemonList";
import PokemonArena from "./pages/PokemonArena";
import { Navbar } from "./components/Navbar";

function App() {
  return (
    <BrowserRouter>
     <Navbar/>
      <Routes>
        <Route path="/" element={<PokemonList />} />
        <Route path="/arena" element={<PokemonArena />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
