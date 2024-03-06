import { FC, useState } from "react";
import ButtonsSlider from "./home-page-slides-button-slider/buttons-slider";
import HomePageSlidesBoxText from "./home-page-slides-box-text/home-page-slides-box-text";
import { BoxSlider, ButtonsBox, CartSlider } from "./home-page-slides.styled";
import { carouselArr } from "../../state/state";
import { CarouselModel } from "../../model/model";

const HomePageSlides: FC = () => {
  const [activeObj, setActiveObj] = useState<number>(0);

  return (
    <BoxSlider>
      <CartSlider
        sx={{
          background: `url(${carouselArr[activeObj].imageName}) !important`,
          backgroundRepeat: "no-repeat !important",
          backgroundSize: "cover !important",
        }}
      >
        <HomePageSlidesBoxText carouselArr={carouselArr} activeObj={activeObj} />
        <ButtonsBox>
          {carouselArr.map((cartObj: CarouselModel) => (
            <ButtonsSlider
              key={cartObj.key}
              cart={cartObj}
              activeObj={activeObj}
              setActiveObj={setActiveObj}
            />
          ))}
        </ButtonsBox>
      </CartSlider>
    </BoxSlider>
  );
};
export default HomePageSlides;
