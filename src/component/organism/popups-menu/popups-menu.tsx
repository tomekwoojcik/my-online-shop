import { FC } from "react";
import PopupMenu from "../../molecules/popup-menu/popup-menu";
import { PopupBoxCustomize } from "./popups-menu.styled";
import { CategoriesModel } from "../../../api/api-get-categories";
import { aboutUsArr } from "../../../state/state";

interface PopupsMenuPropsModel{
  categories: CategoriesModel[];
}

const PopupsMenu: FC<PopupsMenuPropsModel> = ({categories}) => {
  
  if (!categories) {
    return <div>{"Loading..."}</div>;
  }
  return (
    <PopupBoxCustomize>
      <PopupMenu categoriesObj={categories} categoryName="Kategorie" />
      <PopupMenu categoriesObj={aboutUsArr} categoryName="O nas" />
    </PopupBoxCustomize>
  );
};

export default PopupsMenu;
