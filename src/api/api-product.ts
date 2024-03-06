import axios from "axios";

export interface ProductModel {
  name: string;
  sku: string;
  regularPrice: number;
  discountPrice: number;
  discountPriceEndDate: Date;
  lowestPrice: number;
  description: string;
  shortDescription: string;
  note: string;
  status: string;
  productscol: string;
  quantity: number;
  createdAt: Date;
  updatedAt: Date;
  archivedAt: Date;
  categories: [
    {
      name: string;
      description: string;
      subcategories: string[];
      uid: string;
    }
  ];
  imageUrls: [
    {
      imageUrl: string;
    }
  ];
  uid: string;
}

export const apiProduct = async (
  Uuid: string,
  url: string
): Promise<ProductModel | undefined> => {
  const apiUrl: string = url + "product";
  try {
    const response = await axios.get<ProductModel>(apiUrl, {
      params: {
        productUuid: Uuid,
      },
    });
    return response.data;
  } catch (error) {
    console.log(error);
  }
};
