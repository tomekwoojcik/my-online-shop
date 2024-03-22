import axios from "axios";
import { apiCartPath, axiosConfig } from "../../state/state";
import { CartModel } from "./api-get-cart";

export interface ProductObjectInCartModel {
  productUuid: string;
  quantity: number;
}

export const apiAddCart = async (
  url: string,
  product: ProductObjectInCartModel
): Promise<CartModel | undefined> => {
  const apiUrl: string = url + apiCartPath;
  try {
    const response = await axios.post<CartModel>(apiUrl, null, {
      params: product,
      //TODO wynieść do state badz config
      //TODO .env
      ...axiosConfig
    });
    return response.data;
  } catch (error) {
    console.log(error);
  }
};
