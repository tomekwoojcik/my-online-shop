import { Box, Typography } from "@mui/material";
import { FC } from "react";
import styled from "styled-components";

export interface DrawerCartBoxSummaryInfoInterface {
  title: string | undefined;
  cash: number | undefined;
}

const TypographySummary = styled(Typography)`
  font-family: Outfit !important;
  font-size: 16px !important;
  font-weight: 400 !important;
  line-height: 23px !important;
`;

const DrawerCartBoxSummaryInfo: FC<DrawerCartBoxSummaryInfoInterface> = ({
  title,
  cash,
}) => {
  return (
      <Box sx={{ display: "flex", justifyContent:"space-between", paddingBottom:"23px"}}>
      <TypographySummary>{title}</TypographySummary>
      <Box>
        <TypographySummary>{ cash == undefined ? 0 : `${cash}.00 zł`}</TypographySummary>
      </Box>
    </Box>
  );
};

export default DrawerCartBoxSummaryInfo;
