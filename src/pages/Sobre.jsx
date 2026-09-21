// src/pages/Sobre.jsx — página estática: nem estado, nem efeito
function Sobre() {
  return (
    <section className="pagina">
      <h2>Sobre o UBM Eventos</h2>
      <p>
        Portal de eventos acadêmicos do Centro Universitário de Barra Mansa,
        construído no Laboratório de Programação Front End com React, Vite,
        axios e React Router. Os dados são servidos por uma API REST.
      </p>
      <p className="sobre-aluno">
        Projeto de Marco Antonio Prado, aluno de Engenharia de Software,
        desenvolvido aula a aula com base no código do professor Rubens Guimarães.
      </p>
    </section>
  );
}

export default Sobre;
