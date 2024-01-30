import { Box } from "@mui/material";
import styled from "styled-components";

export const BoxCustomize = styled(Box)`
    margin-left: 20px !important;
    @media only screen and (max-width: 768px){
        display:flex;
        flex-direction:column;
        align-items: flex-start !important;
    }
}`

