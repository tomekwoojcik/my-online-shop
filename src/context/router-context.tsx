import { createBrowserRouter } from "react-router-dom";
import { MainPage } from "../component/pages/main-page/main-page";
import { loader } from "../main";
import CartShop from "../pages/cart-shop/cart-shop";
import CategoryShop from "../pages/category-shop/category-shop";
import CheckoutShop from "../pages/checkout-shop/checkout-shop";
import ErrorPage from "../pages/error-page/error-page";
import OrderConfirmationShop from "../pages/order-confirmation-shop/order-confirmation-shop";
import ProductShop from "../pages/product-shop/product-shop";
import { pathCart, pathCategory, pathCheckout, pathMain, pathOrderConfirmation, pathProduct } from "../state/state";

export const router = createBrowserRouter([
  {
    path: pathMain,
    element: <MainPage />,
    errorElement: <ErrorPage />,
    loader: loader,
    
    children: [
      {
        path: pathCategory,
        element: <CategoryShop />,
        errorElement: <ErrorPage />,
      },
      {
        path: pathCart,
        element: <CartShop />,
        errorElement: <ErrorPage />,
      },
      {
        path: pathCheckout,
        element: <CheckoutShop />,
        errorElement: <ErrorPage />,
      },
      {
        path: pathOrderConfirmation,
        element: <OrderConfirmationShop />,
        errorElement: <ErrorPage />,
      },
      {
        path: pathProduct,
        element: <ProductShop />,
        errorElement: <ErrorPage />,
      },
    ],
  },
]);