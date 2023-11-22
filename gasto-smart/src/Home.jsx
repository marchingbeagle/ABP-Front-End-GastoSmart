import { Outlet } from "react-router-dom";
import Header from "./components/Header";
import PageFooter from "./components/Footer";

function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow">
        <Outlet />
      </main>
      <PageFooter />
    </div>
  );
}

export default Home;
