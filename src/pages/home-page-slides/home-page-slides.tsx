import { useContext } from "react";
import { CarouselModel, SlidesContext } from "./home-page-slides-context";
import ButtonsSlider from "./home-page-slides-button-slider/buttons-slider";
import HomePageSlidesBoxText from "./home-page-slides-box-text/home-page-slides-box-text";
import { BoxSlider, ButtonsBox, CartSlider } from "./home-page-slides.styled";

const HomePageSlides = () => {
  const { carouselArr, idxObj } = useContext(SlidesContext);
  return (
    <BoxSlider>
      <CartSlider
        sx={{
          background: `url(${carouselArr[idxObj].imageName}) !important`,
        }}
      >
        <HomePageSlidesBoxText/>
        <ButtonsBox>
          {carouselArr.map((cartObj: CarouselModel) => (
              <ButtonsSlider key={cartObj.key} cart={cartObj} />
          ))}
        </ButtonsBox>
      </CartSlider>
    </BoxSlider>
  );
};
export default HomePageSlides;