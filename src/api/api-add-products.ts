import axios from "axios";
import { ProductModel } from "./api-product";
import { axiosConfig } from "../state/state";

export interface SetProductModel {
  name: string;
  sku: string;
  regularPrice: number;
  discountPrice: number;
  discountPriceEndDate: Date;
  description: string;
  shortDescription: string;
  note: string;
  status: string;
  productscol: string;
  quantity: number;
  categories: [
    {
      categoryUid: string;
    }
  ];
  images: [
    {
      imageUrl: string;
    }
  ];
}

export const apiAddProducts = async (
  url: string,
  product: SetProductModel
): Promise<ProductModel | undefined> => {
  const apiUrl = url + "products";
  try {
    const response = await axios.post(apiUrl, null, {
      params: product,
      ...axiosConfig
    });
    return response.data;
  } catch (error) {
    console.log(error);
  }
};
