import { FC } from "react";
import { CategoriesModel } from "../../../api/api-get-categories";
import PopupMenu from "../../molecules/popup-menu/popup-menu";
import { PopupBoxCustomize } from "./popups-menu.styled";

interface PropsModel {
  categoriesArr?: CategoriesModel[];
}
const PopupsMenu: FC<PropsModel> = ({ categoriesArr }) => {
  if (!categoriesArr) {
    return <div>{"Loading..."}</div>;
  }
  const [categories] = categoriesArr;

  return (
    <PopupBoxCustomize>
      {categories.subcategories.map((categoriesObj: CategoriesModel) => {
        return (
            <PopupMenu key={categoriesObj.uid} categoriesObj={categoriesObj} />
        );
      })}
    </PopupBoxCustomize>
  );
};

export default PopupsMenu;
