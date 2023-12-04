function PageFooter() {
  return (
    <footer className="bg-green-600 p-4 flex justify-around text-white items-center py-8">
      <ul className="flex flex-col gap-4">
        <li className="hover:underline">
          <a href="/">Sobre a GastoSmart</a>
        </li>
        <li className="hover:underline">
          <a href="/">Privacidade e segurança</a>
        </li>
        <li className="hover:underline">
          <a href="/">Acessibilade</a>
        </li>
      </ul>
      <div className="text-center">
        <p>&copy; 2023 GastoSmart</p>
        <p>Contato: contato@gastosmart.com</p>
      </div>
      <ul className="flex flex-col gap-4">
        <li className="hover:underline ">
          <a href="/">Sua conta</a>
        </li>
        <li className="hover:underline">
          <a href="/">Devoluções e reembolso</a>
        </li>
        <li className="hover:underline">
          <a href="/">Ajuda</a>
        </li>
      </ul>
    </footer>
  );
}

export default PageFooter;
