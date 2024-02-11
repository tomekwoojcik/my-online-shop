import { Button, List } from "@mui/material";
import styled from "styled-components";

export const ButtonCustomize = styled(Button)`
  font-family: Quicksand !important;
  font-weight: 400 !important;
  font-size: 15px !important;
  color: #0f2615 !important;
  text-transform: none !important;
  padding: 6px 0 !important;
  border-radius: 0 !important;
  min-width:0;
  text-align:left;
`;

export const ListCustomize = styled(List)`
  display: flex !important;
  flex-direction: column !important;
  align-items: flex-start;
`;
