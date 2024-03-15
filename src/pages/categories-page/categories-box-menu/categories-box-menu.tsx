import { FC } from "react";
import { CategoriesModel } from "../../../api/api-get-categories";
import CategoryBoxMenuHeader from "../categories-box-menu-header/categories-box-menu-header";
import CategoryBoxMenuSlider from "../categories-box-menu-slider/categories-box-menu-slider";
import {
  CategoryInnerBoxMenuCustomize,
  ListMenu,
  ListItemMenuCustomize,
  ButtonMenuCategoryCustomize,
  InfoDivCircle,
} from "./categories-box-menu.styled";
import { useLoaderData } from "react-router-dom";

interface CategoryBoxMenuPropsModel {
  activeCategory: number | null;
  handleButtonCategory: (arrIndex: number, endPath: string) => void;
}

export const CategoryBoxMenu: FC<CategoryBoxMenuPropsModel> = ({
  activeCategory,
  handleButtonCategory,
}) => {
  const currentPath:string = window.location.pathname
  const endPartPath:string = currentPath.slice(12, currentPath.length);
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
                color: activeCategory == index || endPartPath == objCategory.name.toLowerCase() ? "#FF9A17" : "#4B5945",
              }}
              endIcon={
                <InfoDivCircle
                  style={{
                    color: activeCategory == index || endPartPath == objCategory.name.toLowerCase() ? "#FF9A17" : "#4B5945",
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
