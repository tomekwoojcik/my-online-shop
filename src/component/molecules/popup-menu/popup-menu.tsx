import { FC, Fragment } from "react";
import PopupState, { bindTrigger, bindMenu } from "material-ui-popup-state";
import { Menu } from "@mui/material";
import { CategoriesModel } from "../../../api/api-get-categories";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import {
  PopupButtonCustomize, MenuItemCustomize
} from "./popup-menu.styled";
interface PropsModel {
  categoriesObj: CategoriesModel;
}

const PopupMenu: FC<PropsModel> = ({ categoriesObj }) => {
  return (
    <PopupState variant="popover">
      {(popupState) => (
        <Fragment key={categoriesObj.uid}>
          <PopupButtonCustomize
            endIcon={<ArrowDropDownIcon />}
            variant="text"
            
            {...bindTrigger(popupState)}
          >
            {categoriesObj.name}
          </PopupButtonCustomize>
          <Menu {...bindMenu(popupState)}>
            {categoriesObj.subcategories.map((obj: CategoriesModel) => (
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
