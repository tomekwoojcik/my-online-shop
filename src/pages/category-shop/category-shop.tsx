import { ThemeProvider } from "@mui/material";
// import { CategoryShopProvider } from "./category-shop-context";
import { theme } from "../../context/theme-context";
import CategoryBox from "./category-box/category-box";

const CategoryShop = () => {
  return (
    <ThemeProvider theme={theme}>
        <CategoryBox />
    </ThemeProvider>
  );
};

export default CategoryShop;
