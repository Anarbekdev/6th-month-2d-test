import { BrowserRouter, Route, Routes } from "react-router-dom";
import { PokemonList } from "./pages/PokemonList";
import PokemonArena from "./pages/PokemonArena";
import { Navbar } from "./components/Navbar";
import { DetailPoke } from "./pages/DetailPoke";

function App() {
  return (
    <BrowserRouter>
     <Navbar/>
      <Routes>
        <Route path="/" element={<PokemonList />} />
        <Route path="/arena" element={<PokemonArena />} />
        <Route path="/pokemon/:id" element={<DetailPoke/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
