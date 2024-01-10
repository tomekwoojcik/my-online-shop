import axios from "axios";

export const apiCategories = (url:string) => {
    const apiUrl: string = url + "categories";

    const response = axios.post(url,{"parentCategoryId": "3fa85f64-5717-4562-b3fc-2c963f66afa6",
  "name": "string",
  "description": "string",
  "icon": "string",
  "imagePath": "string"})
}