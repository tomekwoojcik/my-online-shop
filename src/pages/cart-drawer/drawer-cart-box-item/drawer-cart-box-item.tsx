import { FC, useState } from "react";
import { ListItem } from "@mui/material";
import { CartProductModel } from "../drawer-cart-box/drawer-cart-box";
// import { grayColor } from "../../../state/state";
import { MasterBoxItem } from "./drawer-cart-box-item-styled";
import DrawerCartBoxItemContentBox from "./drawer-cart-box-item-content-box";
import DrawerCartBoxItemControl from "./drawer-cart-box-item-control";
interface DrawerCartBoxItemInterface {
  cartItem: CartProductModel;
  idx: number;
  lastIdx: number;
}

const DrawerCartBoxItem: FC<DrawerCartBoxItemInterface> = ({ cartItem }) => {
  const [cartItemQuantity, setCartItemQuantity] = useState<number>(
    cartItem.quantity
  );

  return (
    <ListItem>
      <MasterBoxItem>
        <DrawerCartBoxItemContentBox cartItem={cartItem} />
        <DrawerCartBoxItemControl
          setCartItemQuantity={setCartItemQuantity}
          cartItemQuantity={cartItemQuantity}
        />
      </MasterBoxItem>
    </ListItem>
  );
};

export default DrawerCartBoxItem;