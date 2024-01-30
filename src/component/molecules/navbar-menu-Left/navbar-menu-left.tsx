import { FC, useContext } from "react";
import MenuOutlinedIcon from "@mui/icons-material/MenuOutlined";
import { IconButton } from "@mui/material";
import { NavbarBoxCustomize } from "./navbar-menu-left.styled";
import SearchIcon from "../../atom/search-Icon/search-icon";

import TextFieldNavbar from "../../atom/text-field-navbar/text-field-navbar";
import { NavbarMenuContext } from "../../../context/navbar-menu-context";
const NavbarMenuLeft: FC = () => {
  const { state, handleMenuBurger } = useContext(NavbarMenuContext);
  return (
    <NavbarBoxCustomize>
      <IconButton onClick={()=> handleMenuBurger()} aria-label="cart">
          <MenuOutlinedIcon />
      </IconButton>
      {state.navbarSearchButtonToggle ?  <SearchIcon /> : <TextFieldNavbar/> }
    </NavbarBoxCustomize>
  );
};

export default NavbarMenuLeft;