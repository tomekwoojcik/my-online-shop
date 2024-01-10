import axios from "axios";

export const apiProducts = async (apiBase: string) => {
  const apiUrl: string = apiBase + "products";
  try {
      const response = await axios.get(apiUrl, {
          params: {
        
    }} );
    return response.data;
  } catch (error) {
    console.log(error);
  }
};
