import axios from "axios";
import { apiCartPath, credentialsObj } from "../../state/state";
import { CartModel } from "./api-get-cart";

export const apiDeleteProductInCart = async (
  url: string,
  productUuid: string,
): Promise<CartModel | undefined> => {
  const apiUrl: string = url + apiCartPath;

  try {
    const response = await axios.delete<CartModel>(apiUrl + `/${productUuid}`, credentialsObj);
    return response.data;
  } catch (error) {
    console.log(error);
  }
};
