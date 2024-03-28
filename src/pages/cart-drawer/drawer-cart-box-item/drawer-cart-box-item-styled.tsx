import { Box, Typography } from "@mui/material";
import styled from "styled-components";
import {
  fontFamily,
  blackColor,
  grayColor,
  primaryColor,
} from "../../../state/state";
import image from "../../../assets/products/ethiopia/adventure.png";

export const MasterBoxItem = styled(Box)`
  display: flex;
  flex-direction: column;
  width: 100%;
  padding-bottom: 20px;
`;

export const ContentBox = styled(Box)`
  display: flex;
  flex-direction: row;
`;

export const PriceBox = styled(Box)`
  display: flex;
  justify-content: flex-end;
  margin-top: 30px;
  align-items: center;
`;

export const ProductImg = styled(Box)`
  background: url(${image}) !important;
  background-repeat: no-repeat !important;
  background-size: cover !important;
  width: 64px;
  height: 64px;
  margin-right: 40px;
`;

export const TypographyProductName = styled(Typography)`
  font-family: ${fontFamily};
  font-size: 14px !important;
  font-weight: 400 !important;
  line-height: 20px !important;
  letter-spacing: 0em !important;
  text-align: left !important;
  color: ${blackColor} !important;
`;
export const TypographyDiscountPrice = styled(Typography)`
  font-family: ${fontFamily};
  font-size: 12px !important;
  font-weight: 500 !important;
  line-height: 17px !important;
  letter-spacing: 0em !important;
  text-align: left !important;
  color: ${grayColor} !important;
  text-decoration: line-through !important;
`;
export const TypographyPrice = styled(Typography)`
  margin-left: 20px !important;
  font-family: ${fontFamily};
  font-size: 16px !important;
  font-weight: 500 !important;
  line-height: 28px !important;
  letter-spacing: 0em !important;
  text-align: left !important;
  color: ${primaryColor} !important;
`;
export const TypographyQuantity = styled(Typography)`
  font-family: ${fontFamily};
  font-size: 16px !important;
  font-weight: 500 !important;
  color: ${blackColor} !important;
`;
export const ControlBox = styled(Box)`
  margin-top: 30px;
  display: flex !important;
  flex-direction: row !important;
  justify-content: space-between;
`;

export const CountBox = styled(Box)`
  width: 118px;
  display: flex !important;
  flex-direction: row !important;
  align-items: center;
  justify-content: space-between;
  border: 1px solid ${primaryColor} !important;
  border-radius: 10px;
`;
