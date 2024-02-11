import { createContext, useEffect, useReducer, useState } from "react";
import { PropsModel } from "../model/props-context-model";
import { apiGetCategories, CategoriesModel } from "../api/api-get-categories";
import { REDUCER_ACTION_TYPE, initState, reducer } from "../reducer/navbar-reducer";
import { useMediaQuery } from "@mui/material";
import { aboutUsArr, apiPath, stepperTextArr } from "../state/state";

export interface StepperObjModel {
  key: number;
  label: string;
}

type VoidFunction = () => void;
export interface ContextModel {
  aboutUsArr : CategoriesModel[]
  stepperTextArr: StepperObjModel[];
  updateSearchButtonState: (value: boolean) => void;
  handleNext: VoidFunction;
  handlePrevious: VoidFunction;
  breakpointView: boolean;
  handleMenuBurger: VoidFunction;
  categories?: CategoriesModel[];
  state: {
    navbarSearchButtonToggle: boolean;
    activeStep: number;
    burgerToggle: boolean;
  };
}

export const NavbarMenuContext = createContext({} as ContextModel);

export const NavbarMenuProvider = ({ children }: PropsModel) => {
  const [state, dispatch] = useReducer(reducer, initState);
  const [categories, setCategories] = useState<CategoriesModel[]>();
  const breakpointView: boolean = useMediaQuery("(min-width: 768px)");

  useEffect(() => {
    apiGetCategories(apiPath)
      .then((res: CategoriesModel[] | undefined) => setCategories(res))
      .catch((err) => console.error(err));
  }, []);

  const updateSearchButtonState = (value: boolean):void => {
    dispatch({
      type: REDUCER_ACTION_TYPE.HANDLE_SEARCH_BUTTON,
      payload: value,
    })};

    const handleNext: VoidFunction = () => {
      dispatch({
        type: REDUCER_ACTION_TYPE.HANDLE_STEP,
        payload: ++state.activeStep,
      });
    };

    const handlePrevious: VoidFunction = () => {
      dispatch({
        type: REDUCER_ACTION_TYPE.HANDLE_STEP,
        payload: --state.activeStep,
      });
    };

    const handleMenuBurger: VoidFunction = () =>
      dispatch({
        type: REDUCER_ACTION_TYPE.HANDLE_BURGER_MENU,
        payload: !state.burgerToggle,
      });

    return (
      <NavbarMenuContext.Provider
        value={{
          updateSearchButtonState,
          state,
          stepperTextArr,
          handleNext,
          handlePrevious,
          breakpointView,
          handleMenuBurger,
          aboutUsArr,
          categories,
        }}
      >
        {children}
      </NavbarMenuContext.Provider>
    );
  };
