import TransacaoCard from "./TransacaoCard";
import { useTransaction } from "../context/TransactionProvider";
import TableHeader from "./TableHeader";

export default function TransactionsLoader({
  numberOfTransactions = 0,
  filter,
}) {
  const { sharedTransaction, handleDelete } = useTransaction();

  return sharedTransaction.length === 0 ? (
    "Nenhuma transação "
  ) : (
    <table className="text-center w-fit bg-white border-2 border-gray-200 rounded py-2 my-2">
      <TableHeader />
      <tbody>
        {filter
          ? sharedTransaction.map((transaction) => {
              return (
                filter === transaction.categoria.value && (
                  <TransacaoCard
                    key={transaction.id}
                    id={transaction.id}
                    nome={transaction.nome}
                    valor={transaction.valor}
                    data={transaction.date}
                    onClickApagar={() => {
                      handleDelete(transaction.id);
                    }}
                  />
                )
              );
            })
          : numberOfTransactions === 0
          ? sharedTransaction.map((transaction) => {
              return (
                <TransacaoCard
                  key={transaction.id}
                  id={transaction.id}
                  nome={transaction.nome}
                  valor={transaction.valor}
                  data={transaction.date}
                  onClickApagar={() => {
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
                    id={transaction.id}
                    nome={transaction.nome}
                    valor={transaction.valor}
                    data={transaction.date}
                    onClickApagar={() => {
                      handleDelete(transaction.id);
                    }}
                  />
                )
              );
            })}
      </tbody>
    </table>
  );
}
