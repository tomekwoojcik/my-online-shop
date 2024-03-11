import { FormControl, InputLabel, Select, MenuItem } from "@mui/material";
import { FC } from "react";
import { SelectHeaderModel, selectValueHeader } from "../../../state/state";

interface CategoryHeaderSelectPropsModel {
  value: object;
  handleChangeSelect: (valueObj: SelectHeaderModel) => void;
}

const CategoryHeaderSelect: FC<CategoryHeaderSelectPropsModel> = ({
  value,
  handleChangeSelect,
}) => {
  return (
    <FormControl fullWidth>
      <InputLabel id="demo-simple-select-label">Sortowanie</InputLabel>
      <Select
        labelId="demo-simple-select-label"
        id="demo-simple-select"
        value={value}
        label="Sortowanie"
        style={{ width: "125px" }}
      >
        {selectValueHeader.map((obj: SelectHeaderModel, idx: number) => {
          return (
            <MenuItem onClick={()=> handleChangeSelect(obj)} value={obj.value} key={idx}>
              {obj.labelText}
            </MenuItem>
          );
        })}
      </Select>
    </FormControl>
  );
};

export default CategoryHeaderSelect;
