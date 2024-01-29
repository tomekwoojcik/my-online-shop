import { FC, Fragment } from "react";
import PopupState, { bindTrigger, bindMenu } from "material-ui-popup-state";
import { Menu } from "@mui/material";
import { CategoriesModel } from "../../../api/api-get-categories";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import {
  ButtonCustomize, MenuItemCustomize
} from "./popup-menu.styled";
interface PropsModel {
  obj: CategoriesModel;
}

const PopupMenu: FC<PropsModel> = ({ obj }) => {
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
