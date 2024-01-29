import { FC } from "react";
import { CategoriesModel } from "../../../api/api-get-categories";
import PopupMenu from "../../molecules/popup-menu/popup-menu";
import { BoxCustomize } from "./popups-menu-customize";

interface PropsModel {
  categoriesArr?: CategoriesModel[];
}
const PopupsMenu: FC<PropsModel> = ({ categoriesArr }) => {
  if (!categoriesArr) {
    return <div>{"Loading..."}</div>;
  }
  const [categories] = categoriesArr;

  return (
    <BoxCustomize>
      {categories.subcategories.map((categoriesObj: CategoriesModel) => {
        return (
            <PopupMenu key={categoriesObj.uid} obj={categoriesObj} />
        );
      })}
    </BoxCustomize>
  );
};

export default PopupsMenu;
