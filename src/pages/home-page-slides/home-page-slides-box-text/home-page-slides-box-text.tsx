import { FC } from "react";
import {
  BoxText,
  SmallParagraph,
  MainParagraph,
  ButtonBoxText,
} from "./home-page-slides-box-text.style";
import { carouselArr } from "../../../state/state";

interface HomePageSlidesBoxTextModel {
  activeObj : number
}

const HomePageSlidesBoxText: FC<HomePageSlidesBoxTextModel> = ({activeObj}) => {

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
