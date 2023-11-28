import { MdDelete } from "react-icons/md";

function BotaoApagar({ onClick }) {
  return (
    <div
      onClick={onClick}
      className="px-4 py-2 flex items-center justify-center"
    >
      <MdDelete />
    </div>
  );
}

export default BotaoApagar;
