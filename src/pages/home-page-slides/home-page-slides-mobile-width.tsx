import { FC, useContext } from "react";
import { BoxSlider, CartSlider } from "./home-page-slides-mobile-width.style";
import { SlidesContext } from "./home-page-slides-context";
import HomePageSlidesBoxTextMobile from "./home-page-slides-box-text-mobile/home-page-slides-box-text-mobile";

const HomePageSlidesMobile: FC = () => {
  const { carouselArr, idxObj } = useContext(SlidesContext);
  return (
    <BoxSlider>
      <CartSlider
        sx={{
          background: `center url(${carouselArr[idxObj].imageName}) !important`,
          backgroundSize: "cover !important",
        }}
      />
      <HomePageSlidesBoxTextMobile />
    </BoxSlider>
  );
};

export default HomePageSlidesMobile;
