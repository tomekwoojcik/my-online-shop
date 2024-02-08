// import { useState } from "react";
// import { getAriaLabel } from '@mui/base/Slider';

// import {
//   PriceSliderBox,
//   SliderBox,
//   TypographySliderParagraph,
// } from "./category-box-menu-slider.styled";
// import CategoryBoxMenuHeader from "../category-box-menu-header/category-box-menu-header";
// import {
//   Slider,
// } from "@mui/material";
// import CategoryBoxMenuAvailability from "../category-box-menu-availability/category-box-menu-availability";

// const CategoryBoxMenuSlider = () => {
//   const [value, setValue] = useState<number[]>([0, 160]);

//   const handleChange = (event: Event, newValue: number | number[]) => {
//     setValue(newValue as number[]);
//   };

//   return (
//     <PriceSliderBox>
//       <CategoryBoxMenuHeader textHeader="Cena" />
//       <SliderBox>
//         <Slider
//           min={0}
//           max={160}
//           size="small"
//           value={value}
//           aria-label="Small"
//           valueLabelDisplay="auto"
//           color="secondary"
//           onChange={handleChange}
//           getAriaLabel={() => "Minimal and Max Price"}
//         />
//         <TypographySliderParagraph variant="body1">
//           Cena: {value[0]} PLN - {value[1]} PLN
//         </TypographySliderParagraph>
//       </SliderBox>
//       <CategoryBoxMenuAvailability />
//     </PriceSliderBox>
//   );
// };

// export default CategoryBoxMenuSlider;

import { useState } from "react";

import {
  PriceSliderBox,
  SliderBox,
  TypographySliderParagraph,
} from "./category-box-menu-slider.styled"; // Assuming this imports styled components
import CategoryBoxMenuHeader from "../category-box-menu-header/category-box-menu-header";
import { Slider } from "@mui/material";
import CategoryBoxMenuAvailability from "../category-box-menu-availability/category-box-menu-availability";

const CategoryBoxMenuSlider = () => {
  const [value, setValue] = useState<number[]>([0, 160]);

  const handleChange = (event: Event, newValue: number | number[]) => {
    setValue(newValue as number[]);
  };

  const getSliderThumbAriaLabel = (index: number): string => {
    switch (index) {
      case 0:
        return "Cena początkowa";

        return "Cena maksymalna";
      default:
        return "Suwak ceny";
    }
  };

  return (
    <PriceSliderBox>
      <CategoryBoxMenuHeader textHeader="Cena" />
      <SliderBox>
        <Slider
          min={0}
          max={160}
          size="small"
          value={value}
          getAriaLabel={getSliderThumbAriaLabel}
          valueLabelDisplay="auto"
          color="secondary"
          onChange={handleChange}
        />
        <TypographySliderParagraph variant="body1">
          Cena: {value[0]} PLN - {value[1]} PLN
        </TypographySliderParagraph>
      </SliderBox>
      <CategoryBoxMenuAvailability />
    </PriceSliderBox>
  );
};

export default CategoryBoxMenuSlider;
