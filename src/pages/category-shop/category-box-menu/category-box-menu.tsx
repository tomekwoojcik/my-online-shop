import { useContext } from "react";
import { CategoriesModel } from "../../../api/api-get-categories";
import CategoryBoxMenuHeader from "../category-box-menu-header/category-box-menu-header";
import CategoryBoxMenuSlider from "../category-box-menu-slider/category-box-menu-slider";
import { CategoryShopContext } from "../category-shop-context";
import {
  CategoryInnerBoxMenuCustomize,
  ListMenu,
  ListItemMenuCustomize,
  ButtonMenuCategoryCustomize,
  InfoDivCircle,
} from "./category-box-menu.styled";
import { useLoaderData } from "react-router-dom";

export const CategoryBoxMenu = () => {
  const { handleButtonCategory, activeCategory } =
    useContext(CategoryShopContext);
  const loadCategories = useLoaderData() as CategoriesModel[];
  console.log(activeCategory);
  return (
    <CategoryInnerBoxMenuCustomize style={{}}>
      <CategoryBoxMenuHeader textHeader="Kategorie" />
      <ListMenu>
        {loadCategories.map((objCategory: CategoriesModel, index: number) => (
          <ListItemMenuCustomize
            onClick={() => handleButtonCategory(index)}
            key={index}
          >
            <ButtonMenuCategoryCustomize
              style={{
                width: "100%",
                display: "flex",
                flexDirection: "row",
                justifyContent: "space-between",
                alignItems: "center",
                color: activeCategory == index ? "#FF9A17" : "#4B5945",
              }}
              endIcon={
                <InfoDivCircle
                  style={{
                    color: activeCategory == index ? "#FF9A17" : "#4B5945",
                  }}
                >
                  {objCategory.subcategories.length}
                </InfoDivCircle>
              }
            >
              {objCategory.name}
            </ButtonMenuCategoryCustomize>
          </ListItemMenuCustomize>
        ))}
      </ListMenu>

      <CategoryBoxMenuSlider />
    </CategoryInnerBoxMenuCustomize>
  );
};