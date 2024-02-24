import { FC } from "react";
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";
import ArrowBackIosNewOutlinedIcon from "@mui/icons-material/ArrowBackIosNewOutlined";
import { FormBoxCustomize, IconButtonCustomize, TextFieldCustomize } from "./text-field-navbar.styled";
interface TextFieldNavbarProps {
  updateSearchButtonState: VoidFunction;
}

const TextFieldNavbar: FC<TextFieldNavbarProps> = ({updateSearchButtonState}) => {
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
      <IconButtonCustomize onClick={()=>updateSearchButtonState()} color="secondary" variant="outlined">
        <ArrowBackIosNewOutlinedIcon />
      </IconButtonCustomize>
    </FormBoxCustomize>
  );
};

export default TextFieldNavbar;
