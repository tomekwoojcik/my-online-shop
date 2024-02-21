import { createBrowserRouter } from "react-router-dom";
import { MainPage } from "../component/pages/main-page/main-page";
import ErrorPage from "../pages/error-page/error-page";
import {
  cartPath,
  categoryPath,
  checkoutPath,
  mainPath,
  orderConfirmationPath,
  productPath,
} from "../state/state";
import CategoriesPage from "../pages/category-page/category-page";
import CartPage from "../pages/cart-page/cart-page";
import CheckoutPage from "../pages/checkout-page/checkout-page";
import OrderConfirmationPage from "../pages/order-confirmation-page/order-confirmation-page";
import ProductPage from "../pages/product-page/product-page";
import { apiGetCategories } from "../api/api-get-categories";

export const loadCategories = async() => {
  const categories = await apiGetCategories(
    "https://lopi2-backend-5517f8f04d28.herokuapp.com/api/"
  )
  return categories;
};

export const router = createBrowserRouter([
  {
    path: mainPath,
    element: <MainPage />,
    errorElement: <ErrorPage />,
    loader: loadCategories,
    children: [
      {
        path: categoryPath,
        element: <CategoriesPage />,
        errorElement: <ErrorPage />,
        loader: loadCategories,

      },
      {
        path: cartPath,
        element: <CartPage />,
        errorElement: <ErrorPage />,
      },
      {
        path: checkoutPath,
        element: <CheckoutPage />,
        errorElement: <ErrorPage />,
      },
      {
        path: orderConfirmationPath,
        element: <OrderConfirmationPage />,
        errorElement: <ErrorPage />,
      },
      {
        path: productPath,
        element: <ProductPage />,
        errorElement: <ErrorPage />,
      },
    ],
  },
]);
