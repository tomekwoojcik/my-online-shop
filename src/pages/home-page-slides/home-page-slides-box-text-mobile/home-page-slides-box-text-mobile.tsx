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
  idxObj: number;
  carouselArr: CarouselModel[];
  setIdxObj:Dispatch<React.SetStateAction<number>>
}

const HomePageSlidesBoxTextMobile: FC<HomePageSlidesBoxTextMobilePropsModel> = ({idxObj, carouselArr, setIdxObj}) => {

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
          <ButtonsSlider idxObj={idxObj} setIdxObj={setIdxObj} key={cartObj.key} cart={cartObj} />
        ))}
      </ButtonsBox>
    </BoxTextMobile>
  );
};

export default HomePageSlidesBoxTextMobile;
