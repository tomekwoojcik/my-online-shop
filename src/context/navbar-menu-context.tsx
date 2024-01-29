import { createContext, useEffect, useReducer, useState } from "react";
import { PropsModel } from "../model/props-context-model";
import { apiGetCategories, CategoriesModel } from "../api/api-get-categories";
import { REDUCER_ACTION_TYPE, initState, reducer } from "../reducer/navbar-reducer";
import { useMediaQuery } from "@mui/material";

export interface StepperObjModel {
  key: number;
  label: string;
}

type VoidFunction = () => void;
export interface ContextModel {
  stepperTextArr: StepperObjModel[];
  updateSearchButtonState: (value: boolean) => void;
  handleNext: VoidFunction;
  handlePrevious: VoidFunction;
  mediaQueryMatches: boolean;
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
  const mediaQueryMatches: boolean = useMediaQuery("(min-width: 768px)");

  useEffect(() => {
    apiGetCategories("https://lopi2-backend-5517f8f04d28.herokuapp.com/api/")
      .then((res: CategoriesModel[] | undefined) => setCategories(res))
      .catch((err) => console.error(err));
  }, []);

  const updateSearchButtonState = (value: boolean): void => {
    dispatch({
      type: REDUCER_ACTION_TYPE.HANDLE_SEARCH_BUTTON,
      payload: value,
    });
  };

  const stepperTextArr: StepperObjModel[] = [
    { key: 1, label: "Darmowa wysyłka powyżej 200 zł" },
    { key: 2, label: "Twoje zamówienie jest dla nas wazne" },
  ];

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
        mediaQueryMatches,
        handleMenuBurger,
        categories,
      }}
    >
      {children}
    </NavbarMenuContext.Provider>
  );
};
