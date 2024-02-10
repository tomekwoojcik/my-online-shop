import { FC } from "react";
import { Navbar } from "../../organism/navbar/navbar";
import { NavbarMenuProvider } from "../../../context/navbar-menu-context";
import BoxSliderMenu from "../../organism/box-slider-menu/box-slider-menu";
import { FooterProvider } from "../../../context/footer-context";
import Footer from "../../organism/footer/footer";
import { ThemeProvider } from "@mui/material";
import { theme } from "../../../context/theme-context";
import { Outlet, useLoaderData } from "react-router";
import { CategoriesModel } from "../../../api/api-get-categories";



export const MainPage: FC = () => {

  const category  = useLoaderData() as CategoriesModel[];

  return (
    <ThemeProvider theme={theme}>
      <NavbarMenuProvider>
        <Navbar categories={category} />
        <BoxSliderMenu categories={category} />
      </NavbarMenuProvider>
      <Outlet />
      <FooterProvider>
        <Footer categories={category} />
      </FooterProvider>
    </ThemeProvider>
  );
};
