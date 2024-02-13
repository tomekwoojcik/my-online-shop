import axios from "axios";

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
    const response = await axios.post<CategoryModel>(
      apiUrl,
      categoriesObj
    );
    return response.data;
  } catch (error) {
    console.log(error);
  }
};
