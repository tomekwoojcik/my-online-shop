import { FC, useState } from "react";
import ButtonsSlider from "./home-page-slides-button-slider/buttons-slider";
import HomePageSlidesBoxText from "./home-page-slides-box-text/home-page-slides-box-text";
import { BoxSlider, ButtonsBox, CartSlider } from "./home-page-slides.styled";
import { carouselArr } from "../../state/state";
import { CarouselModel } from "../../model/model";

const HomePageSlides: FC = () => {
  const [idxObj, setIdxObj] = useState<number>(0);

  return (
    <BoxSlider>
      <CartSlider
        sx={{
          background: `url(${carouselArr[idxObj].imageName}) !important`,
          backgroundRepeat: "no-repeat !important",
          backgroundSize: "cover !important",
        }}
      >
        <HomePageSlidesBoxText carouselArr={carouselArr} idxObj={idxObj} />
        <ButtonsBox>
          {carouselArr.map((cartObj: CarouselModel) => (
            <ButtonsSlider
              key={cartObj.key}
              cart={cartObj}
              idxObj={idxObj}
              setIdxObj={setIdxObj}
            />
          ))}
        </ButtonsBox>
      </CartSlider>
    </BoxSlider>
  );
};
export default HomePageSlides;
