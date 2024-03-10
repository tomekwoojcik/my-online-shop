import { IconButton } from "@mui/material";
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";
import { FC } from "react";

interface SearchIconPropsModel {
  updateSearchButtonState: (value: boolean) => void;
}

const SearchIcon: FC<SearchIconPropsModel> = ({ updateSearchButtonState }) => {
  return (
    <IconButton
      aria-label="cart"
      onClick={() => {
        updateSearchButtonState(false);
      }}
    >
      <SearchOutlinedIcon />
    </IconButton>
  );
};

export default SearchIcon;
