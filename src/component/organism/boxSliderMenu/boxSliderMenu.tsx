import { FC, useContext } from "react";
import TextCarousel from "../textCarousel/textCarousel";
import MenuWrapper from "../../molecules/menuWrapper/menuWrapper";
import { NavbarMenuContext } from "../../../context/navbarMenuContext";

const BoxSliderMenu: FC = () => {
    const { state, matches } = useContext(NavbarMenuContext);
  return (
    <>
          {matches ? <TextCarousel /> : state.burgerToggle ? <MenuWrapper /> : <TextCarousel /> }
    </>
  );
};

export default BoxSliderMenu;
