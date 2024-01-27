import { FC, useContext } from "react";
import PersonOutlinedIcon from "@mui/icons-material/PersonOutlined";
import FavoriteBorderOutlinedIcon from "@mui/icons-material/FavoriteBorderOutlined";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import { IconButton } from "@mui/material";
import { CustomizeBadge, BoxCustomize } from "./navbar-menu-right-customize";
import SearchIcon from "../../atom/search-Icon/search-icon";
import { NavbarMenuContext } from "../../../context/navbar-menu-context";
import TextFieldNavbar from "../../atom/text-field-navbar/text-field-navbar";
interface propsModel {
  matches: boolean;
}

const NavbarMenuRight: FC<propsModel> = ({ matches }) => {
  const { state } = useContext(NavbarMenuContext);
  return (
    <BoxCustomize sx={{ display: { xs: "flex" } }}>
      {matches ? (
        state.navbarSearchButtonToggle ? <SearchIcon/> : <TextFieldNavbar/>
      ): null}
      <IconButton aria-label="cart">
        <PersonOutlinedIcon />
      </IconButton>
      <IconButton aria-label="cart">
        <CustomizeBadge badgeContent={1} color="secondary">
          <FavoriteBorderOutlinedIcon />
        </CustomizeBadge>
      </IconButton>
      <IconButton aria-label="cart">
        <CustomizeBadge badgeContent={1} color="secondary">
          <ShoppingCartOutlinedIcon />
        </CustomizeBadge>
      </IconButton>
    </BoxCustomize>
  );
};

export default NavbarMenuRight;
