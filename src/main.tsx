import React from "react";
import ReactDOM from "react-dom/client";
import "./style/style.scss";

import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { MainPage } from "./component/pages/main-page/main-page.tsx";
import ErrorPage from "./pages/error-page/error-page.tsx";
import CategoryShop from "./pages/category-shop/category-shop.tsx";
import CartShop from "./pages/cart-shop/cart-shop.tsx";
import CheckoutShop from "./pages/checkout-shop/checkout-shop.tsx";
import OrderConfirmationShop from "./pages/order-confirmation-shop/order-confirmation-shop.tsx";
import ProductShop from "./pages/product-shop/product-shop.tsx";
import { apiGetCategories, CategoriesModel } from "./api/api-get-categories.ts";

export async function loader() {
  const category : CategoriesModel[] | undefined = await apiGetCategories("https://lopi2-backend-5517f8f04d28.herokuapp.com/api/");
  return category ;
} 

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainPage />,
    errorElement: <ErrorPage />,
    loader: loader,
    
    children: [
      {
        path: "category",
        element: <CategoryShop />,
        errorElement: <ErrorPage />,
      },
      {
        path: "cart",
        element: <CartShop />,
        errorElement: <ErrorPage />,
      },
      {
        path: "checkout",
        element: <CheckoutShop />,
        errorElement: <ErrorPage />,
      },
      {
        path: "orderConfirmation",
        element: <OrderConfirmationShop />,
        errorElement: <ErrorPage />,
      },
      {
        path: "product",
        element: <ProductShop />,
        errorElement: <ErrorPage />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
