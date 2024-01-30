import { FC } from "react";
import { CategoriesModel } from "../../../api/apiGetCategories";
import PopupMenu from "../../molecules/popupMenu/popupMenu";
import { BoxCustomize } from "./popupsMenuCustomize";

interface propsModel {
  objArr?: CategoriesModel[];
}
const PopupsMenu: FC<propsModel> = ({ objArr }) => {
  if (!objArr) {
    return <div>{"Loading..."}</div>;
  }
  const [obj] : CategoriesModel[] = objArr;

  console.log(objArr)
  return (
    <BoxCustomize>
      {obj.subcategories.map((obj: CategoriesModel, inx:number) => {
        return (
            <PopupMenu key={inx} obj={obj} />
        );
      })}
    </BoxCustomize>
  );
};

export default PopupsMenu;
