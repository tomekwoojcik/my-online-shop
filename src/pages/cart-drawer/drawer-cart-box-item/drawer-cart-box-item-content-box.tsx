import { FC } from "react"
import { ContentBox, PriceBox, ProductImg, TypographyDiscountPrice, TypographyPrice, TypographyProductName } from "./drawer-cart-box-item-styled"
import { Box } from "@mui/material";
import { CartProductModel } from "../drawer-cart-box/drawer-cart-box";

interface ContentBoxInterface {
  cartItem: CartProductModel;
}

const DrawerCartBoxItemContentBox: FC<ContentBoxInterface> = ({ cartItem }) => {
  
  return (
        <ContentBox>
          <ProductImg />
          <Box sx={{ width: "100%" }}>
            <TypographyProductName>
              {cartItem.product.name}
            </TypographyProductName>
            <PriceBox>
              <TypographyDiscountPrice>
                {`${cartItem.product.regularPrice}zł`}
              </TypographyDiscountPrice>
              <TypographyPrice>{`${cartItem.product.discountPrice}zł`}</TypographyPrice>
            </PriceBox>
          </Box>
        </ContentBox>
    )
}

export default DrawerCartBoxItemContentBox