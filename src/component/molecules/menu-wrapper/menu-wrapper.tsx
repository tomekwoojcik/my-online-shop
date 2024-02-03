import { Box } from "@mui/material";
import { FC } from "react";
import PopupsMenu from "../../organism/popups-menu/popups-menu";
import { CategoriesModel } from "../../../api/api-get-categories";
interface PropsModel {
  categories: CategoriesModel[];
}
const MenuWrapper: FC<PropsModel> = ({categories}) => {
    return (
        <Box>
            <PopupsMenu categories={categories}/>
      </Box>
  );
};

export default MenuWrapper;
