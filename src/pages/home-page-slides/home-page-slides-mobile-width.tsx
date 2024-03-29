import { FC, useState } from "react";
import { BoxSlider, CartSlider } from "./home-page-slides-mobile-width.style";
import HomePageSlidesBoxTextMobile from "./home-page-slides-box-text-mobile/home-page-slides-box-text-mobile";
import { carouselArr } from "../../state/state";
const HomePageSlidesMobile: FC = () => {
  const [activeObj, setActiveObj] = useState<number>(0);
  return (
    <BoxSlider>
      <CartSlider
        sx={{
          background: `center url(${carouselArr[activeObj].imageName}) !important`,
          backgroundSize: "cover !important",
        }}
      />
      <HomePageSlidesBoxTextMobile setActiveObj={setActiveObj} activeObj={activeObj} carouselArr={carouselArr} />
    </BoxSlider>
  );
};

export default HomePageSlidesMobile;
