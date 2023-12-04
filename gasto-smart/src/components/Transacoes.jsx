import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../context/AuthProvider";
import { useNavigate } from "react-router-dom";
import TransactionsLoader from "./TransactionsLoader";
import { useTransaction } from "../context/TransactionProvider";

function Transacoes() {
  const { logado } = useContext(AuthContext);
  const { sharedTransaction } = useTransaction();
  const [categoriaAtiva, setCategoriaAtiva] = useState("todos");

  const navigate = useNavigate();

  useEffect(() => {
    if (logado === false) {
      navigate("/Auth");
    }
  }, [logado, navigate]);

  return (
    <section className="my-8 flex items-center flex-col justify-center h-full flex-1">
      <div className="flex gap-4 ">
        <h2> Filtrar por:</h2>
        <button
          className="px-4 py-2 bg-green-600 text-white rounded"
          onClick={() => setCategoriaAtiva("todos")}
        >
          Todos
        </button>
        {sharedTransaction.map((transaction) => {
          return (
            <button
              key={transaction.id}
              className="px-4 py-2 bg-green-600 text-white rounded"
              onClick={() => setCategoriaAtiva(transaction.categoria.value)}
            >
              {transaction.categoria.label}
            </button>
          );
        })}
      </div>
      {categoriaAtiva === "todos" ? (
        <TransactionsLoader />
      ) : (
        <TransactionsLoader filter={categoriaAtiva} />
      )}
    </section>
  );
}

export default Transacoes;
