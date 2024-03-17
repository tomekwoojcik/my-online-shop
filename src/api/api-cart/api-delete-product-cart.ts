import axios from "axios";
import { apiCartPath } from "../../state/state";
import { CartModel } from "./api-get-cart";

export const apiUpdateCart = async (
  url: string,
  productUuid: string,
): Promise<CartModel | undefined> => {
  const apiUrl: string = url + apiCartPath;

  try {
    const response = await axios.delete<CartModel>(apiUrl + `/${productUuid}`);
    return response.data;
  } catch (error) {
    console.log(error);
  }
};
