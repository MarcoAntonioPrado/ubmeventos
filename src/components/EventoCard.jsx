import { Link } from "react-router";   // NOVO
import "./EventoCard.css";

// id entra na desestruturação: sem ele, o Link vira /eventos/undefined
function EventoCard({ id, titulo, tipo, data, local, vagas }) {
  return (
    <article className="evento-card">
      <span className="evento-tipo">{tipo}</span>
      <h3>{titulo}</h3>
      <p className="evento-info">{data} — {local}</p>
      <p className="evento-vagas">{vagas} vagas disponíveis</p>
      {/* template string monta a URL com o id DESTE evento */}
      <Link to={`/eventos/${id}`} className="evento-link">
        Ver detalhes
      </Link>
    </article>
  );
}

export default EventoCard;
