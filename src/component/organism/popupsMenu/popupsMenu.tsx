import { FC } from "react";
import { categoriesModel } from "../../../api/apiGetCategories";
import PopupMenu from "../../molecules/popupMenu/popupMenu";
import { BoxCustomize } from "./popupsMenuCustomize";

interface propsModel {
  objArr?: categoriesModel[];
}
const PopupsMenu: FC<propsModel> = ({ objArr }) => {
  if (!objArr) {
    return <div>{"Loading..."}</div>;
  }
  const [obj] = objArr;

  return (
    <BoxCustomize>
      {obj.subcategories.map((obj: categoriesModel) => {
        return (
            <PopupMenu key={obj.uid} obj={obj} />
        );
      })}
    </BoxCustomize>
  );
};

export default PopupsMenu;
