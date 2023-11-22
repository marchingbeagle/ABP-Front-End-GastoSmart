import { Link } from "react-router-dom";
import { GrTransaction } from "react-icons/gr";
import { FaHome } from "react-icons/fa";

function Header() {
  return (
    <header className="bg-green-400 p-4">
      <nav className="flex justify-center items-center">
        <ul className="flex gap-8 text-white">
          <li>
            <Link
              to="/"
              className="hover:text-green-200 uppercase font-bold flex gap-2 items-center"
            >
              Visão Geral
              <FaHome size={20} />
            </Link>
          </li>
          <li>
            <Link
              to="/Transacoes"
              className="flex gap-2 items-center hover:text-green-200 uppercase font-bold"
            >
              Transações
              <GrTransaction size={20} />
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
