import { FC } from "react";
import { Navbar } from "../../organism/navbar/navbar";
import BoxSliderMenu from "../../organism/box-slider-menu/box-slider-menu";
import Footer from "../../organism/footer/footer";
import { Grid, ThemeProvider } from "@mui/material";
import { theme } from "../../../context/theme-context";
import { Outlet, useLoaderData } from "react-router";
import { CategoriesModel } from "../../../api/api-get-categories";
import Slides from "../../../pages/home-page-slides/slides";
import { CartProvider } from "../../../context/cart-context";

export const MainPage: FC = () => {
  const category = useLoaderData() as CategoriesModel[];

  return (
    <ThemeProvider theme={theme}>
      <Grid className="container" container>
        <Grid item>
          <CartProvider>
            <Navbar categories={category} />
          </CartProvider>
          <BoxSliderMenu categories={category} />
        </Grid>
        <Grid item>
          <Slides />
          <Outlet />
        </Grid>
        <Grid className="footer" item>
          <Footer categories={category} />
        </Grid>
      </Grid>
    </ThemeProvider>
  );
};
