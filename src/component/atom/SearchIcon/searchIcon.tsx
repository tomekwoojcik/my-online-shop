import { IconButton } from "@mui/material";
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";
import { FC, useContext } from "react";
import { NavbarMenuContext } from "../../../context/navbarMenuContext";

const SearchIcon: FC = () => {
  const { toggleSearchButton } = useContext(NavbarMenuContext);
  return (
    <IconButton
      aria-label="cart"
      onClick={() => {
        toggleSearchButton(false);
      }}
    >
      <SearchOutlinedIcon />
    </IconButton>
  );
};

export default SearchIcon;
