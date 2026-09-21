import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router'   // NOVO: o provedor de rotas
import './index.css'
import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>        {/* ouve a URL e a compartilha com tudo dentro dele */}
      <App />
    </BrowserRouter>
  </StrictMode>,
)
