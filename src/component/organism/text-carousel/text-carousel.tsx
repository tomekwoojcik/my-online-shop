import { FC } from "react";
import { IconButton } from "@mui/material";
import ArrowBackIosNewOutlinedIcon from "@mui/icons-material/ArrowBackIosNewOutlined";
import ArrowForwardIosOutlinedIcon from "@mui/icons-material/ArrowForwardIosOutlined";
import {
  InnerBoxCarouselCustomize,
  CardContentCustomize,
  CarouselBoxCustomize,
  TypographyCustomize,
} from "./text-carousel.styled";
import { stepperTextArr } from "../../../state/state";

interface TextCarouselPropsModel{
   state: {
    navbarSearchButtonToggle: boolean;
    activeStep: number;
    burgerToggle: boolean;
   };
    handleNext: VoidFunction;
  handlePrevious: VoidFunction;
}

const TextCarousel: FC<TextCarouselPropsModel> = ({state, handleNext, handlePrevious}) => {

  return (
    <CarouselBoxCustomize>
      <IconButton
        disabled={state.activeStep == 0}
        onClick={() => {
          handlePrevious();
        }}
      >
        <ArrowBackIosNewOutlinedIcon />
      </IconButton>
      <InnerBoxCarouselCustomize>
        <CardContentCustomize>
          <TypographyCustomize>
            {stepperTextArr[state.activeStep].label.toUpperCase()}
          </TypographyCustomize>
        </CardContentCustomize>
      </InnerBoxCarouselCustomize>
      <IconButton
        onClick={() => handleNext()}
        disabled={state.activeStep == stepperTextArr.length - 1}
      >
        <ArrowForwardIosOutlinedIcon />
      </IconButton>
    </CarouselBoxCustomize>
  );
};

export default TextCarousel;
