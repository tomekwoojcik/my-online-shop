import { FC, useState } from "react";
import {
  SelectHeaderModel,
  breakpointViewSize,
} from "../../../state/state";
import { Box, Grid, styled, useMediaQuery } from "@mui/material";
import { NavigateFunction, Outlet, useNavigate } from "react-router-dom";
import { CategoryBoxMenu } from "../../categories-page/categories-box-menu/categories-box-menu";
import { CategoryDialog } from "../categories-box-menu/categories-box-menu-dialog";
import CategoryHeaderSelect from "../../category-shop/category-header-select/category-header-select";
import CategoryHeader from "../../category-shop/category-header/category-header";

const BoxStyled = styled(Box)`
  flex-grow: 1;
  background-color: #f2efe9 !important;
`;

const CategoryBox: FC = () => {
  const [activeCategory, setActiveCategory] = useState<number | null>(null);
  const [value, setValue] = useState({
    value: "Sortowanie",
    labelText: "Sortowanie",
  });
  const handleChangeSelect = (valueObj: SelectHeaderModel) => {
    setValue(valueObj);
  };
  const nav: NavigateFunction = useNavigate();
  const handleButtonCategory = (arrIndex: number, endPath: string) => {
    setActiveCategory(arrIndex);
    nav(endPath.toLowerCase());
  };

  return (
    <BoxStyled>
      <Grid container>
        <Grid item xs={12}>
          <CategoryHeader />
        </Grid>
        <Grid
          item
          sx={{
            width: "100vw",
            padding: "20px",
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          {useMediaQuery(breakpointViewSize) ? null : (
            <Grid item>
              <CategoryDialog
                activeCategory={activeCategory}
                handleButtonCategory={handleButtonCategory}
              />
            </Grid>
          )}
          <Grid item>
            <CategoryHeaderSelect
              value={value}
              handleChangeSelect={handleChangeSelect}
            />
          </Grid>
        </Grid>
        <Grid
          item
          sx={{
            display: useMediaQuery(breakpointViewSize) ? "flex" : "null",
            flexDirection: "row",
          }}
        >
          {useMediaQuery(breakpointViewSize) ? (
            <CategoryBoxMenu
              activeCategory={activeCategory}
              handleButtonCategory={handleButtonCategory}
            />
          ) : null}
          <Outlet />
        </Grid>
      </Grid>
    </BoxStyled>
  );
};
export default CategoryBox;
