import { IconButton } from "@mui/material";
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";
import { FC } from "react";
interface SearchIconProps {
  updateSearchButtonState: VoidFunction,
}

const SearchIcon: FC<SearchIconProps> = ({updateSearchButtonState}) => {
     
  return (
    <IconButton
      aria-label="cart"
      onClick={()=>updateSearchButtonState()}
    >
      <SearchOutlinedIcon />
    </IconButton>
  );
};

export default SearchIcon;
