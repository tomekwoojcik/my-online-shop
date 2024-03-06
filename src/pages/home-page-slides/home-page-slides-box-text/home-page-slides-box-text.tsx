import { FC } from "react";
import { CarouselModel } from "../../../model/model"
import {
  BoxText,
  SmallParagraph,
  MainParagraph,
  ButtonBoxText,
} from "./home-page-slides-box-text.style";

interface HomePageSlidesBoxTextPropsModel {
  carouselArr: CarouselModel[];
  activeObj: number;
}

const HomePageSlidesBoxText: FC<HomePageSlidesBoxTextPropsModel> = ({carouselArr, activeObj }) => {
  
  return (
    <BoxText>
      <SmallParagraph variant="subtitle1">
        {carouselArr[activeObj].nameOfTheCafe}
      </SmallParagraph>
      <MainParagraph variant="h1">
        {carouselArr[activeObj].mainTitle}
      </MainParagraph>
      <ButtonBoxText color="secondary" variant="contained">
        {carouselArr[activeObj].buttonName}
      </ButtonBoxText>
    </BoxText>
  );
};

export default HomePageSlidesBoxText;