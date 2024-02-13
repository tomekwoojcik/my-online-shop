import { FC, useContext } from "react";
import TextCarousel from "../text-carousel/text-carousel";
import MenuWrapper from "../../molecules/menu-wrapper/menu-wrapper";
import { NavbarMenuContext } from "../../../context/navbar-menu-context";
import { CategoriesModel } from "../../../api/api-get-categories";

interface PropsModel {
  categories: CategoriesModel[];
}

const BoxSliderMenu: FC<PropsModel> = ({categories}) => {
    const { state, breakpointView } = useContext(NavbarMenuContext);
  return (
    <>
          {breakpointView ? <TextCarousel /> : state.burgerToggle ? <MenuWrapper categories={categories} /> : <TextCarousel /> }
    </>
  );
};

export default BoxSliderMenu;
