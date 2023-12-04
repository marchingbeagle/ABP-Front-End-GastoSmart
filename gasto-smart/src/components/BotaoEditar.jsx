import { GrEdit } from "react-icons/gr";

function BotaoEditar({ onClick }) {
  return (
    <div
      onClick={onClick}
      className="cursor-pointer flex items-center justify-center"
    >
      <GrEdit />
    </div>
  );
}

export default BotaoEditar;
