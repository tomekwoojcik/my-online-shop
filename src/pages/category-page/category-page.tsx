import { FC } from "react";
import CategoryShop from "../category-shop/category-shop";
import { CategoryShopProvider } from "../category-shop/category-shop-context";

const CategoriesPage:FC = () => {
  return(
    <CategoryShopProvider>
      <CategoryShop />
    </CategoryShopProvider>)
  ;
};

export default CategoriesPage;

