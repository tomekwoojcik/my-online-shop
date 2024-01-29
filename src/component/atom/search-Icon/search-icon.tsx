import { IconButton } from "@mui/material";
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";
import { FC, useContext } from "react";
import { NavbarMenuContext } from "../../../context/navbar-menu-context";

const SearchIcon: FC = () => {
  const { updateMenuButtonState } = useContext(NavbarMenuContext);
  return (
    <IconButton
      aria-label="cart"
      onClick={() => {
        updateMenuButtonState(false);
      }}
    >
      <SearchOutlinedIcon />
    </IconButton>
  );
};

export default SearchIcon;
