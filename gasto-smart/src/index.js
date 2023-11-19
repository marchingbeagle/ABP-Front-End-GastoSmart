import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import Header from "./Header";
import VisaoGeral from "./components/VisaoGeral";
import Transacoes from "./components/Transacoes";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { AuthProvider } from "./context/AuthProvider";

const root = ReactDOM.createRoot(document.getElementById("root"));

const router = createBrowserRouter([
  {
    path: "/",
    element: <Header />,
    children: [
      {
        path: "/",
        element: <VisaoGeral />,
      },
      {
        path: "/Transacoes",
        element: <Transacoes />,
      },
    ],
  },
]);

root.render(
  <AuthProvider>
    <RouterProvider router={router} />
  </AuthProvider>
);
