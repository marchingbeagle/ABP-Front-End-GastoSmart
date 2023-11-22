import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import Home from "./Home";
import VisaoGeral from "./components/VisaoGeral";
import Transacoes from "./components/Transacoes";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { AuthProvider } from "./context/AuthProvider";
import AuthenticateUser from "./components/AuthenticateUser";
import { TransactionProvider } from "./context/TransactionProvider";

const root = ReactDOM.createRoot(document.getElementById("root"));

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
    children: [
      {
        path: "/",
        element: (
          <TransactionProvider>
            <VisaoGeral />
          </TransactionProvider>
        ),
      },
      {
        path: "/Transacoes",
        element: (
          <TransactionProvider>
            <Transacoes />
          </TransactionProvider>
        ),
      },
    ],
  },
  {
    path: "/Auth",
    element: <AuthenticateUser />,
  },
]);

root.render(
  <AuthProvider>
    <RouterProvider router={router} />
  </AuthProvider>
);
