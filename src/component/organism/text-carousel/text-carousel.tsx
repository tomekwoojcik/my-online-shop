import { FC, useContext } from "react";
import { NavbarMenuContext } from "../../../context/navbar-menu-context";
import { IconButton } from "@mui/material";
import ArrowBackIosNewOutlinedIcon from "@mui/icons-material/ArrowBackIosNewOutlined";
import ArrowForwardIosOutlinedIcon from "@mui/icons-material/ArrowForwardIosOutlined";
import {
  InnerBoxCarouselCustomize,
  CardContentCustomize,
  CarouselBoxCustomize,
  TypographyCustomize,
} from "./text-carousel.styled";

const TextCarousel: FC = () => {
  const { stepperTextArr, handleNext, handlePrevious, state } =
    useContext(NavbarMenuContext);

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
