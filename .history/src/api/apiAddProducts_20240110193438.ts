import axios from "axios";

interface setProductModel {
  name: string;
  sku: string;
  regularPrice: number;
  discountPrice: number;
  discountPriceEndDate: Date;
  description: string;
  shortDescription: string;
  note: string;
  status: string;
  productscol: string;
  quantity: number;
  categories: [
    {
      categoryUid: string;
    }
  ];
  images: [
    {
      imageUrl: string;
    }
  ];
}

export const apiAddProducts = async (url: string, product: setProductModel) => {
  const apiUrl = url + "products";
  try {
    const response = await axios.post(apiUrl, product);
  } catch (error) {
    console.log(error);
  }
};
