import { useContext, useEffect } from "react";
import { AuthContext } from "../context/AuthProvider";
import { useNavigate } from "react-router-dom";
import Sign from "./Sign";

function AuthenticateUser() {
  const { logado, setLogado } = useContext(AuthContext);
  const navigate = useNavigate();

  useEffect(() => {
    if (logado) {
      navigate("/");
    }
  });

  const logUser = (e) => {
    e.preventDefault();
    setLogado(true);
  };

  return (
    <div className="flex justify-center h-screen items-center">
      <form onSubmit={(e) => logUser(e)} className="w-1/3">
        <Sign title="SignIn"></Sign>
      </form>
      <form onSubmit={(e) => logUser(e)} className="w-1/3">
        <Sign title="SignUp">
          <label htmlFor="name">Nome</label>
          <input
            className="shadow-gray-300 shadow-md rounded p-2"
            type="text"
            name="name"
            id="name"
          />
        </Sign>
      </form>
    </div>
  );
}

export default AuthenticateUser;
