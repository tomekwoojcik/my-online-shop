import CategoryShop from "../category-shop/category-shop";
import { CategoryShopProvider } from "../category-shop/category-shop-context";

const CategoriesPage = () => {
  return <div>
    <CategoryShopProvider>
      <CategoryShop />
    </CategoryShopProvider>
  </div>;
};

export default CategoriesPage;

