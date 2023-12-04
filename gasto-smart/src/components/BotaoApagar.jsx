import { FaRegTrashAlt } from "react-icons/fa";

function BotaoApagar({ onClick }) {
  return (
    <div
      onClick={onClick}
      className="cursor-pointer flex items-center justify-center"
    >
      <FaRegTrashAlt />
    </div>
  );
}

export default BotaoApagar;
