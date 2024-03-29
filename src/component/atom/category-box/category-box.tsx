import { FC } from "react";
import { CategoriesModel } from "../../../api/api-get-categories";
import HeadingFooter from "../heading-footer/heading-footer";
import { BoxCustomize, ListCustomize, ButtonCustomize } from "./category-box-customize";

interface CategoriesBoxProps{
  categories: CategoriesModel[];
}

const CategoryBox: FC<CategoriesBoxProps> = ({categories}) => {

  if (!categories) {
    return <div> {"Loading..."}</div>;
  }
  return (
    <BoxCustomize>
      <HeadingFooter heading="Kategorie"/>
      <ListCustomize>
        {categories.map(
          (obj: CategoriesModel | undefined, idx: number) => (
            <ButtonCustomize key={idx} variant="text">
              {obj?.name}
            </ButtonCustomize>
          )
        )}
      </ListCustomize>
    </BoxCustomize>
  );
};

export default CategoryBox;
