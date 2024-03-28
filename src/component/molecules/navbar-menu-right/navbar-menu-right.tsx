import { FC } from "react";
import PersonOutlinedIcon from "@mui/icons-material/PersonOutlined";
import FavoriteBorderOutlinedIcon from "@mui/icons-material/FavoriteBorderOutlined";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import { IconButton, useMediaQuery } from "@mui/material";
import { BadgeCustomize, NavBarBoxCustomize } from "./navbar-menu-right.styled";
import SearchIcon from "../../atom/search-Icon/search-icon";
import TextFieldNavbar from "../../atom/text-field-navbar/text-field-navbar";
import { breakpointViewSize } from "../../../state/state";

interface NavbarMenuRightPropsModel {
  state: {
    navbarSearchButtonToggle: boolean;
    activeStep: number;
    burgerToggle: boolean;
    cartToggle: boolean
  };
    updateSearchButtonState: (value: boolean) => void;
  updateCartButtonState: (value: boolean) => void;
}

const NavbarMenuRight: FC<NavbarMenuRightPropsModel> = ({ state, updateSearchButtonState, updateCartButtonState}) => {
  return (
    <NavBarBoxCustomize sx={{ display: { xs: "flex" } }}>
      {useMediaQuery(breakpointViewSize) ? (
        state.navbarSearchButtonToggle ? (
          <SearchIcon updateSearchButtonState={updateSearchButtonState} />
        ) : (
          <TextFieldNavbar updateSearchButtonState={updateSearchButtonState} />
        )
      ) : null}
      <IconButton aria-label="cart">
        <PersonOutlinedIcon />
      </IconButton>
      <IconButton aria-label="cart">
        <BadgeCustomize badgeContent={1} color="secondary">
          <FavoriteBorderOutlinedIcon />
        </BadgeCustomize>
      </IconButton>
      <IconButton onClick={()=>updateCartButtonState(!state.cartToggle)} aria-label="cart">
        <BadgeCustomize badgeContent={1} color="secondary">
          <ShoppingCartOutlinedIcon />
        </BadgeCustomize>
      </IconButton>
    </NavBarBoxCustomize>
  );
};

export default NavbarMenuRight;
