import { FC } from "react";
import DrawerNavbar from "./drawer-navbar/drawer-navbar";
import { Box, Drawer } from "@mui/material";
import { initState } from "../../reducer/navbar-reducer";
import DrawerCartBox from "./drawer-cart-box/drawer-cart-box";
import { backgroundColor } from "../../state/state";

interface CartDrawerInterface {
  state: typeof initState;
  updateCartButtonState: (value: boolean) => void;
}

const CartDrawer: FC<CartDrawerInterface> = ({
  state,
  updateCartButtonState,
}) => {
  return (
    <Drawer
      anchor="right"
      open={state.cartToggle}
      onClose={() => updateCartButtonState(!state.cartToggle)}
    >
      <Box
        sx={{ width: "433px", height:"100vh", backgroundColor: backgroundColor }}
        role="presentation"
      >
        <DrawerNavbar
          stateCartToggle={state.cartToggle}
          updateCartButtonState={updateCartButtonState}
        />
        <DrawerCartBox />
      </Box>
    </Drawer>
  );
};

export default CartDrawer;
