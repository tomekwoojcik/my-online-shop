import { FC } from "react";
import { Navbar } from "../../organism/navbar/navbar";
import { NavbarMenuProvider } from "../../../context/navbarMenuContext";
import BoxSliderMenu from "../../organism/boxSliderMenu/boxSliderMenu";
import Footer from "../../organism/footer/footer";
import { FooterProvider } from "../../../context/footerContext";

export const MainPage: FC = () => {
  return (
    <>
      <NavbarMenuProvider>
        <Navbar />
        <BoxSliderMenu />
      </NavbarMenuProvider>
      <FooterProvider>
        <Footer />
      </FooterProvider>
    </>
  );
};
