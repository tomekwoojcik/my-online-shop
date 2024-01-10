import axios from "axios"
import { apiBase } from "./apiSignUp"

export const apiProducts = async () => {
    const url: string = apiBase + "products";
    const response = await axios.get(url)
}