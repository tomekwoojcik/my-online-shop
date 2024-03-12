import { Box, Rating, Typography } from "@mui/material";
import { FC, useState } from "react";
import styled from "styled-components";
import StarIcon from "@mui/icons-material/Star";

interface CategoriesBoxProductsInfoPropsModel {
  value: number | null;
  productName: string | null;
  price: number;
  discountPrice: number;
  discountDate: Date;
}

const BoxRating = styled(Box)`
  display: flex;
  flex-direction: row;
  align-items: center;
`;

const TypographySpan = styled(Typography)`
  color: #c9cdc7;
  font-family: Outfit !important;
  font-size: 12px !important;
  font-weight: 400 !important;
  line-height: 16px !important;
  letter-spacing: 0em !important;
  text-align: center !important;
  margin-left: 5px !important;
`;

const TypographyTitle = styled(Typography)`
  font-family: Quicksand !important;
  font-size: 15px !important;
  font-weight: 400 !important;
  line-height: 26px !important;
  letter-spacing: 0em !important;
  color: #0f2615 !important;
`;

const BoxPrice = styled(Box)`
  display: flex;
  width: 75px;
  justify-content: space-between;
`;

const TypographyPrice = styled(Typography)`
  font-family: Outfit !important;
  font-size: 16px !important;
  font-weight: 400 !important;
  line-height: 16px !important;
  letter-spacing: 0em !important;
  color: #0f2615;
`;
const TypographyDiscountPrice = styled(Typography)`
  font-family: Outfit !important;
  font-size: 16px !important;
  font-weight: 400 !important;
  line-height: 16px !important;
  letter-spacing: 0em !important;
  color: #ff9a17;
`;
const TypographyLastPrice = styled(Typography)`
  font-family: Outfit !important;
  font-size: 16px !important;
  font-weight: 400 !important;
  line-height: 16px !important;
  letter-spacing: 0em !important;
  text-decoration: line-through;
  color: #4b5945;
`;

const CategoriesBoxProductsInfo: FC<CategoriesBoxProductsInfoPropsModel> = ({
  value,
  productName,
  price,
  discountPrice,
  discountDate,
}) => {
  const [currentValue] = useState<number | null>(value);
  const currentDate = new Date();
  const discountEndDate = new Date(discountDate);
  return (
    <div>
      <BoxRating>
        <Rating
          value={currentValue}
          readOnly
          size="small"
          emptyIcon={
            <StarIcon style={{ color: "#C9CDC7" }} fontSize="inherit" />
          }
        />
        <TypographySpan variant="subtitle1">({currentValue})</TypographySpan>
      </BoxRating>
      <TypographyTitle variant="h5">{productName}</TypographyTitle>

      {currentDate > discountEndDate ? (
        <BoxPrice>
          <TypographyPrice variant="h6">{price}</TypographyPrice>
        </BoxPrice>
      ) : (
        <BoxPrice>
          <TypographyLastPrice variant="h6">{price}</TypographyLastPrice>
          <TypographyDiscountPrice variant="h6">
            {discountPrice}
          </TypographyDiscountPrice>
        </BoxPrice>
      )}
    </div>
  );
};

export default CategoriesBoxProductsInfo;
