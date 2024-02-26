import { FC } from "react";
import CategoryShop from "../categories-page/categories-shop";
import { CategoryShopProvider } from "../categories-page/categories-shop-context";
import { Outlet } from "react-router-dom";

const CategoriesPage: FC = () => {
  return (
    <CategoryShopProvider>
      <CategoryShop />
      <Outlet />
    </CategoryShopProvider>
  );
};

export default CategoriesPage;
