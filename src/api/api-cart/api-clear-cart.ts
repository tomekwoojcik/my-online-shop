import axios from "axios";
import { apiCartPath, credentialsObj } from "../../state/state";
import { CartModel } from "./api-get-cart";


export const apiClearCart = async (
  url: string
): Promise<CartModel | undefined> => {
  const apiUrl: string = url + apiCartPath;

  try {
    const response = await axios.delete<CartModel>(apiUrl, credentialsObj);
    return response.data;
  } catch (error) {
    console.log(error);
  }
};
