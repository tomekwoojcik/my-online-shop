import axios from "axios";
import { productModel } from "./api-product";

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
): Promise<productModel | undefined> => {
  const apiUrl = url + "products";
  try {
    const response = await axios.post(apiUrl, product);
    return response.data;
  } catch (error) {
    console.log(error);
  }
};
