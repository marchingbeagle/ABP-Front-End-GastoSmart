import { useContext, useEffect } from "react";
import { AuthContext } from "../context/AuthProvider";
import { useNavigate } from "react-router-dom";
import TransacaoCard from "./TransacaoCard";
import { useTransaction } from "../context/TransactionProvider";

function Transacoes() {
  const { logado } = useContext(AuthContext);

  const { sharedTransaction, updateSharedTransaction } = useTransaction();
  const navigate = useNavigate();

  useEffect(() => {
    if (logado === false) {
      navigate("/Auth");
    }
  }, [logado, navigate]);

  const handleDelete = (transactionId) => {
    console.log("Transaction ID to delete:", transactionId);
    const updatedTransactions = sharedTransaction.filter(
      (transaction) => transaction.id !== transactionId
    );
    console.log("Updated Transactions:", updatedTransactions);

    if (
      JSON.stringify(updatedTransactions) !== JSON.stringify(sharedTransaction)
    ) {
      console.log("Updating shared transactions");
      updateSharedTransaction(updatedTransactions);
    }
  };

  return (
    <div>
      {sharedTransaction.map((transaction) => {
        return (
          <TransacaoCard
            key={transaction.id}
            nome={transaction.nome}
            valor={transaction.valor}
            data={transaction.date}
            onClick={() => {
              console.log("Clicked on transaction:", transaction.id);
              handleDelete(transaction.id);
            }}
          />
        );
      })}
    </div>
  );
}

export default Transacoes;
