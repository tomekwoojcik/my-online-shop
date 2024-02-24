import { FC, useReducer } from "react";
import { IconButton } from "@mui/material";
import ArrowBackIosNewOutlinedIcon from "@mui/icons-material/ArrowBackIosNewOutlined";
import ArrowForwardIosOutlinedIcon from "@mui/icons-material/ArrowForwardIosOutlined";
import {
  InnerBoxCarouselCustomize,
  CardContentCustomize,
  CarouselBoxCustomize,
  TypographyCustomize,
} from "./text-carousel.styled";
import {
  reducer,
  initState,
  REDUCER_ACTION_TYPE,
} from "../../../reducer/navbar-reducer";
import { stepperTextArr } from "../../../state/state";

const TextCarousel: FC = () => {
  const [state, dispatch] = useReducer(reducer, initState);

  const handleNext: VoidFunction = () => {
    dispatch({
      type: REDUCER_ACTION_TYPE.HANDLE_STEP,
      payload: ++state.activeStep,
    });
  };

  const handlePrevious: VoidFunction = () => {
    dispatch({
      type: REDUCER_ACTION_TYPE.HANDLE_STEP,
      payload: --state.activeStep,
    });
  };

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
