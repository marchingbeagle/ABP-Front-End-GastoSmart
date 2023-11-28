import BotaoApagar from "./BotaoApagar";
import BotaoEditar from "./BotaoEditar";

function TransacaoCard({ nome, valor, data, onClickApagar, onClickEditar }) {
  return (
    <tr className="border-b-2 border-green-600">
      <td>
        <h2 className=" px-8 py-2 border-r-2 border-green-600 font-semibold text-lg">
          {nome}
        </h2>
      </td>
      <td>
        <p className="px-8 py-2 border-r-2 border-green-600">R$ {valor}</p>
      </td>
      <td>
        <p className="px-8 py-2 border-r-2 border-green-600">{data}</p>
      </td>
      <td className="flex items-center justify-center py-2">
        <BotaoApagar onClick={onClickApagar} />
        <BotaoEditar onClick={onClickEditar} />
      </td>
    </tr>
  );
}

export default TransacaoCard;
