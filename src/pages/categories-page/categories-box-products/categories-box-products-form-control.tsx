import { FormControl, InputLabel, Select, MenuItem } from "@mui/material";
import { Dispatch, FC } from "react";

interface CategoriesBoxProductsFormControlPropsModel {
  numberOfProductsOnThePage: number;
  setNumberOfProductsOnThePage: Dispatch<React.SetStateAction<number>>;
}
interface ProductsArrLengthPropsModel {
  value: number;
  headerItem: string;
}

const CategoriesBoxProductsFormControl: FC<
  CategoriesBoxProductsFormControlPropsModel
> = ({ numberOfProductsOnThePage, setNumberOfProductsOnThePage }) => {
  const productsArrLength: ProductsArrLengthPropsModel[] = [
    { value: 4, headerItem: "Cztery" },
    { value: 6, headerItem: "Sześć" },
    { value: 8, headerItem: "Osiem" },
    { value: 10, headerItem: "Dziesięć" },
  ];

  return (
    <FormControl>
      <InputLabel id="demo-simple-select-label">Ilość</InputLabel>
      <Select
        labelId="demo-simple-select-label"
        id="demo-simple-select"
        value={numberOfProductsOnThePage}
        label="Ilość produktów na stronie"
      >
        {productsArrLength.map(
          (obj: ProductsArrLengthPropsModel, idx: number) => (
            <MenuItem
              key={idx}
              onClick={() => setNumberOfProductsOnThePage(obj.value)}
              value={obj.value}
            >
              {obj.headerItem}
            </MenuItem>
          )
        )}
      </Select>
    </FormControl>
  );
};

export default CategoriesBoxProductsFormControl;
