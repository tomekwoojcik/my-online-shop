import { FormControlLabel } from "@mui/material";
import CategoryBoxMenuHeader from "../category-box-menu-header/category-box-menu-header";
import {
  AvailabilityBox,
  IOSSwitch,
} from "./category-box-menu-availability.styled";

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
