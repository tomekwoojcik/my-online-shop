import { Avatar, Box, Button, List, ListItem, Typography } from "@mui/material";
import styled from "styled-components";

export const CategoryBoxMenuCustomize = styled(Box)`
  display: flex !important;
  flex-direction: column !important;
  align-items: center !important;
  padding: 75px 0 75px 0 !important;
  width: 320px !important;
`;
export const TypographyCategoryBoxMenuCustomize = styled(Typography)`
  font-family: Quicksand !important;
  font-size: 20px !important;
  font-weight: 400 !important;
  line-height: 24px !important;
  letter-spacing: 0em !important;
  text-align: left !important;
  text-transform: uppercase !important;
  margin-bottom: 10px !important;
`;

export const LineCustomize = styled(Box)`
  width: 146px;
  height: 0;
  border: 0.5px solid #ff9a17;
`;
export const CategoryInnerBoxMenuCustomize = styled(Box)`
  width: 267px;
  margin-top: 30px;
`;

export const ListMenu = styled(List)`
  border-top: 1px solid #c9cdc7 !important;
  display: flex !important;
  flex-direction: column !important;
  align-items: center !important;
`;

export const ListItemMenuCustomize = styled(ListItem)`
  display: flex;
  flex-direction: row;
  justify-content: space-between !important;
  width: 100% !important;
  padding: 0 !important;
`;

export const ButtonMenuCategoryCustomize = styled(Button)`
  font-family: Quicksand !important;
  font-size: 15px !important;
  font-weight: 400 !important;
  line-height: 26px !important;
  letter-spacing: 0em !important;
  text-align: left !important;
  width 100% !important;
  text-transform: none !important;
`;

export const InfoDivCircle = styled(Avatar)`
  width: 24px !important;
  height: 24px !important;
  border: 0.5px solid !important;
  background: none !important;

  font-family: Outfit !important;
  font-size: 11px !important;
  font-weight: 400 !important;
  line-height: 22px !important;
  letter-spacing: 0em !important;
  text-align: left !important;
`;
