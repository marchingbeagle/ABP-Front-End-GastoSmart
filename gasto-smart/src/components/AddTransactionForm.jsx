import { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import { useTransaction } from "../context/TransactionProvider";

function AddTransactionForm() {
  const [nome, setNome] = useState("");
  const [valor, setValor] = useState();
  const [date, setDate] = useState("");

  const { updateSharedTransaction } = useTransaction();
  const handleClick = () => {
    const newTransaction = {
      id: uuidv4(),
      nome: nome,
      valor: valor,
      date: date,
    };

    updateSharedTransaction(newTransaction);
    setNome("");
    setValor(0);
    setDate("");
  };

  return (
    <form
      className="flex flex-col basis-2/3 max-w-md p-6 rounded-lg shadow-md"
      onSubmit={(e) => {
        e.preventDefault();
        handleClick(e);
      }}
    >
      <h2 className="text-gray-600 py-4 text-lg tracking-tighter">
        Adicione uma nova transação
      </h2>
      <div className="mb-4 flex flex-col">
        <label htmlFor="nome-gasto" className="text-sm text-gray-600">
          Título da transação
        </label>
        <input
          className="mt-2 p-2 border-2 border-green-400 rounded-md focus:outline-none focus:border-green-500"
          type="text"
          placeholder="Conta de luz"
          name="nome-gasto"
          id="nome-gasto"
          value={nome}
          onChange={(e) => setNome(e.target.value)}
          required
        />
      </div>
      <div className="mb-4 flex flex-col">
        <label htmlFor="valor-gasto" className="text-sm text-gray-600">
          Valor da transação
        </label>
        <input
          className="mt-2 p-2 border-2 border-green-400 rounded-md focus:outline-none focus:border-green-500"
          type="text"
          name="valor-gasto"
          placeholder="R$ 29,90"
          id="valor-gasto"
          value={valor}
          onChange={(e) => setValor(e.target.value)}
          required
        />
      </div>
      <div className="mb-4 flex flex-col">
        <label htmlFor="data-gasto" className="text-sm text-gray-600">
          Data
        </label>
        <input
          className="mt-2 p-2 border-2 border-green-400 rounded-md focus:outline-none focus:border-green-500"
          type="date"
          name="data-gasto"
          id="data-gasto"
          value={date}
          onChange={(e) => {
            setDate(e.target.value);
          }}
          required
        />
      </div>
      <input
        type="submit"
        value="Adicionar Transação"
        className="cursor-pointer p-4 bg-green-400 text-white uppercase font-medium rounded-md hover:bg-green-500 transition duration-300"
      />
    </form>
  );
}

export default AddTransactionForm;
