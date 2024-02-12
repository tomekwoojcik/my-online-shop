import { FC } from "react";
import { Navbar } from "../../organism/navbar/navbar";
import { NavbarMenuProvider } from "../../../context/navbar-menu-context";
import BoxSliderMenu from "../../organism/box-slider-menu/box-slider-menu";
import { FooterProvider } from "../../../context/footer-context";
import Footer from "../../organism/footer/footer";
import MainPageTemplate from "../../template/main-page";

export const MainPage: FC = () => {
  return (
    <>
      <NavbarMenuProvider>
        <Navbar />
        <BoxSliderMenu />
      </NavbarMenuProvider>
      <MainPageTemplate/>
      <FooterProvider>
        <Footer />
      </FooterProvider>
    </>
  );
};
