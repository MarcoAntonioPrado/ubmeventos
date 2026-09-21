import { useState, useEffect } from "react";
import { useSearchParams } from "react-router";   // NOVO
import axios from "axios";
import EventoCard from "../components/EventoCard";

function Home() {
  // a URL é a dona da busca: ?q=git  ->  busca === "git"
  const [params, setParams] = useSearchParams();
  // Esta implementação (em busca refere-se ao desafio da semana) garante que a busca esteja
  // sempre sincronizada com a URL:
  // =======================================================================================
  // A busca vem da URL, não de um useState.
  //   params          -> os parâmetros da URL, entregues pelo useSearchParams
  //   params.get("q") -> em /?q=react devolve "react"; sem ?q= devolve null
  //   ?? ""           -> se veio null, usa string vazia: o input precisa
  //                      sempre de um valor, senão o React reclama no console
  //
  // Sobre o "q": e um nome que nos escolhemos, a chave do parametro na URL.
  // Nao e palavra reservada do React nem do Router — e convencao da web para
  // "query", herdada dos buscadores (o Google usa ?q=). Poderia ser ?busca=
  // ou ?termo=. So e preciso usar o mesmo nome nos dois lugares:
  //   setParams({ q: valor })  -> quem escreve na URL
  //   params.get("q")          -> quem le da URL
  // Se um lado disser "q" e o outro "busca", o get devolve null e o campo
  // nunca preenche.
  // Para verificar na prática, selecione a caixa de busca e observe a URL mudar conforme você digita.
  const busca = params.get("q") ?? "";          // derivado da URL, não estado
  const [eventos, setEventos] = useState([]);
  const [carregando, setCarregando] = useState(true);
  const [erro, setErro] = useState(false);

  // escreve na URL; campo vazio remove o parâmetro
  function atualizarBusca(texto) {
    if (texto === "") {
      setParams({});
    } else {
      setParams({ q: texto });
    }
  }

  async function carregarEventos() {
    try {
      const resposta = await axios.get("http://localhost:3001/eventos");
      setEventos(resposta.data);
    } catch {
      setErro(true);
    } finally {
      setCarregando(false);
    }
  }

  useEffect(() => {
    carregarEventos();
  }, []);

  const eventosFiltrados = eventos.filter((evento) =>
    evento.titulo.toLowerCase().includes(busca.toLowerCase()),
  );

  if (carregando) {
    return <p className="aviso">Carregando eventos...</p>;
  }

  if (erro) {
    return (
      <p className="aviso">
        Não foi possível carregar os eventos. Verifique se a API está no ar.{" "}
        <button
          type="button"
          className="busca-limpar"
          onClick={() => {
            setErro(false);
            setCarregando(true);
            carregarEventos();
          }}
        >
          Tentar novamente
        </button>
      </p>
    );
  }

  return (
    <>
      <section className="busca">
        <input
          type="text"
          placeholder="Buscar evento pelo título..."
          value={busca}
          onChange={(e) => atualizarBusca(e.target.value)}
        />
        {busca !== "" && (
          <button
            type="button"
            className="busca-limpar"
            onClick={() => atualizarBusca("")}
          >
            Limpar busca
          </button>
        )}
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
              id={evento.id}
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

export default Home;
