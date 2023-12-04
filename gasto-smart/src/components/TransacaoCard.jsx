import { useState } from "react";
import BotaoApagar from "./BotaoApagar";
import BotaoEditar from "./BotaoEditar";
import { FaRegSave } from "react-icons/fa";
import { MdOutlineCancel } from "react-icons/md";
import { useTransaction } from "../context/TransactionProvider";

function TransacaoCard({ id, nome, valor, data, onClickApagar }) {
  const { handleEdit } = useTransaction();

  const [editedName, setEditedName] = useState(nome);
  const [isEditing, setIsEditing] = useState(false);

  const onClickEdit = () => {
    setIsEditing(true);
  };

  const handleSaveClick = (transactionId) => {
    onClickEdit(editedName);
    setIsEditing(false);
    handleEdit(transactionId, editedName);
  };

  const handleCancelClick = () => {
    setIsEditing(false);
    setEditedName(nome);
  };

  return (
    <tr className="border-b-2 border-gray-200">
      <td>
        <h2 className=" px-8 py-2 border-r-2 border-gray-200 font-semibold text-lg">
          {isEditing ? (
            <input
              type="text"
              value={editedName}
              onChange={(e) => setEditedName(e.target.value)}
            />
          ) : (
            nome
          )}
        </h2>
      </td>
      <td>
        <p className="px-8 py-2 border-r-2 border-gray-200">R$ {valor}</p>
      </td>
      <td>
        <p className="px-8 py-2 border-r-2 border-gray-200">{data}</p>
      </td>

      <td className="flex items-center justify-center flex-wrap gap-2 p-4">
        {isEditing && (
          <>
            <button onClick={() => handleSaveClick(id)}>
              <FaRegSave />
            </button>
            <button onClick={handleCancelClick}>
              <MdOutlineCancel />
            </button>
          </>
        )}
        <BotaoApagar onClick={onClickApagar} />
        <BotaoEditar onClick={onClickEdit} />
      </td>
    </tr>
  );
}

export default TransacaoCard;
