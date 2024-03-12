import axios from "axios";
import { ProductModel } from "./api-product";

export interface ProductsModel {
  products: ProductModel[];
  totalPages: number;
  totalProducts: number;
  hasPrevious: boolean;
  hasNext: boolean;
}

export const apiGetProducts = async (
  apiBase: string,
  numberOfPage: number = 0,
  sizeOfPage: number = 10,
  pageSortingType: string = "regularPrice,desc"
): Promise<ProductsModel | undefined> => {
  const apiUrl: string = apiBase + "products";
  try {
    const response = await axios.get<ProductsModel>(apiUrl, {
      params: { page: numberOfPage, size: sizeOfPage, sort: pageSortingType },
    });
    return response.data;
  } catch (error) {
    console.log(error);
  }
};
