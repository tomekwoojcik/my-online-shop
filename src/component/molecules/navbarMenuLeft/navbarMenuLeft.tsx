import { FC, useContext } from "react";
import MenuOutlinedIcon from "@mui/icons-material/MenuOutlined";
import { IconButton } from "@mui/material";
import { BoxCustomize } from "./navbarMenuLeftCustomize";
import SearchIcon from "../../atom/search-Icon/search-icon";

import TextFieldNavbar from "../../atom/textFieldNavbar/textFieldNavbar";
import { NavbarMenuContext } from "../../../context/navbarMenuContext";
const NavbarMenuLeft: FC = () => {
  const { state, handleMenuBurger } = useContext(NavbarMenuContext);
  return (
    <BoxCustomize>
      <IconButton onClick={()=> handleMenuBurger()} aria-label="cart">
          <MenuOutlinedIcon />
      </IconButton>
      {state.navbarSearchButtonToggle ?  <SearchIcon /> : <TextFieldNavbar/> }
    </BoxCustomize>
  );
};

export default NavbarMenuLeft;
