import { createBrowserRouter } from "react-router-dom";
import { MainPage } from "../component/pages/main-page/main-page";
import { loader } from "../main";
import ErrorPage from "../pages/error-page/error-page";
import {
  cartPath,
  categoriesPath,
  categoryPath,
  checkoutPath,
  mainPath,
  orderConfirmationPath,
  productPath,
  singleProductPath,
} from "../state/state";
import CategoriesPage from "../pages/categorypage/category-page";
import CartPage from "../pages/cart-page/cart-page";
import CheckoutPage from "../pages/checkout-page/checkout-page";
import OrderConfirmationPage from "../pages/order-confirmation-page/order-confirmation-page";
import ProductsPage from "../pages/products-page/products-page";
import SingleProductPage from "../pages/single-product-page/single-product-page";
import CategoryPage from "../pages/category-page/category-page";

export const router = createBrowserRouter([
  {
    path: mainPath,
    element: <MainPage />,
    errorElement: <ErrorPage />,
    loader: loader,

    children: [
      {
        path: categoriesPath,
        element: <CategoriesPage />,
        errorElement: <ErrorPage />,
        loader: loader,
        children: [
          {
            path: categoryPath,
            element: <CategoryPage />,
            errorElement: <ErrorPage />,
          },
        ]

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
        element: <ProductsPage />,
        errorElement: <ErrorPage />,
      },
      {
        path: singleProductPath,
        element: <SingleProductPage />,
        errorElement: <ErrorPage />,
      },
    ],
  },
]);
