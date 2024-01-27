import { FC, useContext } from "react";
import TextCarousel from "../text-carousel/text-carousel";
import MenuWrapper from "../../molecules/menu-wrapper/menu-wrapper";
import { NavbarMenuContext } from "../../../context/navbar-menu-context";

const BoxSliderMenu: FC = () => {
    const { state, matches } = useContext(NavbarMenuContext);
  return (
    <>
          {matches ? <TextCarousel /> : state.burgerToggle ? <MenuWrapper /> : <TextCarousel /> }
    </>
  );
};

export default BoxSliderMenu;
