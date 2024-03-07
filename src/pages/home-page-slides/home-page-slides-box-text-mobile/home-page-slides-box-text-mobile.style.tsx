import { Typography, Box, Button } from "@mui/material";
import styled from "styled-components";

export const SmallParagraph = styled(Typography)`
  font-family: Quicksand !important;
  font-size: 15px !important;
  font-weight: 400 !important;
  line-height: 20px !important;
  letter-spacing: 0em !important;
  text-align: center !important;
  color: #f28729;
`;

export const MainParagraph = styled(Typography)`
  font-family: Quicksand !important;
  font-size: 30px !important;
  font-weight: 700 !important;
  line-height: 35px !important;
  letter-spacing: 0em !important;
  text-align: center !important;
  margin: 10px 0 !important;
`;

export const BoxTextMobile = styled(Box)`
  background-color: #f2efe9;
  display: flex !important;
  flex-direction: column !important;
  align-items: center !important;
  padding: 20px 20px 0 20px !important;
`;

export const ButtonBoxText = styled(Button)`
 width: 84px !important;
height: 38px !important;
padding: 10px, 16px !important;
border-radius: 6px !important;
gap: 8px
backgroundColor:#592D1D !important;
color:#FF9A17 !important;
 border: 1px solid #FF9A17 !important;
`;
