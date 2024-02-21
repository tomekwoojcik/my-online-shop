import React from "react";
import ReactDOM from "react-dom/client";
import "./style/style.scss";

import { RouterProvider } from "react-router-dom";
import { router } from "./context/router-context.tsx";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
