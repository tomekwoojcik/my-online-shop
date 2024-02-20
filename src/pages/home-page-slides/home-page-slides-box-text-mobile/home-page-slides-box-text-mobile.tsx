import { FC, useContext } from "react";
import {
  BoxTextMobile,
  SmallParagraph,
  MainParagraph,
  ButtonBoxText,
} from "./home-page-slides-box-text-mobile.style";
import { CarouselModel, SlidesContext } from "../home-page-slides-context";
import ButtonsSlider from "../home-page-slides-button-slider/buttons-slider";
import { ButtonsBox } from "../home-page-slides-mobile-width.style";


const HomePageSlidesBoxTextMobile: FC = () => {
  const { carouselArr, idxObj } = useContext(SlidesContext);

  return (
    <BoxTextMobile>
      <SmallParagraph variant="subtitle1">
        {carouselArr[idxObj].nameOfTheCafe}
      </SmallParagraph>
      <MainParagraph variant="h1">
        {carouselArr[idxObj].mainTitle}
      </MainParagraph>
      <ButtonBoxText style={{backgroundColor:"#592D1D"}} variant="contained">
        {carouselArr[idxObj].shortbuttonName}
      </ButtonBoxText>

      <ButtonsBox>
        {carouselArr.map((cartObj: CarouselModel) => (
          <ButtonsSlider key={cartObj.key} cart={cartObj} />
        ))}
      </ButtonsBox>
    </BoxTextMobile>
  );
};

export default HomePageSlidesBoxTextMobile;
