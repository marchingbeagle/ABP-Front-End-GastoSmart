import { useContext, useEffect } from "react";
import { AuthContext } from "../context/AuthProvider";
import { useNavigate } from "react-router-dom";
import TransactionsLoader from "./TransactionsLoader";

function Transacoes() {
  const { logado } = useContext(AuthContext);

  const navigate = useNavigate();

  useEffect(() => {
    if (logado === false) {
      navigate("/Auth");
    }
  }, [logado, navigate]);

  return (
    <div className="flex items-center flex-col justify-center h-full flex-1">
      <TransactionsLoader />
    </div>
  );
}

export default Transacoes;
