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
  breakpointView: boolean;
  handleClickOpen: VoidFunction;
  handleClose: VoidFunction;
  open: boolean;
}

export const CategoryShopContext = createContext({} as PropsContextModel);

export const CategoryShopProvider = ({ children }: PropsModel) => {
  const categories = useLoaderData() as CategoriesModel[];

  const [activeCategory, setActiveCategory] = useState<number | null>(null);
  const [arrCategory] = useState<CategoriesModel[]>(categories);
  const [open, setOpen] = useState<boolean>(false);
  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const breakpointView: boolean = useMediaQuery("(min-width: 768px)");

  const handleButtonCategory = (arrIndex: number) => {
    setActiveCategory(arrIndex);
  };

  return (
    <CategoryShopContext.Provider
      value={{
        activeCategory,
        handleButtonCategory,
        arrCategory,
        breakpointView,
        handleClickOpen,
        open,
        handleClose,
      }}
    >
      {children}
    </CategoryShopContext.Provider>
  );
};
