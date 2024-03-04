import { Dispatch, FC } from "react";
import {
  BoxTextMobile,
  SmallParagraph,
  MainParagraph,
  ButtonBoxText,
} from "./home-page-slides-box-text-mobile.style";
import ButtonsSlider from "../home-page-slides-button-slider/buttons-slider";
import { ButtonsBox } from "../home-page-slides-mobile-width.style";
import { CarouselModel } from "../../../model/model";

interface HomePageSlidesBoxTextMobilePropsModel {
  activeObj: number;
  carouselArr: CarouselModel[];
  setActiveObj:Dispatch<React.SetStateAction<number>>
}

const HomePageSlidesBoxTextMobile: FC<HomePageSlidesBoxTextMobilePropsModel> = ({activeObj, carouselArr, setActiveObj}) => {

  return (
    <BoxTextMobile>
      <SmallParagraph variant="subtitle1">
        {carouselArr[activeObj].nameOfTheCafe}
      </SmallParagraph>
      <MainParagraph variant="h1">
        {carouselArr[activeObj].mainTitle}
      </MainParagraph>
      <ButtonBoxText style={{backgroundColor:"#592D1D"}} variant="contained">
        {carouselArr[activeObj].shortbuttonName}
      </ButtonBoxText>

      <ButtonsBox>
        {carouselArr.map((cartObj: CarouselModel) => (
          <ButtonsSlider activeObj={activeObj} setActiveObj={setActiveObj} key={cartObj.key} cart={cartObj} />
        ))}
      </ButtonsBox>
    </BoxTextMobile>
  );
};

export default HomePageSlidesBoxTextMobile;
