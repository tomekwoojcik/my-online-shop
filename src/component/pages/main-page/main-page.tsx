import { FC } from "react";
import { Navbar } from "../../organism/navbar/navbar";
import { NavbarMenuProvider } from "../../../context/navbar-menu-context";
import BoxSliderMenu from "../../organism/box-slider-menu/box-slider-menu";

export const MainPage: FC = () => {
  return (
      <NavbarMenuProvider>
        <Navbar />
        <BoxSliderMenu/>
      </NavbarMenuProvider>
  );
};
