import { FC, useContext } from "react";
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";
import ArrowBackIosNewOutlinedIcon from "@mui/icons-material/ArrowBackIosNewOutlined";
import { FormBoxCustomize, IconButtonCustomize, TextFieldCustomize } from "./text-field-navbar.styled";
import { NavbarMenuContext } from "../../../context/navbar-menu-context";
const TextFieldNavbar: FC = () => {
    const {updateSearchButtonState} = useContext(NavbarMenuContext);
  return (
    <FormBoxCustomize component="form">
      <TextFieldCustomize
        id="outlined-basic"
        label="Szukaj..."
              variant="outlined"
              size="small"
              color="secondary"
      />
      <IconButtonCustomize color="secondary" variant="outlined">
        <SearchOutlinedIcon />
      </IconButtonCustomize>
      <IconButtonCustomize onClick={()=>updateSearchButtonState(true)} color="secondary" variant="outlined">
        <ArrowBackIosNewOutlinedIcon />
      </IconButtonCustomize>
    </FormBoxCustomize>
  );
};

export default TextFieldNavbar;
