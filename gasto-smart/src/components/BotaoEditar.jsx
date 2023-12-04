import { FaPencilAlt } from "react-icons/fa";

function BotaoEditar({ onClick }) {
  return (
    <div onClick={onClick} className="flex items-center justify-center">
      <FaPencilAlt />
    </div>
  );
}

export default BotaoEditar;
