// src/components/Layout.jsx — a moldura de todas as páginas
import { NavLink, Outlet } from "react-router";
import Header from "./Header";

function Layout() {
  return (
    <>
      <Header />                      {/* saiu da Home; agora vive aqui */}
      <nav className="app-nav">
        {/* end: ativo só em "/" exato — senão "/" casaria com toda URL */}
        <NavLink to="/" end>Eventos</NavLink>
        <NavLink to="/sobre">Sobre</NavLink>
      </nav>
      <Outlet />   {/* AQUI entra a página da rota atual */}
    </>
  );
}

export default Layout;
