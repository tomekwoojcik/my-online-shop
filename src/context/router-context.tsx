import { createBrowserRouter } from "react-router-dom";
import { MainPage } from "../component/pages/main-page/main-page";
import { loader } from "../main";
import ErrorPage from "../pages/error-page/error-page";
import {
  cartPath,
  categoriesPath,
  checkoutPath,
  mainPath,
  orderConfirmationPath,
  productPath,
  singleCategoryPath,
  singleProductPath,
} from "../state/state";
import CartPage from "../pages/cart-page/cart-page";
import CheckoutPage from "../pages/checkout-page/checkout-page";
import OrderConfirmationPage from "../pages/order-confirmation-page/order-confirmation-page";
import ProductsPage from "../pages/products-page/products-page";
import SingleProductPage from "../pages/single-product-page/single-product-page";
import CategoryShop from "../pages/categories-page/categories-shop";
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
        element: <CategoryShop />,
        errorElement: <ErrorPage />,
        loader: loader,
        children: [
          {
            path: singleCategoryPath,
            element: <CategoryPage />,
            errorElement: <ErrorPage />,
            loader: loader,
          },
        ],
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
