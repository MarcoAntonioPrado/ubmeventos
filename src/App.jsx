import './App.css'
import Header from './Header'

function App() {
  const curso = 'Engenharia de Software'

  return (
    <div className="app">
      <Header aluno="Marco Antonio Prado" titulo="Portal de eventos academicos" />
      <h1>UBM Eventos</h1>
      <p>Portal de eventos academicos - {curso}</p>
      <p>Em construcao, aula a aula, ate a banca final.</p>
    </div>
  )
}

export default App
