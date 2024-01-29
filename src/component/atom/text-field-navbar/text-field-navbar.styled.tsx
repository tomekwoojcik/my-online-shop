import { Box, Button, TextField } from "@mui/material";
import styled from "styled-components";

export const FormBoxCustomize = styled(Box)`
  display: flex;
  align-content: center;
  align-items: center;
  height: 40px;
`;

export const TextFieldCustomize = styled(TextField)`
  height: 100%;
  width: 110px;
  height: 30px;
`;

export const IconButtonCustomize = styled(Button)`
  height: 30px;
  min-width: 5px !important;
  padding: 5px 5px !important;
`;
