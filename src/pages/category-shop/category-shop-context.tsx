import { createContext, useState } from "react";
import { PropsModel } from "../../model/props-context-model";
import { useMediaQuery } from "@mui/material";

export type VoidFunction = () => void;

interface PropsContextModel {
  handleButtonCategory: (arrIndex: number) => void;
  activeCategory: number | null;
  breakpointView: boolean;
  handleClickOpen: VoidFunction;
  handleClose: VoidFunction;
  open: boolean;
}

export const CategoryShopContext = createContext({} as PropsContextModel);

export const CategoryShopProvider = ({ children }: PropsModel) => {

  const [activeCategory, setActiveCategory] = useState<number | null>(null);
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
