import { FC, useContext } from "react";
import {
  BoxText,
  SmallParagraph,
  MainParagraph,
  ButtonBoxText,
} from "./home-page-slides-box-text.style";
import { SlidesContext } from "../home-page-slides-context";

const HomePageSlidesBoxText: FC = () => {
  const { carouselArr, idxObj } = useContext(SlidesContext);

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