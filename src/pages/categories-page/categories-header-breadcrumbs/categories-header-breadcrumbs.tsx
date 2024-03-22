import Breadcrumbs from "@mui/material/Breadcrumbs";
import { Button } from "@mui/material";
import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import styled from "styled-components";
import { FC } from "react";

function handleClick(event: React.MouseEvent<HTMLDivElement, MouseEvent>) {
  event.preventDefault();
  console.info("You clicked a breadcrumb.");
}

const CategoryBreadcrumbsButton = styled(Button)`
  color: #000 !important;
  padding: 0 !important;
  text-transform: none !important;
  font-family: Quicksand !important;
font-size: 16px !important;
font-weight: 400 !important;
line-height: 24px !important;
letter-spacing: 0em !important;
color:#592D1D !important;
`;
const CategoryBreadcrumbsButtonIcon = styled(HomeOutlinedIcon)`
  margin: 0 !important;
`;

interface CategoryBreadcrumbsModel {
  endPath: string;
}
export const CategoryBreadcrumbs: FC<CategoryBreadcrumbsModel> = ({
  endPath,
}) => {
  return (
    <div role="presentation" onClick={handleClick}>
      <Breadcrumbs aria-label="breadcrumb">
        <CategoryBreadcrumbsButton
          variant="text"
          startIcon={<CategoryBreadcrumbsButtonIcon />}
        >
          Home
        </CategoryBreadcrumbsButton>
        <CategoryBreadcrumbsButton
          variant="text"
        >
          {endPath}
        </CategoryBreadcrumbsButton>
      </Breadcrumbs>
    </div>
  );
};