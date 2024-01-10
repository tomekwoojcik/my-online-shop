import axios from "axios";

export const apiCategories = async (url: string) => {
  const apiUrl: string = url + "categories";

  try {
    const response = await axios.post(apiUrl, {
      parentCategoryId: "3fa85f64-5717-4562-b3fc-2c963f66afa6",
      name: "string",
      description: "string",
      icon: "string",
      imagePath: "string",
    });
      return response.data;
  } catch (error) {
    console.log(error);
  }
};
