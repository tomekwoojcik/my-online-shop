import axios from "axios";

export interface SubcategoriesModel{
  parentCategoryId: string,
  name: string,
  description: string,
  icon: string,
  imagePath: string
}

export interface CategoriesModel {
  name: string;
  description: string;
  subcategories: CategoriesModel[];
  uid: string;
}

export const apiGetCategories = async (
  url: string
): Promise<CategoriesModel[] | undefined> => {
  const apiUrl: string = url + "categories";

  try {
    const response = await axios.get<CategoriesModel[]>(apiUrl);
    return response.data;
  } catch (error) {
    console.log(error);
  }
};
