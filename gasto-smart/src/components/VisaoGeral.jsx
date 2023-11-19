import { useContext, useEffect } from "react";
import { AuthContext } from "../context/AuthProvider";
import { useNavigate } from "react-router-dom";

function VisaoGeral() {
  const { logado } = useContext(AuthContext);
  const navigate = useNavigate();

  useEffect(() => {
    if (logado === false) {
      navigate("/Auth");
    }
  });

  return <div>VisaoGeral</div>;
}

export default VisaoGeral;
