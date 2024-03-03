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
  idxObj: number;
}

const HomePageSlidesBoxText: FC<HomePageSlidesBoxTextPropsModel> = ({carouselArr, idxObj }) => {
  
  return (
    <BoxText>
      <SmallParagraph variant="subtitle1">
        {carouselArr[idxObj].nameOfTheCafe}
      </SmallParagraph>
      <MainParagraph variant="h1">
        {carouselArr[idxObj].mainTitle}
      </MainParagraph>
      <ButtonBoxText color="secondary" variant="contained">
        {carouselArr[idxObj].buttonName}
      </ButtonBoxText>
    </BoxText>
  );
};

export default HomePageSlidesBoxText;