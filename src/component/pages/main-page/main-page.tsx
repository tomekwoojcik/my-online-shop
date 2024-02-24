import { FC, useReducer } from "react";
import { Navbar } from "../../organism/navbar/navbar";
import BoxSliderMenu from "../../organism/box-slider-menu/box-slider-menu";
import Footer from "../../organism/footer/footer";
import { Grid, ThemeProvider, useMediaQuery } from "@mui/material";
import { theme } from "../../../context/theme-context";
import { Outlet, useLoaderData } from "react-router";
import { CategoriesModel } from "../../../api/api-get-categories";
import {
  REDUCER_ACTION_TYPE,
  initState,
  reducer,
} from "../../../reducer/navbar-reducer";

export const MainPage: FC = () => {
  const category = useLoaderData() as CategoriesModel[];
  const breakpointView: boolean = useMediaQuery("(min-width: 768px)");
  const [state, dispatch] = useReducer(reducer, initState);

  const updateBurgerButton = (): void => {
    dispatch({
      type: REDUCER_ACTION_TYPE.HANDLE_BURGER_MENU,
      payload: state.burgerToggle,
    });
  };

  return (
    <ThemeProvider theme={theme}>
      <Grid className="container" container>
        <Grid item>
          <Navbar
            dispatch={dispatch}
            categories={category}
            state={state}
            updateBurgerButton={updateBurgerButton}
            breakpointView={breakpointView}
          />
          <BoxSliderMenu
            state={state}
            categories={category}
            breakpointView={breakpointView}
          />
        </Grid>
        <Grid item>
          <Outlet />
        </Grid>
        <Grid className="footer" item>
          <Footer categories={category} />
        </Grid>
      </Grid>
    </ThemeProvider>
  );
};
