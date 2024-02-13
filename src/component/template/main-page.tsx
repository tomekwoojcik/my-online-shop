import { Box, Button, Typography } from "@mui/material";
import { useContext, useState } from "react";
import styled from "styled-components";
import { CarouselModel, MainPageContext } from "./main-page-context";

const BoxSlider = styled(Box)`
  width: 100vw;
  height: 600px;
`;

const CartSlider = styled(Box)`
  width: 100vw;
  height: 600px;
  display: flex;
  flex-direction: column;
`;

const SmallParagraph = styled(Typography)`
  font-family: Quicksand !important;
  font-size: 20px !important;
  font-weight: 400 !important;
  line-height: 20px !important;
  letter-spacing: 0em !important;
  text-align: left !important;
  color: #f28729 !important;
  margin-left: 2px !important;
`;

const MainParagraph = styled(Typography)`
  font-family: Quicksand !important;
  font-size: 80px !important;
  font-weight: 700 !important;
  line-height: 95px !important;
  letter-spacing: 0em !important;
  text-align: left !important;
  color: #f2efe9 !important;
`;

const BoxText = styled(Box)`
  width: 875px;
  margin-left: 38px;
  margin-top:100px;
`;

const ButtonBoxText = styled(Button)`
  padding: 0 12px;
  margin-left: 2px !important;
`;

const ButtonsBox = styled(Box)`
  width: 60px;
  height: 25px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

const ButtonSlider = styled(Button)`
  width: 10px !important;
  height: 10px !important;
  background-color: #f2e0c9 !important;
  padding: 0 !important;
  min-width: 0 !important;
`;

const MainPageTemplate = () => {
  const [idxObj, setIdxObj] = useState<number>(0);
  const { carouselArr } = useContext(MainPageContext);
  return (
    <BoxSlider>
      <CartSlider
        sx={{
          background: `url(${carouselArr[idxObj].imageName}) !important`,
        }}
      >
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
        <ButtonsBox>
          {carouselArr.map((cartObj: CarouselModel) => (
            <ButtonSlider
              variant="contained"
              onClick={() => setIdxObj(cartObj.key)}
            />
          ))}
        </ButtonsBox>
      </CartSlider>
    </BoxSlider>
  );
};
export default MainPageTemplate;
