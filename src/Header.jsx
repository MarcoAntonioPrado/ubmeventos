function Header({ aluno, titulo }) {
  return (
    <header>
      <h2>{titulo}</h2>
      <p>Aluno: {aluno}</p>
    </header>
  )
}

export default Header
