import { FC, useContext } from "react";
import PersonOutlinedIcon from "@mui/icons-material/PersonOutlined";
import FavoriteBorderOutlinedIcon from "@mui/icons-material/FavoriteBorderOutlined";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import { IconButton } from "@mui/material";
import { CustomizeBadge, BoxCustomize } from "./navbarMenuCustomize";
import SearchIcon from "../../atom/SearchIcon/searchIcon";
import { NavbarMenuContext } from "../../../context/navbarMenuContext";
import TextFieldNavbar from "../../atom/textFieldNavbar/textFieldNavbar";
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
