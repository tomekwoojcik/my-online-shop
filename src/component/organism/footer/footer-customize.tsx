import { Box } from "@mui/material";
import styled from "styled-components";

export const FooterBoxCustomize = styled(Box)`
  background: #f2efe9;
  width: calc(100vw - 2 * 18px);
  border-top: 1px solid #592d1d1a;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-between;
  margin: auto 0;
  padding: 24px 18px;
`;