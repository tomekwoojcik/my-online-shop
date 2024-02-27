import { FC } from "react";
import {
  BoxText,
  SmallParagraph,
  MainParagraph,
  ButtonBoxText,
} from "./home-page-slides-box-text.style";
import { carouselArr } from "../../../state/state";

interface HomePageSlidesBoxTextModel {
  idxObj : number
}

const HomePageSlidesBoxText: FC<HomePageSlidesBoxTextModel> = ({idxObj}) => {

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
