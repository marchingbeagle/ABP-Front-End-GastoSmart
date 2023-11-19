import { createContext, useState } from "react";

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [logado, setLogado] = useState(false);

  const signUp = (email, senha) => {
    if (email && senha) {
      setLogado(true);
    }
  };

  const signIn = (email, senha) => {
    if (email && senha) {
      setLogado(true);
    }
  };

  return (
    <AuthContext.Provider value={{ logado, setLogado, signUp, signIn }}>
      {children}
    </AuthContext.Provider>
  );
};
