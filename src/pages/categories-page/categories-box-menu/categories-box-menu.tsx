import { useContext } from "react";
import { CategoriesModel } from "../../../api/api-get-categories";
import CategoryBoxMenuHeader from "../categories-box-menu-header/categories-box-menu-header";
import CategoryBoxMenuSlider from "../categories-box-menu-slider/categories-box-menu-slider";
import { CategoryShopContext } from "../categories-shop-context";
import {
  CategoryInnerBoxMenuCustomize,
  ListMenu,
  ListItemMenuCustomize,
  ButtonMenuCategoryCustomize,
  InfoDivCircle,
} from "./categories-box-menu.styled";
import { useLoaderData } from "react-router-dom";

export const CategoryBoxMenu = () => {
  const { handleButtonCategory, activeCategory } =
    useContext(CategoryShopContext);
  const loadCategories = useLoaderData() as CategoriesModel[];
  return (
    <CategoryInnerBoxMenuCustomize>
      <CategoryBoxMenuHeader textHeader="Kategorie" />
      <ListMenu>
        {loadCategories.map((objCategory: CategoriesModel, index: number) => (
          <ListItemMenuCustomize
            onClick={() => handleButtonCategory(index, objCategory.name)}
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
