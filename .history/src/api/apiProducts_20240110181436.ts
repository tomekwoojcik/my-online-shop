import axios from "axios";
import { productModel } from "./apiProduct";

export interface productsModel{
    products: productModel[],
    totalPages: number,
    totalProducts: number,
    hasPrevious: boolean,
    hasNext:boolean,
}

export const apiProducts = async (
  apiBase: string,
  numberOfPage: number = 0,
  sizeOfPage: number = 10,
  pageSortingType: string = "regularPrice,desc"
) => {
  const apiUrl: string = apiBase + "products";
  try {
    const response = await axios.get(apiUrl, {
      params: { page: numberOfPage, size: sizeOfPage, sort: pageSortingType },
    });
    return response.data;
  } catch (error) {
    console.log(error);
  }
};
