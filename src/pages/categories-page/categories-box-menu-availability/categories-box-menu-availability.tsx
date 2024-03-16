import { FormControlLabel } from "@mui/material";
import CategoryBoxMenuHeader from "../categories-box-menu-header/categories-box-menu-header";
import {
  AvailabilityBox,
  IOSSwitch,
} from "./categories-box-menu-availability.styled";

const CategoryBoxMenuAvailability = () => {
  return (
    <AvailabilityBox>
      <CategoryBoxMenuHeader textHeader="Dostępność" />
      <FormControlLabel
        control={<IOSSwitch sx={{ m: 1 }} defaultChecked />}
        label=""
      />
    </AvailabilityBox>
  );
};

export default CategoryBoxMenuAvailability;
