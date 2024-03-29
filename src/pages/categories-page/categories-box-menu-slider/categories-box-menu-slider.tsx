import { useState } from "react";


import CategoryBoxMenuHeader from "../categories-box-menu-header/categories-box-menu-header";
import { Slider } from "@mui/material";
import CategoryBoxMenuAvailability from "../categories-box-menu-availability/categories-box-menu-availability";
import { PriceSliderBox, SliderBox, TypographySliderParagraph } from "./categories-box-menu-slider.styled";

const CategoryBoxMenuSlider = () => {
  const [value, setValue] = useState<number[]>([0, 160]);

  const handleChange = (event: Event, newValue: number | number[]) => {
    setValue(newValue as number[]);
    return event
  };

  const getSliderThumbAriaLabel = (index: number): string => {
    switch (index) {
      case 0:
        return "Cena początkowa";
      case 1:
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
