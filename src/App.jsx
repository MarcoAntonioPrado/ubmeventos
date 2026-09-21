import { useState } from "react";
import Header from "./components/Header";
import EventoCard from "./components/EventoCard";
import { eventos } from "./data/eventos";
import "./App.css";

function App() {
  const [busca, setBusca] = useState("");
  const eventosFiltrados = eventos.filter((evento) =>
    evento.titulo.toLowerCase().includes(busca.toLowerCase()),
  );

  return (
    <>
      <Header />
      <section className="busca">
        <input
          type="text"
          placeholder="Buscar evento pelo título..."
          value={busca}
          onChange={(e) => setBusca(e.target.value)}
        />
      </section>
      {eventosFiltrados.length === 0 ? (
        <p className="lista-vazia">Nenhum evento encontrado para "{busca}".</p>
      ) : (
        <main className="lista-eventos">
          {busca !== "" && (
            <p className="contador">
              {eventosFiltrados.length} evento(s) encontrado(s)
            </p>
          )}
          {eventosFiltrados.map((evento) => (
            <EventoCard
              key={evento.id}
              titulo={evento.titulo}
              tipo={evento.tipo}
              data={evento.data}
              local={evento.local}
              vagas={evento.vagas}
            />
          ))}
        </main>
      )}
    </>
  );
}

export default App;
