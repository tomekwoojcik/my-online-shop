import { FC } from "react";
import { CategoriesModel } from "../../../api/api-get-categories";
import PopupMenu from "../../molecules/popup-menu/popup-menu";
import { BoxCustomize } from "./popups-menu-customize";

interface propsModel {
  objArr?: CategoriesModel[];
}
const PopupsMenu: FC<propsModel> = ({ objArr }) => {
  if (!objArr) {
    return <div>{"Loading..."}</div>;
  }
  const [obj] = objArr;

  return (
    <BoxCustomize>
      {obj.subcategories.map((obj: CategoriesModel) => {
        return (
            <PopupMenu key={obj.uid} obj={obj} />
        );
      })}
    </BoxCustomize>
  );
};

export default PopupsMenu;
