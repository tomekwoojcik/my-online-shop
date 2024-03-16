import axios from "axios";
import { apiCartPath } from "../../state/state";
import { CartModel } from "./api-get-cart";


export const apiGetCart = async (
  url: string
): Promise<CartModel | undefined> => {
  const apiUrl: string = url + apiCartPath;

  try {
    const response = await axios.delete<CartModel>(apiUrl);
    return response.data;
  } catch (error) {
    console.log(error);
  }
};
