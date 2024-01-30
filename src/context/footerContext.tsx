import { createContext, useEffect, useState } from "react";
import { propsModel } from "../model/propsContextModel";
import { apiGetCategories, CategoriesModel } from "../api/apiGetCategories";

export interface ArrButtonModel {
  heading: string;
}

export interface MenuBoxObjModel {
  masterHeading: string;
  arrButton: ArrButtonModel[];

}

interface FooterContextModel {
  categories: CategoriesModel[] | undefined;
  helpCenterArr: MenuBoxObjModel[];
  setHandleEmail: React.Dispatch<React.SetStateAction<string>>;
  getEmail: () => void;
}

export const FooterContext = createContext({} as FooterContextModel);

export const FooterProvider = ({ children }: propsModel) => {
  const [handleEmail, setHandleEmail] = useState<string>("");
  const [categories, setCategories] = useState<CategoriesModel[] | undefined>();

  const getEmail = (): void => {
      handleEmail
  }

  useEffect(() => {
    apiGetCategories("https://lopi2-backend-5517f8f04d28.herokuapp.com/api/")
      .then((res: CategoriesModel[] | undefined) => setCategories(res))
      .catch((err) => console.error(err));
  }, []);


  const helpCenterArr: MenuBoxObjModel[] = [
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
          heading: "Blog",
        },
      ],
    },
  ];

  return (
    <FooterContext.Provider value={{ categories, helpCenterArr, setHandleEmail, getEmail }}>
      {children}
    </FooterContext.Provider>
  );
};
