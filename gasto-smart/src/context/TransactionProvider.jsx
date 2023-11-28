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

  return (
    <TransactionContext.Provider
      value={{
        sharedTransaction,
        addNewSharedTransaction,
        updateAllSharedTransaction,
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
