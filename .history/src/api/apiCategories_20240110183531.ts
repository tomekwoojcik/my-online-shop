import axios from "axios";

interface categoriesObjModel {
    parentCategoryId: string,
  name: string,
  description: string,
  icon: string,
  imagePath: string
}

export const apiCategories = async (url: string, categoriesObj:categoriesObjModel) => {
  const apiUrl: string = url + "categories";

  try {
    const response = await axios.post(apiUrl, categoriesObj);
    return response.data;
  } catch (error) {
    console.log(error);
  }
};
