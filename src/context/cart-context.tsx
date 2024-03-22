import { createContext, useEffect, useMemo, useState } from "react";
import {
  ProductObjectInCartModel,
  apiAddCart,
} from "../api/api-cart/api-add-cart";
import { CartModel, apiGetCart } from "../api/api-cart/api-get-cart";
import { apiUpdateCart } from "../api/api-cart/api-update-cart";
import { apiClearCart } from "../api/api-cart/api-clear-cart";
import { apiDeleteProductInCart } from "../api/api-cart/api-delete-product-cart";

export interface ContextValueInterface {
  cart: CartModel | undefined;
}

export interface CartContextInterface {
  addProductToCart: (
    product: ProductObjectInCartModel
  ) => Promise<CartModel | undefined>;
  cart: CartModel | undefined;
  updateProductToCart: (
    product: ProductObjectInCartModel
  ) => Promise<CartModel | undefined>;
  clearProductsInCart: () => Promise<CartModel | undefined>;
  deleteProductInCart: (productUuid: string) => Promise<CartModel | undefined>;
  contextValue: ContextValueInterface;
}
export interface PropsContextModel {
  children: JSX.Element | JSX.Element[];
}

const CartContext = createContext({} as CartContextInterface);

const CartProvider = ({ children }: PropsContextModel) => {
  const [cart, setCart] = useState<CartModel | undefined>(undefined);
  useEffect(() => {
    const getChartData = async () => {
      const cartData = await apiGetCart(import.meta.env.VITE_API_URL);
      setCart(cartData);
    };
    getChartData();
  }, []);

  const addProductToCart = async (productObj: ProductObjectInCartModel) => {
    const addProduct = await apiAddCart(
      import.meta.env.VITE_API_URL,
      productObj
    );
    return addProduct;
  };

  const updateProductToCart = async (productObj: ProductObjectInCartModel) => {
    const updateProduct = await apiUpdateCart(
      import.meta.env.VITE_API_URL,
      productObj
    );
    return updateProduct;
  };

  const clearProductsInCart = async () => {
    const apiClear = await apiClearCart(import.meta.env.VITE_API_URL);
    return apiClear;
  };

  const deleteProductInCart = async (productUuid: string) => {
    const apiDelete = await apiDeleteProductInCart(
      import.meta.env.VITE_API_URL,
      productUuid
    );
    return apiDelete;
  };

  const contextValue = useMemo<ContextValueInterface>(() => {
    return {
      cart,
    };
  }, [cart]);

  return (
    <CartContext.Provider
      value={{
        addProductToCart,
        cart,
        contextValue,
        updateProductToCart,
        clearProductsInCart,
        deleteProductInCart,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export { CartContext, CartProvider };
