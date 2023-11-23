import { useContext, useEffect } from "react";
import { AuthContext } from "../context/AuthProvider";
import { useNavigate } from "react-router-dom";
import TransacaoCard from "./TransacaoCard";
import { useTransaction } from "../context/TransactionProvider";

function Transacoes() {
  const { logado } = useContext(AuthContext);

  const navigate = useNavigate();
  const { sharedTransaction, updateSharedTransaction } = useTransaction();

  useEffect(() => {
    if (logado === false) {
      navigate("/Auth");
    }
  }, [logado, navigate]);

  const handleDelete = (transactionId) => {
    const updatedTransactions = sharedTransaction.filter(
      (transaction) => transaction.id !== transactionId
    );

    if (
      JSON.stringify(updatedTransactions) !== JSON.stringify(sharedTransaction)
    ) {
      updateSharedTransaction(...updatedTransactions);
    }
  };

  return (
    <div className="flex items-center justify-center h-screen">
      <div className="w-1/2">
        {sharedTransaction.map((transaction) => {
          return (
            <TransacaoCard
              key={transaction.id}
              nome={transaction.nome}
              valor={transaction.valor}
              data={transaction.date}
              onClick={() => {
                handleDelete(transaction.id);
              }}
            />
          );
        })}
      </div>
    </div>
  );
}

export default Transacoes;
