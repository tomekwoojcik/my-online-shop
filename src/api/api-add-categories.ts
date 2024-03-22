import axios from "axios";
import { axiosConfig } from "../state/state";

export interface CategoryModel {
  parentCategoryId: string;
  name: string;
  description: string;
  icon: string;
  imagePath: string;
}

export const apiAddCategories = async (
  url: string,
  categoriesObj: CategoryModel
): Promise<CategoryModel | undefined> => {
  const apiUrl: string = url + "categories";

  try {
    const response = await axios.post<CategoryModel>(apiUrl, null, {
      params: categoriesObj,
      ...axiosConfig
    });
    return response.data;
  } catch (error) {
    console.log(error);
  }
};
