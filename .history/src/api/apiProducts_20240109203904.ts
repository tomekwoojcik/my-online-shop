import axios from "axios";
import { apiBase } from "./apiSignUp";

export const apiProducts = async () => {
  const url: string = apiBase + "products";
  try {
    const response = await axios.get(url);
    return response.data;
  } catch (error) {
    console.log(error);
  }
};
