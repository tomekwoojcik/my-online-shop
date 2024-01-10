import axios from "axios";

interface setProductModel{
    
}

export const apiAddProducts = async (url:string, product:setProductModel) => {
    const apiUrl = url + "products";
    try {
        const response = await axios.post(apiUrl, product) 
    } catch (error) {
        console.log(error);
    }
 };