import { useContext } from "react";
import { CartContextInterface, CartContext } from "./cart-context";

export const useCartContext = () => {
  const context = useContext<CartContextInterface>(CartContext);
  if (context === undefined) {
    throw new Error("useCartContext was used outside of its Provider");
  }

  return context;
};