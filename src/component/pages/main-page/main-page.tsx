import { FC } from "react";
import { Navbar } from "../../organism/navbar/navbar";
import { NavbarMenuProvider } from "../../../context/navbar-menu-context";
import BoxSliderMenu from "../../organism/box-slider-menu/box-slider-menu";
import { FooterProvider } from "../../../context/footerContext";
import Footer from "../../organism/footer/footer";
import { ThemeProvider } from "@mui/material";
import { theme } from "../../../context/theme-context";

export const MainPage: FC = () => {
  return (
    <ThemeProvider theme={theme}>
      <NavbarMenuProvider>
        <Navbar />
        <BoxSliderMenu />
      </NavbarMenuProvider>
      <FooterProvider>
        <Footer />
      </FooterProvider>
    </ThemeProvider>
  );
};
