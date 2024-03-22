import axios from "axios";
import { apiCartPath, axiosConfig } from "../../state/state";
import { CartModel } from "./api-get-cart";
import { ProductObjectInCartModel } from "./api-add-cart";

export const apiUpdateCart = async (
  url: string,
  productObject: ProductObjectInCartModel
): Promise<CartModel | undefined> => {
  const apiUrl: string = url + apiCartPath;

  try {
    const response = await axios.put<CartModel>(apiUrl, null, {
      params: productObject,
      ...axiosConfig,
    });
    return response.data;
  } catch (error) {
    console.log(error);
  }
};
