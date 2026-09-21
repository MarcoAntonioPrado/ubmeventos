// src/App.jsx — o mapa: cada URL, um componente
import { Routes, Route } from "react-router";
import Home from "./pages/Home";
import EventoDetalhe from "./pages/EventoDetalhe";
import "./App.css";   // o CSS de página continua importado aqui

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/eventos/:id" element={<EventoDetalhe />} />   {/* :id é variável */}
    </Routes>
  );
}

export default App;
