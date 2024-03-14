import { Box, useMediaQuery } from "@mui/material";
import { FC } from "react";
import styled from "styled-components";
import { breakpointViewSize } from "../../../state/state";
const InfoDiscountBox = styled(Box)`
  font-family: Outfit;
  font-weight: 400;
  letter-spacing: 0em;
  text-align: center;
  color: #ffffff !important;
  background-color: #ff9a16;
  display: flex;
  justify-content: center !important;
  align-items: center !important;
`;

const EmptyDiscountBox = styled(Box)`
  width: 40px;
  height: 20px;
`;
interface InfoDiscountPropsModel {
  discountPrice: number;
  regularPrice: number;
  discountPriceEndDate: Date;
}

const InfoDiscount: FC<InfoDiscountPropsModel> = ({
  discountPrice,
  regularPrice,
  discountPriceEndDate,
}) => {
  const breakpoint: boolean = useMediaQuery(breakpointViewSize);
  const currentDay = new Date();
  const discountEndDay = new Date(discountPriceEndDate);
  const discountPercentage = (discountPrice: number, regularPrice: number) => {
    if (discountPrice != null && regularPrice != null) {
      const discountPercentage: number =
        (discountPrice * 100) / regularPrice - 100;
      return `${discountPercentage}%`;
    }
  };
  return (
    <>
      {discountPriceEndDate != null && currentDay < discountEndDay ? (
        <InfoDiscountBox
          sx={
            breakpoint
              ? {
                  fontSize: "14px",
                  width: "60px !important",
                  height: "25px !important",
                }
              : {
                  fontSize: "10px",
                  width: "40px !important",
                  height: "20px !important",
                }
          }
        >
          {discountPercentage(discountPrice, regularPrice)}
        </InfoDiscountBox>
      ) : (
        <EmptyDiscountBox />
      )}
    </>
  );
};

export default InfoDiscount;
