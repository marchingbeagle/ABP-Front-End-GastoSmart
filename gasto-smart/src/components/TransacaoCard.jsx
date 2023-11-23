import BotaoApagar from "./BotaoApagar";

function TransacaoCard({ nome, valor, data, onClick }) {
  return (
    <section className="flex bg-white border-2 border-green-400 rounded-md p-4">
      <h2 className="flex-1 px-8 py-2 border-r-2 border-green-400">{nome}</h2>
      <p className="flex-none px-8 py-2 border-r-2 border-green-400">{valor}</p>
      <p className="flex-none px-8 py-2 border-r-2 border-green-400">{data}</p>
      <BotaoApagar onClick={onClick} />
    </section>
  );
}

export default TransacaoCard;
