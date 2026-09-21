import "./EventoCard.css";

function EventoCard({ titulo, tipo, data, local, vagas }) {
  return (
    <article className="evento-card">
      <span className="evento-tipo">{tipo}</span>
      <h3>{titulo}</h3>
      <p className="evento-info">{data} — {local}</p>
      <p className="evento-vagas">{vagas} vagas disponíveis</p>
    </article>
  );
}

export default EventoCard;
