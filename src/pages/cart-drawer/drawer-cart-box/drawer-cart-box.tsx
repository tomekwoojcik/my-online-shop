import { Box, List, Typography } from "@mui/material";
import { FC, useEffect, useState } from "react";
import styled from "styled-components";

import axios from "axios";
import { ProductModel } from "../../../api/api-product";
import DrawerCartBoxItem from "../drawer-cart-box-item/drawer-cart-box-item";
import { fontFamily } from "../../../state/state";

const apiCartPath: string = "cart";

export interface CartProductModel {
  product: ProductModel;
  quantity: number;
}

export interface CartModel {
  uuid: string;
  cartItems: CartProductModel[];
  totalPrice: number;
  totalQuantity: number;
}

const apiGetCart = async (url: string): Promise<CartModel | undefined> => {
  const apiUrl: string = url + apiCartPath;
  try {
    const response = await axios.get<CartModel>(apiUrl, {
      withCredentials: true,
    });
    return response.data;
  } catch (error) {
    console.log(error);
  }
};

const BoxCart = styled(Box)`
  padding: 30px;
`;

const HeaderBoxCart = styled(Typography)`
  font-family:${fontFamily};
  font-size: 16px !important;
  font-weight: 500 !important;
  line-height: 23px !important;
  letter-spacing: 0em !important;
  text-align: left !important;
`;

const DrawerCartBox: FC = () => {
  const [cart, setCart] = useState<CartModel | undefined>(undefined);
  useEffect(() => {
    const getChartData = async () => {
      const cartData = await apiGetCart(
        `https://lopi2-backend-5517f8f04d28.herokuapp.com/api/`
      );
      setCart(cartData);
    };
    getChartData();
  }, []);
    console.log(cart);
  return (
    <BoxCart>
      <HeaderBoxCart variant="h3">Twój koszyk</HeaderBoxCart>
      <List>
        {cart?.cartItems.map((cartItem: CartProductModel, idx: number) => (
            <DrawerCartBoxItem key={idx} cartItem={cartItem} idx={idx} lastIdx ={cart.cartItems.length} />
        ))}
      </List>
    </BoxCart>
  );
};

export default DrawerCartBox;
