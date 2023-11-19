import { useContext, useEffect } from "react";
import { AuthContext } from "../context/AuthProvider";
import { useNavigate } from "react-router-dom";
import TransacaoCard from "./TransacaoCard";
import { useTransaction } from "../context/TransactionProvider";

function Transacoes() {
  const { logado } = useContext(AuthContext);

  const { sharedTransaction } = useTransaction();
  const navigate = useNavigate();

  useEffect(() => {
    if (logado === false) {
      navigate("/Auth");
    }
  });

  return (
    <div>
      {sharedTransaction.map((transaction) => {
        console.log(sharedTransaction);
        return (
          <TransacaoCard
            key={transaction.id}
            nome={transaction.nome}
            valor={transaction.valor}
            data={transaction.date}
          />
        );
      })}
    </div>
  );
}

export default Transacoes;
