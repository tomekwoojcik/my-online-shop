import { Box } from "@mui/material";
import { FC } from "react";
import styled from "styled-components";
import AddShoppingCartOutlinedIcon from "@mui/icons-material/AddShoppingCartOutlined";

const ButtonStyled = styled(Box)`
  width: 40px !important;
  height: 40px !important;
  border-radius: 100% !important;
  background-color: #ff9a17 !important;
  color: #FFF !important;
  padding: 0 !important;
  min-width: 0 !important;
  align-self: end;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const CategoriesBoxProductsCartButton: FC = () => {
  return (
    <ButtonStyled>
      <AddShoppingCartOutlinedIcon />
    </ButtonStyled>
  );
};

export default CategoriesBoxProductsCartButton;
