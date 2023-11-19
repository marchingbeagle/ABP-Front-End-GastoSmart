import { Link, Outlet } from "react-router-dom";

function Header() {
  return (
    <header>
      <nav>
        <li>
          <Link to="/">Visao Geral</Link>
        </li>
        <li>
          <Link to="/Transacoes">Transacoes</Link>
        </li>
      </nav>
      <Outlet />
    </header>
  );
}

export default Header;
