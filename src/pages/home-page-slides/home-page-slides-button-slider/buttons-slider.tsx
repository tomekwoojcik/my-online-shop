import { Dispatch, FC } from "react";
import { BorderBox, ButtonSlider } from "./buttons-slider.style";
import { useMediaQuery } from "@mui/material";
import { breakpointViewSize } from "../../../state/state";
import { CarouselModel } from "../../../model/model";

interface ButtonsSliderPropsModel {
  cart: CarouselModel;
  activeObj: number;
  setActiveObj:Dispatch<React.SetStateAction<number>>
}

const ButtonsSlider: FC<ButtonsSliderPropsModel> = ({ cart, activeObj, setActiveObj }) => {

   const breakpointView: boolean = useMediaQuery(breakpointViewSize);

  return (
    <BorderBox
      sx={{
        border:
          activeObj == cart.key
            ? " 1px solid #FF9A17 !important"
            : " 1px solid transparent !important",
      }}
      key={cart.key}
    >
      <ButtonSlider
        key={cart.key}
        variant="contained"
        sx={breakpointView ? null : {backgroundColor:" #FF9A17 !important"}}
        onClick={() => setActiveObj(cart.key)}
      />
    </BorderBox>
  );
};

export default ButtonsSlider;
