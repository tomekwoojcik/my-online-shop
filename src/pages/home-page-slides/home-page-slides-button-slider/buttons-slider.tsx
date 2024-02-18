import { FC, useContext } from "react";
import { BorderBox, ButtonSlider } from "./buttons-slider.style";
import { CarouselModel, SlidesContext } from "../home-page-slides-context";

interface ButtonsSliderPropsModel {
  cart: CarouselModel;
}

const ButtonsSlider: FC<ButtonsSliderPropsModel> = ({ cart }) => {
  const { idxObj, setIdxObj } = useContext(SlidesContext);

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
        onClick={() => setIdxObj(cart.key)}
      />
    </BorderBox>
  );
};

export default ButtonsSlider;
