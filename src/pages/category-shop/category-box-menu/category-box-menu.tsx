import {
  ButtonMenuCategoryCustomize,
  CategoryBoxMenuCustomize,
  CategoryInnerBoxMenuCustomize,
  InfoDivCircle,
  LineCustomize,
  ListItemMenuCustomize,
  ListMenu,
  TypographyCategoryBoxMenuCustomize,
} from "./category-box-menu.styled";
import { CategoriesModel } from "../../../api/api-get-categories";
import CategoryBoxMenuHeader from "../category-box-menu-header/category-box-menu-header";
import CategoryBoxMenuSlider from "../category-box-menu-slider/category-box-menu-slider";
import { useContext } from "react";
import { CategoryShopContext } from "../category-shop-context";

const CategoryBoxMenu = () => {
  const { handleButtonCategory, activeCategory, arrCategory } =
    useContext(CategoryShopContext);
  return (
    <CategoryBoxMenuCustomize>
      <TypographyCategoryBoxMenuCustomize variant="h3">
        Filtrowanie
      </TypographyCategoryBoxMenuCustomize>
      <LineCustomize />
      <CategoryInnerBoxMenuCustomize>
        <CategoryBoxMenuHeader textHeader="Kategorie" />
        <ListMenu>
          {arrCategory.map((objCategory: CategoriesModel, index: number) => (
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
                      color: activeCategory == index  ? "#FF9A17" : "#4B5945",
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
    </CategoryBoxMenuCustomize>
  );
};

export default CategoryBoxMenu;
