import { FC, useState } from "react";
import ButtonsSlider from "./home-page-slides-button-slider/buttons-slider";
import HomePageSlidesBoxText from "./home-page-slides-box-text/home-page-slides-box-text";
import { BoxSlider, ButtonsBox, CartSlider } from "./home-page-slides.styled";
import { CarouselModel } from "../../model/model";
import { carouselArr } from "../../state/state";

const HomePageSlides: FC = () => {
      const [idxObj, setIdxObj] = useState<number>(0);

  return (
    <BoxSlider>
      <CartSlider
        sx={{
          background: `url(${carouselArr[idxObj].imageName}) !important`,
        }}
      >
        <HomePageSlidesBoxText idxObj={idxObj} />
        <ButtonsBox>
          {carouselArr.map((cartObj: CarouselModel) => (
              <ButtonsSlider idxObj={idxObj} setIdxObj={setIdxObj} key={cartObj.key} cart={cartObj} />
          ))}
        </ButtonsBox>
      </CartSlider>
    </BoxSlider>
  );
};
export default HomePageSlides;