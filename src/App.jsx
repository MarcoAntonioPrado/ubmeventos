import Header from "./components/Header";
import EventoCard from "./components/EventoCard";
import { eventos } from "./data/eventos";
import "./App.css";

function App() {
  return (
    <>
      <Header />
      <main className="lista-eventos">
        {eventos.map((evento) => (
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
    </>
  );
}

export default App;
