/* eslint-disable @typescript-eslint/no-explicit-any */

export const initState = {
  navbarSearchButtonToggle: true,
  activeStep: 0,
  burgerToggle: false,
  cartToggle: false,
};

export enum REDUCER_ACTION_TYPE {
  HANDLE_SEARCH_BUTTON,
  HANDLE_STEP,
  HANDLE_BURGER_MENU,
  HANDEL_CART_TOGGLE,
}

type ReducerAction = {
  type: REDUCER_ACTION_TYPE;
  payload?: any;
};

export const reducer = (state: typeof initState, action: ReducerAction) => {
  switch (action.type) {
    case REDUCER_ACTION_TYPE.HANDLE_SEARCH_BUTTON:
      return { ...state, navbarSearchButtonToggle: action.payload ?? false };
    case REDUCER_ACTION_TYPE.HANDLE_STEP:
      return { ...state, activeStep: action.payload ?? 0 };
    case REDUCER_ACTION_TYPE.HANDLE_BURGER_MENU:
      return { ...state, burgerToggle: action.payload ?? false };
    case REDUCER_ACTION_TYPE.HANDEL_CART_TOGGLE:
      return { ...state, cartToggle: action.payload ?? false };
    default:
      throw new Error();
  }
};
