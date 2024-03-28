import { Box, Typography } from "@mui/material"
import { FC } from "react"
import styled from "styled-components"
import { CategoryBreadcrumbs } from "../categories-header-breadcrumbs/categories-header-breadcrumbs";

const CategoryHeaderBox = styled(Box)`
    width:100vw;
    display:flex;
    flex-direction: column;
    align-items: center;
`;
const CategoryHeaderTopography = styled(Typography)`
font-family: Quicksand !important;
font-size: 30px !important;
font-weight: 700 !important;
line-height: 35px !important;
letter-spacing: 0em !important;
text-transform: uppercase !important;
color: #000000;
margin-bottom: 10px !important;
`;

const CategoryHeader:FC = () => {
    return (
        <CategoryHeaderBox>
            <CategoryHeaderTopography>
                Kategorie
            </CategoryHeaderTopography>
            <CategoryBreadcrumbs endPath={"Kategorie"} />
       </CategoryHeaderBox>
    )
}

export default CategoryHeader