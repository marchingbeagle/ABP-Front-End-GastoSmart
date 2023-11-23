import TransacaoCard from "./TransacaoCard";
import { useTransaction } from "../context/TransactionProvider";
import TableHeader from "./TableHeader";

export default function TransactionsLoader({ numberOfTransactions = 0 }) {
  const { sharedTransaction, updateSharedTransaction } = useTransaction();

  const handleDelete = (transactionId) => {
    const updatedTransactions = sharedTransaction.filter(
      (transaction) => transaction.id !== transactionId
    );
    updateSharedTransaction(...updatedTransactions);
  };

  return sharedTransaction === 0 ? (
    "Nenhuma transação "
  ) : (
    <table className="text-center w-full bg-white border-2 border-green-600 rounded py-2 my-2">
      <TableHeader />
      {numberOfTransactions === 0
        ? sharedTransaction.map((transaction) => {
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
          })
        : sharedTransaction.map((transaction, index) => {
            return (
              index <= numberOfTransactions - 1 && (
                <TransacaoCard
                  key={transaction.id}
                  nome={transaction.nome}
                  valor={transaction.valor}
                  data={transaction.date}
                  onClick={() => {
                    handleDelete(transaction.id);
                  }}
                />
              )
            );
          })}
    </table>
  );
}
