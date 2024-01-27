import { FC, useContext } from "react";
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";
import ArrowBackIosNewOutlinedIcon from "@mui/icons-material/ArrowBackIosNewOutlined";
import { BoxCustomize, ButtonCustomize, TextFieldCustomize } from "./text-field-navbar-customize";
import { NavbarMenuContext } from "../../../context/navbar-menu-context";
const TextFieldNavbar: FC = () => {
    const {toggleSearchButton} = useContext(NavbarMenuContext);
  return (
    <BoxCustomize component="form">
      <TextFieldCustomize
        id="outlined-basic"
        label="Szukaj..."
              variant="outlined"
              size="small"
              color="secondary"
      />
      <ButtonCustomize color="secondary" variant="outlined">
        <SearchOutlinedIcon />
      </ButtonCustomize>
      <ButtonCustomize onClick={()=>toggleSearchButton(true)} color="secondary" variant="outlined">
        <ArrowBackIosNewOutlinedIcon />
      </ButtonCustomize>
    </BoxCustomize>
  );
};

export default TextFieldNavbar;
