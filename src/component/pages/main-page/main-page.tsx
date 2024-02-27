import { FC } from "react";
import { Navbar } from "../../organism/navbar/navbar";
import { NavbarMenuProvider } from "../../../context/navbar-menu-context";
import BoxSliderMenu from "../../organism/box-slider-menu/box-slider-menu";
import { FooterProvider } from "../../../context/footer-context";
import Footer from "../../organism/footer/footer";
import { Grid, ThemeProvider } from "@mui/material";
import { theme } from "../../../context/theme-context";
import { Outlet, useLoaderData } from "react-router";
import { CategoriesModel } from "../../../api/api-get-categories";
import HomePageSlides from "../../../pages/home-page-slides/home-page-slides";

export const MainPage: FC = () => {
  const category = useLoaderData() as CategoriesModel[];

  return (
    <ThemeProvider theme={theme}>
      <Grid className="container" container>
        <Grid item>
          <NavbarMenuProvider>
            <Navbar categories={category} />
            <BoxSliderMenu categories={category} />
          </NavbarMenuProvider>
        </Grid>
        <Grid item>
            <HomePageSlides />
          <Outlet />
        </Grid>
        <Grid className="footer" item>
          <FooterProvider>
            <Footer categories={category} />
          </FooterProvider>
        </Grid>
      </Grid>
    </ThemeProvider>
  );
};
