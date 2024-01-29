import { useContext } from "react";
import NavbarMenuLeft from "../../molecules/navbar-menu-Left/navbar-menu-left";
import NavbarMenuRight from "../../molecules/navbar-menu-right/navbar-menu-right";
import NavbarLogo from "../../atom/navbar-logo/navbar-logo";
import PopupsMenu from "../popups-menu/popups-menu";
import { AppBarCustomize } from "./navbar.styled";
import { NavbarMenuContext } from "../../../context/navbar-menu-context";

export const Navbar = () => {
  const { mediaQueryMatches, categories } = useContext(NavbarMenuContext);
  console.log(categories);
  return (
    <AppBarCustomize position="static">
      {mediaQueryMatches ? <PopupsMenu /> : <NavbarMenuLeft />  }
      {mediaQueryMatches ? <NavbarLogo /> : null}
      <NavbarMenuRight mediaQueryMatches={mediaQueryMatches} />
    </AppBarCustomize>
  );
};
