import { FaPencilAlt } from "react-icons/fa";

function BotaoEditar({ onClick }) {
  return (
    <div
      onClick={onClick}
      className="px-4 py-2 flex items-center justify-center"
    >
      <FaPencilAlt />
    </div>
  );
}

export default BotaoEditar;
