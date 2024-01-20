import axios from "axios";

export interface categoriesModel {
  name: string;
  description: string;
  subcategories: [];
  uid: string;
}

export const apiGetCategories = async (
  url: string
): Promise<categoriesModel[] | undefined> => {
  const apiUrl: string = url + "categories";

  try {
    const response = await axios.get<categoriesModel[]>(apiUrl);
    return response.data;
  } catch (error) {
    console.log(error);
  }
};
