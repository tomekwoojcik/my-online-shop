import { Box, Grid, styled, useMediaQuery } from "@mui/material";
import { CategoryBoxMenu } from "../category-box-menu/category-box-menu";
import CategoryHeader from "../category-header/category-header";
import { CategoryDialog } from "../category-box-menu/category-box-menu-dialog";
import CategoryHeaderSelect from "../category-header-select/category-header-select";
import { useState } from "react";
import {
  SelectHeaderModel,
  breakpointViewSizeHeader,
} from "../../../state/state";
const BoxStyled = styled(Box)`
  flex-grow: 1;
  background-color: #f2efe9 !important;
`;

const CategoryBox = () => {
  const [value, setValue] = useState({ value: "Sortowanie", labelText: "Sortowanie" });
  const handleChangeSelect = (valueObj: SelectHeaderModel) => {
    setValue(valueObj);
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
            display: useMediaQuery(breakpointViewSizeHeader) ? "none" : "flex",
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center",
          }}
          display={{ md: "none" }}
        >
          <Grid item>
            <CategoryDialog />
          </Grid>
          <Grid item>
            <CategoryHeaderSelect
              value={value}
              handleChangeSelect={handleChangeSelect}
            />
          </Grid>
        </Grid>
        <Grid container style={{padding:"20px"}} display={{ md: "block" }}>
          <CategoryHeaderSelect
            value={value}
            handleChangeSelect={handleChangeSelect}
          />
        </Grid>
        <Grid item display={{ xs: "none", md: "block" }}>
          <CategoryBoxMenu />
        </Grid>
      </Grid>
    </BoxStyled>
  );
};

export default CategoryBox;
