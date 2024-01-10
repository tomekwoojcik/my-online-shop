import axios from "axios";

export interface categoriesObjModel {
  parentCategoryId: string;
  name: string;
  description: string;
  icon: string;
  imagePath: string;
}

export interface categoriesObjResponse {
    
}

export const apiCategories = async (
  url: string,
  categoriesObj: categoriesObjModel
) => {
  const apiUrl: string = url + "categories";

  try {
    const response = await axios.post(apiUrl, categoriesObj);
    return response.data;
  } catch (error) {
    console.log(error);
  }
};
