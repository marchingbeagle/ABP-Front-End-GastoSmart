import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../context/AuthProvider";
import { useNavigate } from "react-router-dom";
import { v4 as uuidv4 } from "uuid";
import { useTransaction } from "../context/TransactionProvider";

function VisaoGeral({ transacoes }) {
  const { logado } = useContext(AuthContext);

  const { updateSharedTransaction } = useTransaction();
  const navigate = useNavigate();

  const [nome, setNome] = useState("");
  const [valor, setValor] = useState(0);
  const [date, setDate] = useState("");
  const [transacao, setTransacao] = useState([]);

  useEffect(() => {
    if (logado === false) {
      navigate("/Auth");
    }
  });

  const handleClick = () => {
    const newTransaction = {
      id: uuidv4(),
      nome: nome,
      valor: valor,
      date: date,
    };

    setTransacao([...transacao, newTransaction]);
    updateSharedTransaction(newTransaction);
    setNome("");
    setValor(0);
    setDate("");
  };

  return (
    <form
      className="flex flex-col"
      onSubmit={(e) => {
        e.preventDefault();
        handleClick(e);
      }}
    >
      <div>
        <label htmlFor="nome-gasto">Título</label>
        <input
          className="border-2 border-black"
          type="text"
          name="nome-gasto"
          id="nome-gasto"
          value={nome}
          onChange={(e) => setNome(e.target.value)}
          required
        />
      </div>
      <div>
        <label htmlFor="valor-gasto">Valor</label>
        <input
          className="border-2 border-black"
          type="text"
          name="valor-gasto"
          id="valor-gasto"
          value={valor}
          onChange={(e) => setValor(e.target.value)}
          required
        />
      </div>
      <div>
        <label htmlFor="data-gasto">Data</label>
        <input
          className="border-2 border-black"
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
        value="Adicionar"
        className="cursor-pointer p-4 bg-green-400 text-white uppercase font-medium"
      />
    </form>
  );
}

export default VisaoGeral;
