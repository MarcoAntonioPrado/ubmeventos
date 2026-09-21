// src/App.jsx — forma final: rota-mãe com o Layout, filhas no Outlet
import { Routes, Route } from "react-router";
import Layout from "./components/Layout";
import Home from "./pages/Home";
import EventoDetalhe from "./pages/EventoDetalhe";
import Sobre from "./pages/Sobre";
import NaoEncontrado from "./pages/NaoEncontrado";
import "./App.css";

function App() {
  return (
    <Routes>
      {/* a mãe não tem path: casa com tudo e desenha a moldura */}
      <Route element={<Layout />}> {/* Layout entra em cena uma única vez, como o element da rota-mãe */}
        <Route index element={<Home />} />                       {/* "/" */}
        <Route path="/eventos/:id" element={<EventoDetalhe />} />
        <Route path="/sobre" element={<Sobre />} />
        <Route path="*" element={<NaoEncontrado />} />           {/* o "senão" */}
      </Route>
    </Routes>
  );
}

export default App;
