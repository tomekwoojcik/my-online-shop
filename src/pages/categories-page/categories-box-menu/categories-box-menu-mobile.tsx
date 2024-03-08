import { FC } from "react";
import { CategoryBoxMenu } from "./categories-box-menu";
import {
  CategoryBoxMenuCustomize,
  LineCustomize,
  TypographyCategoryBoxMenuCustomize,
} from "./categories-box-menu.styled";

interface CategoryBoxMenuMobilePropsModel {
  activeCategory: number | null;
  handleButtonCategory: (arrIndex: number, endPath: string) => void;
}

export const CategoryBoxMenuMobile: FC<CategoryBoxMenuMobilePropsModel> = ({
  activeCategory,
  handleButtonCategory,
}) => {
  return (
    <CategoryBoxMenuCustomize>
      <TypographyCategoryBoxMenuCustomize variant="h3">
        Filtrowanie
      </TypographyCategoryBoxMenuCustomize>
      <LineCustomize />
      <CategoryBoxMenu activeCategory={activeCategory} handleButtonCategory={handleButtonCategory} />
    </CategoryBoxMenuCustomize>
  );
};
