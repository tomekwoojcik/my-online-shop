import { Box, Grid, styled } from "@mui/material";
import { CategoryBoxMenu } from "../category-box-menu/category-box-menu";
import CategoryHeader from "../category-header/category-header";

  const BoxStyled = styled(Box)`
    flex-grow: 1;
    background-color: #F2EFE9 !important;
  `;

const CategoryBox = () => {

  return (
    <BoxStyled>
      <Grid container>
        <Grid item xs={12}>
          <CategoryHeader />
        </Grid>
        <Grid item>
          <CategoryBoxMenu />
        </Grid>
      </Grid>
    </BoxStyled>
  );
};

export default CategoryBox;
