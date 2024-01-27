import { FC, useContext } from "react";
import {
  NavbarMenuContext,
} from "../../../context/navbarMenuContext";
import CardCarousel from "../../atom/card-carousel/card-carousel";
import { IconButton } from "@mui/material";
import ArrowBackIosNewOutlinedIcon from "@mui/icons-material/ArrowBackIosNewOutlined";
import ArrowForwardIosOutlinedIcon from "@mui/icons-material/ArrowForwardIosOutlined";
import { BoxCustomize, CarouselBoxCustomize } from "./textCarouselCustomize";

const TextCarousel: FC = () => {
  const { stepperTextArr, handleNext, handlePrevious, state } = useContext(NavbarMenuContext);

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
      <BoxCustomize>
        <CardCarousel textLabel={stepperTextArr[state.activeStep].label.toUpperCase()} />
      </BoxCustomize>
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
