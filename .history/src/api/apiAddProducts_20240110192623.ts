import axios from "axios";



export const apiAddProducts = async (url:string, product) => {
    const apiUrl = url + "products";
    try {
        const response = await axios.post(apiUrl, product) 
    } catch (error) {
        console.log(error);
    }
 };