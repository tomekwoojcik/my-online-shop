import { Box } from "@mui/material";
import { FC, useContext } from "react";
import PopupsMenu from "../../organism/popups-menu/popups-menu";
import { NavbarMenuContext } from "../../../context/navbar-menu-context";

const MenuWrapper: FC = () => {
    const {categories} = useContext(NavbarMenuContext)
    return (
        <Box>
            <PopupsMenu categoriesArr={categories}/>
      </Box>
  );
};

export default MenuWrapper;
