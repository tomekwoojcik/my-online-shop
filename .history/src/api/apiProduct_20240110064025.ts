import axios from "axios";

export interface productModel {
    
}

export const apiProduct = async (Uuid: string, url: string) => {
  const apiUrl: string = url + "product";
  try {
    const response = await axios.get(apiUrl, {
      params: {
        productUuid: Uuid,
      },
    });
    return response.data;
  } catch (error) {
    console.log(error);
  }
};
