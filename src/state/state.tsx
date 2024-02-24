import { CategoriesModel } from "../api/api-get-categories";

export interface ArrButtonModel {
  heading: string;
}
export interface MenuBoxObjModel {
    masterHeading: string;
    arrButton: ArrButtonModel[];
}

export interface StepperObjModel {
  key: number;
  label: string;
}

export const apiPath: string = "https://lopi2-backend-5517f8f04d28.herokuapp.com/api/";

export const mainPath = "/";
export const categoryPath = "category";
export const cartPath = "cart";
export const checkoutPath = "checkout";
export const orderConfirmationPath = "orderConfirmation";
export const productPath = "product";
export const breakpointViewState="(min-width: 768px)"

 export const stepperTextArr: StepperObjModel[] = [
    { key: 1, label: "Darmowa wysyłka powyżej 200 zł" },
    { key: 2, label: "Twoje zamówienie jest dla nas wazne" },
  ];

  export const aboutUsArr : CategoriesModel[] = [{
    name: "O nas",
    description: "O nas",
    subcategories: [],
    uid: "1",
  },
    {
    name: "O nas",
    description: "O nas",
    subcategories: [],
    uid: "2",
  }
  ]


export const helpCenterArr: MenuBoxObjModel[] = [
    {
      masterHeading: "Centrum Pomocy",
      arrButton: [
        {
          heading: "Regulamin",
        },
        {
          heading: "RODO",
        },
        {
          heading: "Polityka prywatności cookies",
        },
        {
          heading: "Polityka prywatności",
        },
      ],
    },

    {
      masterHeading: "My",
      arrButton: [
        {
          heading: "O nas",
        },
        {
          heading: "Przepisy",
        },
        {
          heading: "Kawiarnia",
        },
      ],
    },
  ];