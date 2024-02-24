import { FC } from "react";
import MenuOutlinedIcon from "@mui/icons-material/MenuOutlined";
import { IconButton } from "@mui/material";
import { NavbarBoxCustomize } from "./navbar-menu-left.styled";
import SearchIcon from "../../atom/search-Icon/search-icon";

import TextFieldNavbar from "../../atom/text-field-navbar/text-field-navbar";
import { initState } from "../../../reducer/navbar-reducer";

interface NavbarMenuLeftProps {
  updateBurgerButton: VoidFunction;
  updateSearchButtonState: VoidFunction;
  state: typeof initState;
}

const NavbarMenuLeft: FC<NavbarMenuLeftProps> = ({
  updateBurgerButton,
  updateSearchButtonState,
  state,
}) => {
  return (
    <NavbarBoxCustomize>
      <IconButton onClick={updateBurgerButton} aria-label="cart">
        <MenuOutlinedIcon />
      </IconButton>
      {state.searchButtonToggle ? (
        <SearchIcon
          updateSearchButtonState={updateSearchButtonState}
        />
      ) : (
        <TextFieldNavbar
            updateSearchButtonState={updateSearchButtonState}
        />
      )}
    </NavbarBoxCustomize>
  );
};

export default NavbarMenuLeft;
