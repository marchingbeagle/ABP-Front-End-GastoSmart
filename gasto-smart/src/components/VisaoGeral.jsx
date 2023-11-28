import { useContext, useEffect } from "react";
import { AuthContext } from "../context/AuthProvider";
import { useNavigate } from "react-router-dom";
import TransactionsLoader from "./TransactionsLoader";
import AddTransactionForm from "./AddTransactionForm";

function VisaoGeral() {
  const { logado } = useContext(AuthContext);
  const navigate = useNavigate();

  useEffect(() => {
    if (logado === false) {
      navigate("/Auth");
    }
  });

  return (
    <div className="flex-1 flex items-center">
      <div className="flex justify-center items-start flex-wrap flex-1 gap-8">
        <AddTransactionForm />
        <div className="w-2/3 md:w-1/3 basis-1/3 rounded border-2 border-gray-200 p-4">
          <h2 className="text-lg text-gray-600">Suas ultimas transações</h2>
          <TransactionsLoader numberOfTransactions={3} />
        </div>
      </div>
    </div>
  );
}

export default VisaoGeral;
