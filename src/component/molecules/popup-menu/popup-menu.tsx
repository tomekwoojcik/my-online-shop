import { FC, Fragment } from "react";
import PopupState, { bindTrigger, bindMenu } from "material-ui-popup-state";
import { Menu } from "@mui/material";
import { CategoriesModel } from "../../../api/api-get-categories";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import {
  PopupButtonCustomize, MenuItemCustomize
} from "./popup-menu.styled";
interface PropsModel {
  categoryName: string;
  categoriesObj: CategoriesModel[];
}

const PopupMenu: FC<PropsModel> = ({ categoryName, categoriesObj }) => {
  return (
    <PopupState variant="popover">
      {(popupState) => (
        <Fragment>
          <PopupButtonCustomize
            endIcon={<ArrowDropDownIcon />}
            variant="text"
            
            {...bindTrigger(popupState)}
          >
            {categoryName}
          </PopupButtonCustomize>
          <Menu {...bindMenu(popupState)}>
            {categoriesObj.map((obj: CategoriesModel) => (
              <MenuItemCustomize key={obj.uid} onClick={popupState.close}>
                {obj.name}
              </MenuItemCustomize>
            ))}
          </Menu>
        </Fragment>
      )}
    </PopupState>
  );
};

export default PopupMenu;
