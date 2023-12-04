import { createContext, useContext, useState } from "react";

export const TransactionContext = createContext();

export const TransactionProvider = ({ children }) => {
  const [sharedTransaction, setSharedTransaction] = useState([]);

  const addNewSharedTransaction = (newData) => {
    setSharedTransaction((prevData) => [...prevData, newData]);
  };

  const updateAllSharedTransaction = (newData) => {
    setSharedTransaction(newData);
  };

  const handleEdit = (transactionId, newName) => {
    const updatedTransactions = sharedTransaction.map((transaction) => {
      if (transaction.id === transactionId) {
        transaction.nome = newName;
        return transaction;
      }
      return transaction;
    });
    updateAllSharedTransaction(updatedTransactions);
  };

  const handleDelete = (transactionId) => {
    const updatedTransactions = sharedTransaction.filter(
      (transaction) => transaction.id !== transactionId
    );

    updateAllSharedTransaction(updatedTransactions);
  };

  return (
    <TransactionContext.Provider
      value={{
        sharedTransaction,
        addNewSharedTransaction,
        updateAllSharedTransaction,
        handleEdit,
        handleDelete,
      }}
    >
      {children}
    </TransactionContext.Provider>
  );
};

export const useTransaction = () => {
  const context = useContext(TransactionContext);
  if (!context) {
    throw new Error("useData must be used within a DataProvider");
  }
  return context;
};
