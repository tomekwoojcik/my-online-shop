import { TextField, FormControl, IconButton } from "@mui/material";
import styled from "styled-components";

  export const TextFieldCustomize = styled(TextField)`
    width: 75vw;
  `;

  export const FormControlCustomize = styled(FormControl)`
    display: flex !important;
    flex-direction: row !important;
    justify-content: space-between;
    margin-top: 25px !important;
  `;
    
    export const IconButtonCustomize = styled(IconButton)`
    border-bottom: 1px solid #F28729 !important;
    border-radius: 0 !important;
    `;