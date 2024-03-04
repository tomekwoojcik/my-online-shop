import { FC, useState } from "react";
import ButtonsSlider from "./home-page-slides-button-slider/buttons-slider";
import HomePageSlidesBoxText from "./home-page-slides-box-text/home-page-slides-box-text";
import { BoxSlider, ButtonsBox, CartSlider } from "./home-page-slides.styled";
import { CarouselModel } from "../../model/model";
import { carouselArr } from "../../state/state";

const HomePageSlides: FC = () => {
      const [activeObj, setActiveObj] = useState<number>(0);

  return (
    <BoxSlider>
      <CartSlider
        sx={{
          background: `url(${carouselArr[activeObj].imageName}) !important`,
        }}
      >
        <HomePageSlidesBoxText activeObj={activeObj} />
        <ButtonsBox>
          {carouselArr.map((cartObj: CarouselModel) => (
              <ButtonsSlider activeObj={activeObj} setActiveObj={setActiveObj} key={cartObj.key} cart={cartObj} />
          ))}
        </ButtonsBox>
      </CartSlider>
    </BoxSlider>
  );
};
export default HomePageSlides;