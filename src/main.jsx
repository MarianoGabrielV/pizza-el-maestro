// src/main.jsx
import React from "react";
import ReactDOM from "react-dom/client";

// Bootstrap
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";

import "./index.css";

import App from "./App.jsx";
import AdminRoute from "./admin/AdminRoute.jsx";

// React Router
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

// 🛣️ definimos rutas
const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/edit",   // 🔐 ruta secreta
    element: <AdminRoute />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
