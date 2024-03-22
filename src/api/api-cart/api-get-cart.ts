import axios from "axios";
import { apiCartPath, credentialsObj } from "../../state/state";
import { ProductModel } from "../api-product";

export interface CartProductModel {
  product: ProductModel;
  quantity: number;
}

export interface CartModel {
  uuid: string;
  cartItems: CartProductModel[];
  totalPrice: number;
  totalQuantity: number;
}

export const apiGetCart = async (
  url: string
): Promise<CartModel | undefined> => {
  const apiUrl: string = url + apiCartPath;

  try {
    const response = await axios.get<CartModel>(apiUrl, credentialsObj);
    return response.data;
  } catch (error) {
    console.log(error);
  }
};
