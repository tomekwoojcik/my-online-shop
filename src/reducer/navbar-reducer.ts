/* eslint-disable @typescript-eslint/no-explicit-any */

export const initState = {
  searchButtonToggle: true,
  activeStep: 0,
  burgerToggle: true,
};

export enum REDUCER_ACTION_TYPE {
  HANDLE_SEARCH_BUTTON,
  HANDLE_STEP,
  HANDLE_BURGER_MENU,
}

export type ReducerAction = {
  type: REDUCER_ACTION_TYPE;
  payload?: any;
};

export const reducer = (state: typeof initState, action: ReducerAction) => {
  switch (action.type) {
    case REDUCER_ACTION_TYPE.HANDLE_SEARCH_BUTTON:
      return { ...state, searchButtonToggle: !action.payload };
    case REDUCER_ACTION_TYPE.HANDLE_STEP:
      return { ...state, activeStep: action.payload ?? 0 };
    case REDUCER_ACTION_TYPE.HANDLE_BURGER_MENU:
      return { ...state, burgerToggle: !action.payload };
    default:
      throw new Error();
  }
};

