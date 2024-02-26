import { CategoryBoxMenu } from "./categories-box-menu";
import { CategoryBoxMenuCustomize, LineCustomize, TypographyCategoryBoxMenuCustomize } from "./categories-box-menu.styled";

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
