import axios from "axios";
import { apiBase } from "./apiSignUp";

export const apiProducts = async (apiBase:string) => {
  const apiUrl: string = apiBase + "products";
  try {
    const response = await axios.get(apiUrl);
    return response.data;
  } catch (error) {
    console.log(error);
  }
};
