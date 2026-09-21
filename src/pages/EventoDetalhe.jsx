// src/pages/EventoDetalhe.jsx — a página de detalhe: atende a /eventos/:id
import { useEffect, useState } from "react";
import { useParams, Link } from "react-router";
import axios from "axios";

function EventoDetalhe() {
  // o parâmetro da rota: em /eventos/3, id === "3" — sempre string
  const { id } = useParams();

  // UM objeto, não uma lista: antes de chegar, não existe -> null
  const [evento, setEvento] = useState(null);
  const [carregando, setCarregando] = useState(true);
  const [erro, setErro] = useState(false);

  useEffect(() => {
    async function carregarEvento() {
      try {
        // o id da URL vira o último segmento do endereço da API
        const resposta = await axios.get(`http://localhost:3001/eventos/${id}`);
        setEvento(resposta.data);
      } catch {
        // API fora do ar OU id inexistente (404): os dois caem aqui
        setErro(true);
      } finally {
        setCarregando(false);
      }
    }
    carregarEvento();
  }, [id]); // <- mudou o id na URL? o efeito roda de novo

  if (carregando) {
    return <p className="aviso">Carregando evento...</p>;
  }
  if (erro) {
    return (
      <section className="aviso">
        <p>Não foi possível carregar o evento. Ele pode não existir, ou a API pode estar fora do ar.</p>
        <Link to="/" className="voltar">Voltar para a lista</Link>
      </section>
    );
  }

  return (
    <article className="detalhe">
      <Link to="/" className="voltar">← Voltar para a lista</Link>
      <span className="detalhe-tipo">{evento.tipo}</span>
      <h2>{evento.titulo}</h2>
      <p className="detalhe-info"><strong>Data:</strong> {evento.data}</p>
      <p className="detalhe-info"><strong>Local:</strong> {evento.local}</p>
      <p className="detalhe-vagas">{evento.vagas} vagas disponíveis</p>
    </article>
  );
}

export default EventoDetalhe;
