import { FC } from "react";
import PersonOutlinedIcon from "@mui/icons-material/PersonOutlined";
import FavoriteBorderOutlinedIcon from "@mui/icons-material/FavoriteBorderOutlined";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import { IconButton } from "@mui/material";
import { BadgeCustomize, NavBarBoxCustomize } from "./navbar-menu-right.styled";
import SearchIcon from "../../atom/search-Icon/search-icon";
import TextFieldNavbar from "../../atom/text-field-navbar/text-field-navbar";
import { initState } from "../../../reducer/navbar-reducer";
interface NavbarPropsModel {
  breakpointView: boolean;
  updateSearchButtonState: VoidFunction;
  state: typeof initState;
}

const NavbarMenuRight: FC<NavbarPropsModel> = ({
  breakpointView,
  updateSearchButtonState,
  state,
}) => {
  return (
    <NavBarBoxCustomize sx={{ display: { xs: "flex" } }}>
      {breakpointView ? (
        state.searchButtonToggle ? (
          <SearchIcon
            updateSearchButtonState={updateSearchButtonState}
          />
        ) : (
          <TextFieldNavbar
              updateSearchButtonState={updateSearchButtonState}
          />
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
      <IconButton aria-label="cart">
        <BadgeCustomize badgeContent={1} color="secondary">
          <ShoppingCartOutlinedIcon />
        </BadgeCustomize>
      </IconButton>
    </NavBarBoxCustomize>
  );
};

export default NavbarMenuRight;
