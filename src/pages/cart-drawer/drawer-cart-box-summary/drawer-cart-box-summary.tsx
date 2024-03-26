import { Box, Button } from "@mui/material";
import { FC } from "react";
import DrawerCartBoxSummaryInfo from "./drawer-cart-box-summary-info";
import { CartModel } from "../drawer-cart-box/drawer-cart-box";
import { brownColor, fontFamily, grayColor, primaryColor } from "../../../state/state";
import DrawerCartBoxSummaryTotalInfo from "./drawer-cart-box-summary-total-info";
import styled from "styled-components";

interface DrawerCartBoxSummaryInterface {
  cartItem: CartModel | undefined;
}

const SummaryButton = styled(Button)`
  font-family: ${fontFamily};
  font-size: 16px !important;
  font-weight: 400 !important;
  line-height: 18px !important;
  color: ${primaryColor} !important;
  border: 1px solid ${primaryColor} !important; 
  background-color: ${brownColor} !important;
  text-transform: none !important;
  border-radius: 6px !important;
  padding: 10px 16px !important;
  width: 100% !important;
  margin-top: 20px !important; 
`;

const DrawerCartBoxSummary: FC<DrawerCartBoxSummaryInterface> = ({
  cartItem,
}) => {
  // const totalPrice: number = cartItem?.totalPrice + 20;
  return (
    <Box>
      <DrawerCartBoxSummaryInfo
        title={"Cena produktów"}
        cash={cartItem?.totalPrice}
      />
      <DrawerCartBoxSummaryInfo title="Dostawa" cash={20} />
      <Box sx={{ borderBottom: `1px solid ${grayColor}`, width: "100%" }} />
      <DrawerCartBoxSummaryTotalInfo
        title="Łączna kwota"
        cash={cartItem?.totalPrice}
      />

      <SummaryButton variant="outlined" >Przejdź do podsumowania</SummaryButton>
    </Box>
  );
};

export default DrawerCartBoxSummary;
