import React from "react";
import ReactDOM from "react-dom/client";
import "./style/style.scss";

import { RouterProvider } from "react-router-dom";
import { apiGetCategories, CategoriesModel } from "./api/api-get-categories.ts";
import { router } from "./context/router-context.tsx";

export async function loader() {
  const category: CategoriesModel[] | undefined = await apiGetCategories(
    "https://lopi2-backend-5517f8f04d28.herokuapp.com/api/"
  );
  return category;
}

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
