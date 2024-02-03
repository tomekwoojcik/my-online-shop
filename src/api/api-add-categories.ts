import axios from "axios";

export interface CategoriesObjModel {
  parentCategoryId: string;
  name: string;
  description: string;
  icon: string;
  imagePath: string;
}

export interface CategoriesObjResponse {
  name: string;
  description: string;
  subcategories: string[];
  uid: string;
}

export const apiAddCategories = async (
  url: string,
  categoriesObj: CategoriesObjModel
): Promise<CategoriesObjResponse | undefined> => {
  const apiUrl: string = url + "categories";

  try {
    const response = await axios.post<CategoriesObjResponse>(
      apiUrl,
      categoriesObj
    );
    return response.data;
  } catch (error) {
    console.log(error);
  }
};
