import { FC, useState } from "react";
import { breakpointViewSize } from "../../../state/state";
import { useMediaQuery } from "@mui/material";
import { NavigateFunction, Outlet, useNavigate } from "react-router-dom";
import { CategoryBoxMenu } from "../../categories-page/categories-box-menu/categories-box-menu";
import { CategoryDialog } from "../categories-box-menu/categories-box-menu-dialog";

const CategoryBox: FC = () => {
  const [activeCategory, setActiveCategory] = useState<number | null>(null);
  const nav: NavigateFunction = useNavigate();
  const handleButtonCategory = (arrIndex: number, endPath: string) => {
    setActiveCategory(arrIndex);
    nav(endPath.toLowerCase());
  };

  return (
    <>
      {useMediaQuery(breakpointViewSize) ? (
        <CategoryBoxMenu
          activeCategory={activeCategory}
          handleButtonCategory={handleButtonCategory}
        />
      ) : (
        <CategoryDialog
          activeCategory={activeCategory}
          handleButtonCategory={handleButtonCategory}
        />
      )}
      <Outlet />
    </>
  );
};
export default CategoryBox;
