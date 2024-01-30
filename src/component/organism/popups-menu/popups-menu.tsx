import { FC, useContext } from "react";
import PopupMenu from "../../molecules/popup-menu/popup-menu";
import { PopupBoxCustomize } from "./popups-menu.styled";
import { NavbarMenuContext } from "../../../context/navbar-menu-context";

const PopupsMenu: FC = () => {
  const {categories, aboutUsArr} = useContext(NavbarMenuContext)

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
