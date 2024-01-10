import axios from "axios";

export const apiProducts = async (apiBase: string, numberOfPage:number = 0, sizeOfPage: number = 10) => {
  const apiUrl: string = apiBase + "products";
  try {
    const response = await axios.get(apiUrl, {
      params: { page: numberOfPage, size: sizeOfPage, sort: "regularPrice,desc" },
    });
    return response.data;
  } catch (error) {
    console.log(error);
  }
};
