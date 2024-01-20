import { FC } from "react";
import { Navbar } from "../../organism/navbar/navbar";
import { NavbarMenuProvider } from "../../../context/navbarMenuContext";
import BoxSliderMenu from "../../organism/boxSliderMenu/boxSliderMenu";

export const MainPage: FC = () => {
  return (
    <>
      <NavbarMenuProvider>
        <Navbar />
        <BoxSliderMenu/>
      </NavbarMenuProvider>
    </>
  );
};
