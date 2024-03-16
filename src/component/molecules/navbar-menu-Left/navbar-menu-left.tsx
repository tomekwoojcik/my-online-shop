import { FC } from "react";
import MenuOutlinedIcon from "@mui/icons-material/MenuOutlined";
import { IconButton } from "@mui/material";
import { NavbarBoxCustomize } from "./navbar-menu-left.styled";
import SearchIcon from "../../atom/search-Icon/search-icon";

import TextFieldNavbar from "../../atom/text-field-navbar/text-field-navbar";

interface NavbarMenuLeftPropsModel {
  state: {
    navbarSearchButtonToggle: boolean;
    activeStep: number;
    burgerToggle: boolean;
  };
  handleMenuBurger: VoidFunction;
  updateSearchButtonState: (value: boolean) => void;
}

const NavbarMenuLeft: FC<NavbarMenuLeftPropsModel> = ({
  state,
  handleMenuBurger,
  updateSearchButtonState
}) => {
  return (
    <NavbarBoxCustomize>
      <IconButton onClick={() => handleMenuBurger()} aria-label="cart">
        <MenuOutlinedIcon />
      </IconButton>
      {state.navbarSearchButtonToggle ? <SearchIcon updateSearchButtonState={updateSearchButtonState} /> : <TextFieldNavbar updateSearchButtonState={updateSearchButtonState} />}
    </NavbarBoxCustomize>
  );
};

export default NavbarMenuLeft;
