import { FC, useContext } from "react";
import NavbarMenuLeft from "../../molecules/navbar-menu-Left/navbar-menu-left";
import NavbarMenuRight from "../../molecules/navbar-menu-right/navbar-menu-right";
import NavbarLogo from "../../atom/navbar-logo/navbar-logo";
import PopupsMenu from "../popups-menu/popups-menu";
import { AppBarCustomize } from "./navbar.styled";
import { NavbarMenuContext } from "../../../context/navbar-menu-context";
import { CategoriesModel } from "../../../api/api-get-categories";


interface PropsModel{
  categories: CategoriesModel[];
}

export const Navbar: FC<PropsModel> = ({ categories }) => {
  const { mediaQueryMatches } = useContext(NavbarMenuContext);
  return (
    <AppBarCustomize position="static">
      {mediaQueryMatches ? <PopupsMenu categories={categories} /> : <NavbarMenuLeft/>  }
      {mediaQueryMatches ? <NavbarLogo /> : null}
      <NavbarMenuRight mediaQueryMatches={mediaQueryMatches} />
    </AppBarCustomize>
  );
};
