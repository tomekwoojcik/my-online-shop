import { createContext, useEffect, useState } from "react";
import { PropsModel } from "../model/props-context-model";
import { apiGetCategories, CategoriesModel } from "../api/api-get-categories";
import { useMediaQuery } from "@mui/material";

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
  breakpointView: boolean;
}

export const FooterContext = createContext({} as FooterContextModel);

export const FooterProvider = ({ children }: PropsModel) => {
  const [handleEmail, setHandleEmail] = useState<string>("");
  const [categories, setCategories] = useState<CategoriesModel[] | undefined>();
    const breakpointView: boolean = useMediaQuery("(min-width: 768px)");

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
    <FooterContext.Provider value={{ categories, helpCenterArr, setHandleEmail, getEmail, breakpointView }}>
      {children}
    </FooterContext.Provider>
  );
};
