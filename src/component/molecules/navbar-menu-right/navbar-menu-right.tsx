import { FC, useContext } from "react";
import PersonOutlinedIcon from "@mui/icons-material/PersonOutlined";
import FavoriteBorderOutlinedIcon from "@mui/icons-material/FavoriteBorderOutlined";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import { IconButton } from "@mui/material";
import { BadgeCustomize, NavBarBoxCustomize } from "./navbar-menu-right.styled";
import SearchIcon from "../../atom/search-Icon/search-icon";
import { NavbarMenuContext } from "../../../context/navbar-menu-context";
import TextFieldNavbar from "../../atom/text-field-navbar/text-field-navbar";
interface PropsModel {
  mediaQueryMatches: boolean;
}

const NavbarMenuRight: FC<PropsModel> = ({ mediaQueryMatches }) => {
  const { state } = useContext(NavbarMenuContext);
  return (
    <NavBarBoxCustomize sx={{ display: { xs: "flex" } }}>
      {mediaQueryMatches ? (
        state.navbarSearchButtonToggle ? <SearchIcon/> : <TextFieldNavbar/>
      ): null}
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
