import { useContext } from "react";
import NavbarMenuLeft from "../../molecules/navbarMenuLeft/navbarMenuLeft";
import NavbarMenuRight from "../../molecules/navbarMenuRight/navbarMenuRight";
import NavbarLogo from "../../atom/navbar-logo/navbar-logo";
import PopupsMenu from "../popupsMenu/popupsMenu";
import { AppBarCustomize } from "./appBarStyledCustomize";
import { NavbarMenuContext } from "../../../context/navbarMenuContext";

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
