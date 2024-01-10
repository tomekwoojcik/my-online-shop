import axios from "axios";

export interface categoriesObjModel {
  parentCategoryId: string;
  name: string;
  description: string;
  icon: string;
  imagePath: string;
}

export interface categoriesObjResponse {
  name: string;
  description: string;
  subcategories: string[];
  uid: string;
}

export const apiCategories = async (
  url: string,
  categoriesObj: categoriesObjModel
) : Promise<categoriesObjResponse| undefined> => {
  const apiUrl: string = url + "categories";

  try {
    const response = await axios.post(apiUrl, categoriesObj);
    return response.data;
  } catch (error) {
    console.log(error);
  }
};
