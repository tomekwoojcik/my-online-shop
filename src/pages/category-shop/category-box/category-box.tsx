import { breakpointViewState } from "../../../state/state";
import { CategoryBoxMenu } from "../category-box-menu/category-box-menu";
import { CategoryDialog } from "../category-box-menu/category-box-menu-dialog";
import { useMediaQuery } from "@mui/material";

const CategoryBox = () => {
  const breakpointView: boolean = useMediaQuery(breakpointViewState);

  return breakpointView ? <CategoryBoxMenu /> : <CategoryDialog />;
};

export default CategoryBox;
