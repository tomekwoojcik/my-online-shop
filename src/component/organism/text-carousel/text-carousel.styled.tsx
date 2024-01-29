import { Box, CardContent, Typography} from "@mui/material";
import styled from "styled-components";

export const InnerBoxCarouselCustomize = styled(Box)`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  height:100px;
`;

export const CarouselBoxCustomize = styled(Box)`
  display: flex;
  justify-content: center;
  align-items: center;
  align-self: center;
  width: 100vw;
  background-color:#F2EFE9;
`;

export const CardContentCustomize = styled(CardContent)`
  width: 100%;
`;

export const TypographyCustomize = styled(Typography)`
  width:80vw;
  text-align: center;
  margin-top: 10px !important;
  font-weight: 400 !important;
  font-size: 16px !important;
  font-family: "Quicksand", sans-serif !important;
  color:#4B5945;
`;
