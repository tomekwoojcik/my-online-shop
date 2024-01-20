import { Box } from "@mui/material";
import { FC, useContext } from "react";
import PopupsMenu from "../../organism/popupsMenu/popupsMenu";
import { NavbarMenuContext } from "../../../context/navbarMenuContext";

const MenuWrapper: FC = () => {
    const {categories} = useContext(NavbarMenuContext)
    return (
        <Box>
            <PopupsMenu objArr={categories}/>
      </Box>
  );
};

export default MenuWrapper;
