import axios from "axios";

console.log(typeof("2024-01-10T05:33:26.311Z"));
export interface productModel {
  name: string;
  sku: string;
  regularPrice: number;
  discountPrice: number;
  discountPriceEndDate: "2024-01-10T05:33:26.311Z";
  lowestPrice: 0;
  description: "string";
  shortDescription: "string";
  note: "string";
  status: "IN_PREPARATION";
  productscol: "string";
  quantity: 0;
  createdAt: "2024-01-10T05:33:26.311Z";
  updatedAt: "2024-01-10T05:33:26.311Z";
  archivedAt: "2024-01-10T05:33:26.311Z";
  categories: [
    {
      name: "string";
      description: "string";
      subcategories: ["string"];
      uid: "3fa85f64-5717-4562-b3fc-2c963f66afa6";
    }
  ];
  imageUrls: [
    {
      imageUrl: "string";
    }
  ];
  uid: "3fa85f64-5717-4562-b3fc-2c963f66afa6";
}

export const apiProduct = async (Uuid: string, url: string) => {
  const apiUrl: string = url + "product";
  try {
    const response = await axios.get(apiUrl, {
      params: {
        productUuid: Uuid,
      },
    });
    return response.data;
  } catch (error) {
    console.log(error);
  }
};
