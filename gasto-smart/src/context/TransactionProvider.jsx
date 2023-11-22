import { createContext, useContext, useState } from "react";

export const TransactionContext = createContext();

export const TransactionProvider = ({ children }) => {
  const [sharedTransaction, setSharedTransaction] = useState([]);

  const updateSharedTransaction = (newData) => {
    if (Array.isArray(newData)) {
      setSharedTransaction((prevData) => [...prevData, ...newData]);
    } else {
      setSharedTransaction((prevData) => [...prevData, newData]);
    }
  };

  return (
    <TransactionContext.Provider
      value={{ sharedTransaction, updateSharedTransaction }}
    >
      {children}
    </TransactionContext.Provider>
  );
};

export const useTransaction = () => {
  const context = useContext(TransactionContext);
  if (!context) {
    throw new Error("useData must be used withina DataProvider");
  }
  return context;
};
