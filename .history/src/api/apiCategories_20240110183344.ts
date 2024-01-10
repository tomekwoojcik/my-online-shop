import axios from "axios";

interface categoriesObjModel {
    "parentCategoryId: 3fa85f64-5717-4562-b3fc-2c963f66afa6",
  "name": "string",
  "description": "string",
  "icon": "string",
  "imagePath": "string"
}

export const apiCategories = async (url: string, categoriesObj:) => {
  const apiUrl: string = url + "categories";

  try {
    const response = await axios.post(apiUrl, categoriesObj);
    return response.data;
  } catch (error) {
    console.log(error);
  }
};
