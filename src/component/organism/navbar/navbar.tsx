import { useContext } from "react";
import NavbarMenuLeft from "../../molecules/navbar-menu-Left/navbar-menu-left";
import NavbarMenuRight from "../../molecules/navbar-menu-right/navbar-menu-right";
import NavbarLogo from "../../atom/navbar-logo/navbar-logo";
import PopupsMenu from "../popups-menu/popups-menu";
import { AppBarCustomize } from "./navbar-customize";
import { NavbarMenuContext } from "../../../context/navbar-menu-context";

export const Navbar = () => {
  const { matches, categories } = useContext(NavbarMenuContext);
  return (
    <AppBarCustomize position="static">
      {matches ? <PopupsMenu objArr={categories} /> : <NavbarMenuLeft />  }
      {matches ? <NavbarLogo /> : null}
      <NavbarMenuRight matches={matches} />
    </AppBarCustomize>
  );
};
