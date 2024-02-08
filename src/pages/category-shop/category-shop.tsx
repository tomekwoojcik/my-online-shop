import CategoryBoxMenu from "./category-box-menu/category-box-menu";
import { CategoryShopProvider } from "./category-shop-context";

const CategoryShop = () => {
  return (
    <CategoryShopProvider>
      <CategoryBoxMenu />
    </CategoryShopProvider>
  );
};

export default CategoryShop;
