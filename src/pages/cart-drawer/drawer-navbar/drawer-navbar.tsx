import { Box, IconButton } from "@mui/material";
import { FC } from "react";
import styled from "styled-components";
import CloseOutlinedIcon from "@mui/icons-material/CloseOutlined";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import { BadgeCustomize } from "../../../component/molecules/navbar-menu-right/navbar-menu-right.styled";

interface DrawerNavbarInterface {
  stateCartToggle: boolean;
  updateCartButtonState: (value: boolean) => void;
}

const BoxNavbar = styled(Box)`
  height: 80px;
  background-color: #0f2615;
  padding: 20px;
  display:flex;
  justify-content: space-between;
`;

const CloseIcon = styled(CloseOutlinedIcon)`
  color: #f2efe9;
`;

const CartIcon = styled(ShoppingCartOutlinedIcon)`
  color: #f2efe9;
`;


const DrawerNavbar: FC<DrawerNavbarInterface> = ({
  stateCartToggle,
  updateCartButtonState,
}) => {
  return (
    <BoxNavbar>
      <IconButton onClick={() => updateCartButtonState(!stateCartToggle)}>
        <CloseIcon />
      </IconButton>

    <IconButton onClick={()=>updateCartButtonState(!stateCartToggle)} aria-label="cart">
        <BadgeCustomize badgeContent={1} color="secondary">
          <CartIcon />
        </BadgeCustomize>
      </IconButton>
    </BoxNavbar>
  );
};

export default DrawerNavbar;
