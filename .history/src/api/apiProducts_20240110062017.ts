import axios from "axios";

export const apiProducts = async (apiBase: string) => {
  const apiUrl: string = apiBase + "products";
  try {
    const response = await axios.get(apiUrl, {
      params: { page: 0, size: 10, sort: "regularPrice,desc" },
    });
    return response.data;
  } catch (error) {
    console.log(error);
  }
};
