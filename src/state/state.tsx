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

interface AxiosConfigInterface {
  withCredentials: boolean;
  headers: {
    "Content-Type": string;
  };
}

export const credentialsObj = { withCredentials: true };

export const axiosConfig: AxiosConfigInterface = {
  ...credentialsObj,
  headers: {
    "Content-Type": "application/json",
  },
};

export const cookiesEndpoint: string = "cookie/read";

export const mainPath = "/";
export const categoriesPath = "categories";
export const cartPath = "cart";
export const checkoutPath = "checkout";
export const orderConfirmationPath = "orderConfirmation";
export const productPath = "products";
export const singleProductPath = `${productPath}/:productId`;
export const singleCategoryPath: string = `:category`;

export const ourUsString: string = "o nas";
export const apiCartPath: string = "cart";

export const stepperTextArr: StepperObjModel[] = [
  { key: 1, label: "Darmowa wysyłka powyżej 200 zł" },
  { key: 2, label: "Twoje zamówienie jest dla nas wazne" },
];

export const aboutUsArr: CategoriesModel[] = [
  {
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
  },
];

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

export const breakpointViewSize: string = "(min-width: 768px)";

import slider1 from "../assets/slider-component/slider1.png";
import slider2 from "../assets/slider-component/slider2.png";
import slider3 from "../assets/slider-component/slider3.png";
import { CarouselModel } from "../model/model";

export const carouselArr: CarouselModel[] = [
  {
    key: 0,
    imageName: slider1,
    nameOfTheCafe: "Bean Nook",
    mainTitle: "Udoskonal swoje kawowe rytuały z naszymi akcesoriami.",
    buttonName: "Kup Akcesoria",
    shortbuttonName: "Kup",
  },
  {
    key: 1,
    imageName: slider2,
    nameOfTheCafe: "Bean Nook",
    mainTitle: "Aromatyczne ukojenie dla Twoich zmysłów",
    buttonName: "Kup Kawę",
    shortbuttonName: "Kup",
  },
  {
    key: 2,
    imageName: slider3,
    nameOfTheCafe: "Bean Nook",
    mainTitle: "Twoje Magiczne Miejsce na Chwilę Rozkoszy",
    buttonName: "Odwiedź Naszą Kawiarnię",
    shortbuttonName: "Odwiedź",
  },
];

export interface SelectHeaderModel {
  value: string;
  labelText: string;
}

export const selectValueHeader: SelectHeaderModel[] = [
  {
    value: "10",
    labelText: "Cena rosnąco",
  },
  {
    value: "20",
    labelText: "Cena malejąco",
  },
  {
    value: "30",
    labelText: "Od A do Z",
  },
  {
    value: "40",
    labelText: "Od Z do A",
  },
];
