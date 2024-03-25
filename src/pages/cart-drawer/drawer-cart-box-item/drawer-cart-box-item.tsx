import { FC, useState } from "react";
import { Box, IconButton, ListItem } from "@mui/material";
import DeleteOutlinedIcon from "@mui/icons-material/DeleteOutlined";
import RemoveOutlinedIcon from "@mui/icons-material/RemoveOutlined";
import AddOutlinedIcon from "@mui/icons-material/AddOutlined";
import { CartProductModel } from "../drawer-cart-box/drawer-cart-box";
import { grayColor } from "../../../state/state";
import { ContentBox, ControlBox, CountBox, MasterBoxItem, PriceBox, ProductImg, TypographyDiscountPrice, TypographyPrice, TypographyProductName, TypographyQuantity } from "./drawer-cart-box-item-styled";
interface DrawerCartBoxItemInterface {
  cartItem: CartProductModel;
  idx: number;
  lastIdx: number;
}

const DrawerCartBoxItem: FC<DrawerCartBoxItemInterface> = ({
  cartItem,
  idx,
  lastIdx,
}) => {
  const [cartItemQuantity, setCartItemQuantity] = useState<number>(
    cartItem.quantity
  );

          //TODO zapytać michała - czy nie za duzy komponent
    
  return (
    <ListItem>
      <MasterBoxItem
        sx={{
          //TODO zapytać michała
          borderBottom: idx === lastIdx ? "none" : `1px solid ${grayColor}`,
        }}
      >
        <ContentBox>
          <ProductImg />
          <Box sx={{ width: "100%" }}>
            <TypographyProductName>
              {cartItem.product.name}
            </TypographyProductName>
            <PriceBox>
              <TypographyDiscountPrice>
                {`${cartItem.product.discountPrice}zł`}
              </TypographyDiscountPrice>
              <TypographyPrice>{`${cartItem.product.regularPrice}zł`}</TypographyPrice>
            </PriceBox>
          </Box>
        </ContentBox>
        <ControlBox>
          <IconButton>
            <DeleteOutlinedIcon
              sx={{ width: "25px !important", height: "25px !important" }}
            />
          </IconButton>

          <CountBox>
            <IconButton
              onClick={() => setCartItemQuantity(cartItemQuantity - 1)}
            >
              <RemoveOutlinedIcon />
            </IconButton>
            <TypographyQuantity>{cartItemQuantity}</TypographyQuantity>
            <IconButton>
              <AddOutlinedIcon
                onClick={() => setCartItemQuantity(cartItemQuantity + 1)}
              />
            </IconButton>
          </CountBox>
        </ControlBox>
      </MasterBoxItem>
    </ListItem>
  );
};

export default DrawerCartBoxItem;
