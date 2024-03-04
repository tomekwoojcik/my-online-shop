import { CategoryBoxMenu } from "./category-box-menu";
import { CategoryBoxMenuCustomize, LineCustomize, TypographyCategoryBoxMenuCustomize } from "./category-box-menu.styled";

export const CategoryBoxMenuMobile = () => {
  return (
    <CategoryBoxMenuCustomize>
      <TypographyCategoryBoxMenuCustomize variant="h3">
        Filtrowanie
      </TypographyCategoryBoxMenuCustomize>
      <LineCustomize />
      <CategoryBoxMenu />
    </CategoryBoxMenuCustomize>
  );
};
