import { MdDelete } from "react-icons/md";

function BotaoApagar({ onClick }) {
  return (
    <div onClick={onClick} className="flex items-center justify-center">
      <MdDelete />
    </div>
  );
}

export default BotaoApagar;
