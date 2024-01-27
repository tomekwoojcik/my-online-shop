import { createContext, useEffect, useReducer, useState } from "react";
import { propsModel } from "../model/propsContextModel";
import { apiGetCategories, CategoriesModel } from "../api/api-get-categories";
import { REDUCER_ACTION_TYPE, initState, reducer } from "../hooks/navbar-hooks";
import { useMediaQuery } from "@mui/material";

export interface contextModel {
  stepperTextArr: stepperObjModel[];
  toggleSearchButton: (value: boolean) => void;
  handleNext: () => void;
  handlePrevious: () => void;
  matches: boolean;
  handleMenuBurger: () => void;
  categories: CategoriesModel[] | undefined;
  state: {
    navbarSearchButtonToggle: boolean;
    activeStep: number;
    burgerToggle: boolean;
  };
}
export interface stepperObjModel {
  key: number;
  label: string;
}

export const NavbarMenuContext = createContext({} as contextModel);

export const NavbarMenuProvider = ({ children }: propsModel) => {
  const [state, dispatch] = useReducer(reducer, initState);
  const [categories, setCategories] = useState<CategoriesModel[] | undefined>();
  const matches: boolean = useMediaQuery("(min-width: 768px)");

  useEffect(() => {
    apiGetCategories("https://lopi2-backend-5517f8f04d28.herokuapp.com/api/")
      .then((res: CategoriesModel[] | undefined) => setCategories(res))
      .catch((err) => console.error(err));
  }, []);

  const toggleSearchButton = (value: boolean) => {
    dispatch({
      type: REDUCER_ACTION_TYPE.HANDLE_SEARCH_BUTTON,
      payload: value,
    });
  };

  const stepperTextArr: stepperObjModel[] = [
    { key: 1, label: "Darmowa wysyłka powyżej 200 zł" },
    { key: 2, label: "Twoje zamówienie jest dla nas wazne" },
  ];

  const handleNext = () => {
    dispatch({
      type: REDUCER_ACTION_TYPE.HANDLE_STEP,
      payload: ++state.activeStep,
    });
  };

  const handlePrevious = () => {
    dispatch({
      type: REDUCER_ACTION_TYPE.HANDLE_STEP,
      payload: --state.activeStep,
    });
  };

  const handleMenuBurger = () =>
    dispatch({
      type: REDUCER_ACTION_TYPE.HANDLE_BURGER_MENU,
      payload: !state.burgerToggle,
    });

  return (
    <NavbarMenuContext.Provider
      value={{
        toggleSearchButton,
        state,
        stepperTextArr,
        handleNext,
        handlePrevious,
        matches,
        handleMenuBurger,
        categories
      }}
    >
      {children}
    </NavbarMenuContext.Provider>
  );
};
