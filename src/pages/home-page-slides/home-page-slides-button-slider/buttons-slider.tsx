import { Dispatch, FC } from "react";
import { BorderBox, ButtonSlider } from "./buttons-slider.style";
import { useMediaQuery } from "@mui/material";
import { breakpointViewSize } from "../../../state/state";
import { CarouselModel } from "../../../model/model";

interface ButtonsSliderPropsModel {
  cart: CarouselModel;
  idxObj: number;
  setIdxObj:Dispatch<React.SetStateAction<number>>
}

const ButtonsSlider: FC<ButtonsSliderPropsModel> = ({ cart, idxObj, setIdxObj }) => {

   const breakpointView: boolean = useMediaQuery(breakpointViewSize);

  return (
    <BorderBox
      sx={{
        border:
          idxObj == cart.key
            ? " 1px solid #FF9A17 !important"
            : " 1px solid transparent !important",
      }}
      key={cart.key}
    >
      <ButtonSlider
        key={cart.key}
        variant="contained"
        sx={breakpointView ? null : {backgroundColor:" #FF9A17 !important"}}
        onClick={() => setIdxObj(cart.key)}
      />
    </BorderBox>
  );
};

export default ButtonsSlider;
