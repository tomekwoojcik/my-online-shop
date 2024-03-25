import { FC, useReducer } from "react";
import NavbarMenuLeft from "../../molecules/navbar-menu-Left/navbar-menu-left";
import NavbarMenuRight from "../../molecules/navbar-menu-right/navbar-menu-right";
import NavbarLogo from "../../atom/navbar-logo/navbar-logo";
import PopupsMenu from "../popups-menu/popups-menu";
import { AppBarCustomize } from "./navbar.styled";
import { CategoriesModel } from "../../../api/api-get-categories";
import { useMediaQuery } from "@mui/material";
import { breakpointViewSize } from "../../../state/state";
import {
  reducer,
  initState,
  REDUCER_ACTION_TYPE,
} from "../../../reducer/navbar-reducer";
import CartDrawer from "../../../pages/cart-drawer/cart-drawer";

interface NavBarPropsModel {
  categories: CategoriesModel[];
}

export const Navbar: FC<NavBarPropsModel> = ({ categories }) => {
  const [state, dispatch] = useReducer(reducer, initState);

  const handleMenuBurger: VoidFunction = () =>
    dispatch({
      type: REDUCER_ACTION_TYPE.HANDLE_BURGER_MENU,
      payload: !state.burgerToggle,
    });

  const updateSearchButtonState = (value: boolean): void => {
    dispatch({
      type: REDUCER_ACTION_TYPE.HANDLE_SEARCH_BUTTON,
      payload: value,
    });
  };

  const updateCartButtonState = (value: boolean): void => {
    dispatch({
      type: REDUCER_ACTION_TYPE.HANDEL_CART_TOGGLE,
      payload: value,
    });
  };

  return (
    <AppBarCustomize position="static">
      {useMediaQuery(breakpointViewSize) ? (
        <PopupsMenu categories={categories} />
      ) : (
        <NavbarMenuLeft
          updateSearchButtonState={updateSearchButtonState}
          handleMenuBurger={handleMenuBurger}
          state={state}
        />
      )}
      {useMediaQuery(breakpointViewSize) ? <NavbarLogo /> : null}
      <NavbarMenuRight
        updateCartButtonState={updateCartButtonState}
        state={state}
        updateSearchButtonState={updateSearchButtonState}
      />
      <CartDrawer state={state} updateCartButtonState={updateCartButtonState} />
    </AppBarCustomize>
  );
};
