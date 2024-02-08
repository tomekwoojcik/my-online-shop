import { createContext, useState } from "react";
import { PropsModel } from "../../model/props-context-model";
import { useLoaderData } from "react-router";
import { CategoriesModel } from "../../api/api-get-categories";
import { useMediaQuery } from "@mui/material";

export type VoidFunction = () => void;

interface PropsContextModel {
  handleButtonCategory: (arrIndex: number) => void;
  activeCategory: number | null;
  arrCategory: CategoriesModel[];
  mediaQueryMatches: boolean;
}

export const CategoryShopContext = createContext({} as PropsContextModel);

export const CategoryShopProvider = ({ children }: PropsModel) => {
  const category = useLoaderData() as CategoriesModel[];

  const [activeCategory, setActiveCategory] = useState<number | null>(null);
  const [arrCategory] = useState<CategoriesModel[]>(category);
  const mediaQueryMatches: boolean = useMediaQuery("(min-width: 768px)");

  const handleButtonCategory = (arrIndex: number) => {
    setActiveCategory(arrIndex);
  };

  return (
    <CategoryShopContext.Provider
      value={{ activeCategory, handleButtonCategory, arrCategory, mediaQueryMatches }}
    >
      {children}
    </CategoryShopContext.Provider>
  );
};
