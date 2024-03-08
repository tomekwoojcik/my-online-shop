import { FC, useState } from "react";
import { CategoryBoxMenu } from "../category-box-menu/category-box-menu";
import { CategoryDialog } from "../category-box-menu/category-box-menu-dialog";
import { breakpointViewSize } from "../../../state/state";
import { useMediaQuery } from "@mui/material";
import { NavigateFunction, useNavigate } from "react-router-dom";

const CategoryBox: FC = () => {
  const [activeCategory, setActiveCategory] = useState<number | null>(null);
  const nav: NavigateFunction = useNavigate();
  const handleButtonCategory = (arrIndex: number, endPath: string) => {
    setActiveCategory(arrIndex);
    nav(endPath)
  };
  return useMediaQuery(breakpointViewSize) ? (
    <CategoryBoxMenu
      activeCategory={activeCategory}
      handleButtonCategory={handleButtonCategory}
    />
  ) : (
    <CategoryDialog
      activeCategory={activeCategory}
      handleButtonCategory={handleButtonCategory}
    />
  );
};
export default CategoryBox;
