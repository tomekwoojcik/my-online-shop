import { Box, Typography, styled } from "@mui/material";
import { FC } from "react";
import { DrawerCartBoxSummaryInfoInterface } from "./drawer-cart-box-summary-info";
const TypographySummary = styled(Typography)`
  font-family: Outfit !important;
  font-size: 16px !important;
  font-weight: 700 !important;
  line-height: 23px !important;
`;

const DrawerCartBoxSummaryTotalInfo: FC<DrawerCartBoxSummaryInfoInterface> = ({
    cash,
    title,
}) => {

    const totalPrice = cash != undefined ? cash + 20 : 0;
    
  return (
    <Box
      sx={{
        display: "flex",
              justifyContent: "space-between",
        
        padding: "23px 0",
      }}
    >
      <TypographySummary>{title}</TypographySummary>
      <Box>
        <TypographySummary>
          {cash == undefined ? 0 : `${totalPrice}.00 zł`}
        </TypographySummary>
      </Box>
    </Box>
  );
};

export default DrawerCartBoxSummaryTotalInfo;
