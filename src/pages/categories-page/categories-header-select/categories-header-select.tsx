import { FormControl, InputLabel, Select, MenuItem } from "@mui/material";
import { FC } from "react";
import { SelectHeaderModel, selectValueHeader } from "../../../state/state";

interface CategoryHeaderSelectPropsModel {
  value: SelectHeaderModel;
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
        defaultValue=""
        value={value.labelText}
        label="Sortowanie"
        onChange={(event) => {
          const selectedValue = event.target.value as string;
          const selectedOption = selectValueHeader.find((option) => option.labelText === selectedValue);
          if (selectedOption) {
            handleChangeSelect(selectedOption);
          }
        }}
        style={{ width: "150px" }}
      >
        {selectValueHeader.map((obj: SelectHeaderModel, idx: number) => {
          return (
            <MenuItem value={obj.labelText} key={idx}>
              {obj.labelText}
            </MenuItem>
          );
        })}
      </Select>
    </FormControl>
  );
};

export default CategoryHeaderSelect;