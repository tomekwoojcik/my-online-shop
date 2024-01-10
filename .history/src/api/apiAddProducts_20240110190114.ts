import axios from "axios";

export const apiAddProducts = async (url:string) => {
    const apiUrl = url + "products";
    try {
        const response = await axios.post(apiUrl,) 
    } catch (error) {
        console.log(error);
    }
 };