import { FC, Fragment } from "react";
import PopupState, { bindTrigger, bindMenu } from "material-ui-popup-state";
import { Menu } from "@mui/material";
import { CategoriesModel } from "../../../api/apiGetCategories";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import {
  ButtonCustomize, MenuItemCustomize
} from "./popupMenuCustomize";
interface propsModel {
  obj: CategoriesModel;
}

const PopupMenu: FC<propsModel> = ({ obj }) => {
  return (
    <PopupState variant="popover">
      {(popupState) => (
        <Fragment key={obj.uid}>
          <ButtonCustomize
            endIcon={<ArrowDropDownIcon />}
            variant="text"
            
            {...bindTrigger(popupState)}
          >
            {obj.name}
          </ButtonCustomize>
          <Menu {...bindMenu(popupState)}>
            {obj.subcategories.map((obj: CategoriesModel) => (
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
