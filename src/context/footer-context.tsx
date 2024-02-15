import { createContext, useEffect, useState } from "react";
import { PropsModel } from "../model/props-context-model";
import { apiGetCategories, CategoriesModel } from "../api/api-get-categories";
import { useMediaQuery } from "@mui/material";
import { MenuBoxObjModel, apiPath, helpCenterArr } from "../state/state";

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
  const breakpointView: boolean = useMediaQuery("768px")
  const getEmail = (): void => {
      handleEmail
  }

  useEffect(() => {
    apiGetCategories(apiPath)
      .then((res: CategoriesModel[] | undefined) => setCategories(res))
      .catch((err) => console.error(err));
  }, []);

  return (
    <FooterContext.Provider value={{ categories, helpCenterArr, setHandleEmail, getEmail, breakpointView }}>
      {children}
    </FooterContext.Provider>
  );
};
