import { createBrowserRouter } from "react-router-dom";
import { MainPage } from "../component/pages/main-page/main-page";
import { loader } from "../main";
import ErrorPage from "../pages/error-page/error-page";
import { cartPath, categoryPath, checkoutPath, mainPath, orderConfirmationPath, productPath, singleProductPath } from "../state/state";
import CartPage from "../pages/cart-page/cart-page";
import CheckoutPage from "../pages/checkout-page/checkout-page";
import OrderConfirmationPage from "../pages/order-confirmation-page/order-confirmation-page";
import ProductPage from "../pages/product-page/product-page";
import CategoryShop from "../pages/category-shop/category-shop";
import ProductsPage from "../pages/products-page/products-page";
import SingleProductPage from "../pages/single-product-page/single-product-page";

export const router = createBrowserRouter([
  {
    path: mainPath,
    element: <MainPage />,
    errorElement: <ErrorPage />,
    loader: loader,
    
    children: [
      {
        path: categoryPath,
        element: <CategoryShop />,
        errorElement: <ErrorPage />,
        loader: loader
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
