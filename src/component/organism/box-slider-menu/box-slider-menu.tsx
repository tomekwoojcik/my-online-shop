import { FC } from "react";
import TextCarousel from "../text-carousel/text-carousel";
import MenuWrapper from "../../molecules/menu-wrapper/menu-wrapper";
import { CategoriesModel } from "../../../api/api-get-categories";
import { initState } from "../../../reducer/navbar-reducer";

interface PropsModel {
  categories: CategoriesModel[];
  breakpointView: boolean;
  state: typeof initState;
}

const BoxSliderMenu: FC<PropsModel> = ({
  categories,
  breakpointView,
  state,
}) => {
  return (
    <>
      {breakpointView ? (
        <TextCarousel />
      ) : state.burgerToggle ? (
        <TextCarousel />
      ) : (
        <MenuWrapper categories={categories} />
      )}
    </>
  );
};

export default BoxSliderMenu;
