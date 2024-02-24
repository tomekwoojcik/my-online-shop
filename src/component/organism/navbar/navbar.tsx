import { FC } from "react";
import NavbarMenuLeft from "../../molecules/navbar-menu-Left/navbar-menu-left";
import NavbarMenuRight from "../../molecules/navbar-menu-right/navbar-menu-right";
import NavbarLogo from "../../atom/navbar-logo/navbar-logo";
import PopupsMenu from "../popups-menu/popups-menu";
import { AppBarCustomize } from "./navbar.styled";
import { CategoriesModel } from "../../../api/api-get-categories";
import {
  initState,
  REDUCER_ACTION_TYPE,
  ReducerAction,
} from "../../../reducer/navbar-reducer";

interface NavBarPropsModel {
  categories: CategoriesModel[];
  breakpointView: boolean;
  updateBurgerButton: VoidFunction;
  state: typeof initState;
  dispatch: React.Dispatch<ReducerAction>;
}

export const Navbar: FC<NavBarPropsModel> = ({
  categories,
  breakpointView,
  updateBurgerButton,
  state,
  dispatch,
}) => {
  const updateSearchButtonState = (): void => {
    dispatch({
      type: REDUCER_ACTION_TYPE.HANDLE_SEARCH_BUTTON,
      payload: state.searchButtonToggle,
    });
  };
  return (
    <AppBarCustomize position="static">
      {breakpointView ? (
        <PopupsMenu categories={categories} />
      ) : (
        <NavbarMenuLeft
          updateBurgerButton={updateBurgerButton}
          state={state}
          updateSearchButtonState={updateSearchButtonState}
        />
      )}
      {breakpointView ? <NavbarLogo /> : null}
      <NavbarMenuRight
        breakpointView={breakpointView}
        updateSearchButtonState={updateSearchButtonState}
        state={state}
      />
    </AppBarCustomize>
  );
};
