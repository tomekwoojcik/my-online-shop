import { FC, useContext } from "react";
import { CategoriesModel } from "../../../api/apiGetCategories";
import { FooterContext } from "../../../context/footerContext";
import HeadingFooter from "../heading-footer/heading-footer";
import { BoxCustomize, ListCustomize, ButtonCustomize } from "./category-box-customize";

const CategoryBox: FC = () => {
  const { categories } = useContext(FooterContext);

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
