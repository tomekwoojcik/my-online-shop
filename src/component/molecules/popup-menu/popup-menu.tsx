import { FC, Fragment } from "react";
import PopupState, { bindTrigger, bindMenu } from "material-ui-popup-state";
import { Menu } from "@mui/material";
import { CategoriesModel } from "../../../api/api-get-categories";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import { PopupButtonCustomize, MenuItemCustomize } from "./popup-menu.styled";
import { useNavigate } from "react-router-dom";
interface PopupMenuPropsModel {
  categoryName: string;
  categoriesObj: CategoriesModel[];
}

const PopupMenu: FC<PopupMenuPropsModel> = ({
  categoryName,
  categoriesObj,
}) => {
  const nav = useNavigate();
  const handleNavigation = (categoryName: string): void => {
    if (categoryName != "o nas") {
      const pathUrl: string = `/categories/${categoryName}`;
      console.log(pathUrl);
      nav(pathUrl);
    }
    // nav(`/${categoryName}`);
  };

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
              <MenuItemCustomize
                key={obj.uid}
                onClick={() => {
                  popupState.close;
                  handleNavigation(obj.name.toLowerCase());
                }}
              >
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
