import axios from "axios";
import { apiCartPath } from "../../state/state";
import { CartModel } from "./api-get-cart";

export const apiUpdateCart = async (
  url: string,
  productUuid: string,
  quantity: number
): Promise<CartModel | undefined> => {
  const apiUrl: string = url + apiCartPath;

  try {
    const response = await axios.put<CartModel>(apiUrl, {
      productUuid: productUuid,
      quantity: quantity,
    });
    return response.data;
  } catch (error) {
    console.log(error);
  }
};
