// src/App.jsx — o mapa: cada URL, um componente
import { Routes, Route } from "react-router";
import Home from "./pages/Home";
import "./App.css";   // o CSS de página continua importado aqui

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />   {/* a única rota, por enquanto */}
    </Routes>
  );
}

export default App;
