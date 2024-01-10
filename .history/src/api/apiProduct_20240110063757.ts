import axios from "axios";


const apiProduct = (Uuid: string, url:string) => {
    const apiUrl: string = url + "product";
    try {
        axios.get(apiUrl, {
        params: {
        productUuid: Uuid,
    }})    
        
    } catch (error) {
        console.log(error)
    }
    
}