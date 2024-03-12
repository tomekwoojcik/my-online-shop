import { Box } from "@mui/material";
import { FC } from "react";
import styled from "styled-components";
const InfoDiscountBox = styled(Box)`
  font-family: Outfit;
  font-size: 14px;
  font-weight: 400;
  line-height: 25px;
  letter-spacing: 0em;
  text-align: center;
  color: #ffffff;
  width: 60px;
  height: 25px;
  background-color: #ff9a16;
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
  const currentDay = new Date();
  const discountEndDay = new Date(discountPriceEndDate);
  const discountPercentage = (discountPrice: number, regularPrice: number) => {
    if (
      discountPrice != null &&
      regularPrice != null 
    ) {
      const discountPercentage: number =
        (discountPrice * 100) / regularPrice - 100;
      return `${discountPercentage}%`;
    }
  };
  return (
    <>
      {(discountPriceEndDate != null &&
        currentDay < discountEndDay) ? (
        <InfoDiscountBox>
          {discountPercentage(discountPrice, regularPrice)}
        </InfoDiscountBox>
      ) : null}
    </>
  );
};

export default InfoDiscount;
