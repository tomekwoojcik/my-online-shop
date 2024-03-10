import { FC, useReducer } from "react";
import TextCarousel from "../text-carousel/text-carousel";
import MenuWrapper from "../../molecules/menu-wrapper/menu-wrapper";
import { CategoriesModel } from "../../../api/api-get-categories";
import { useMediaQuery } from "@mui/material";
import { breakpointViewSize } from "../../../state/state";
import { reducer, initState, REDUCER_ACTION_TYPE } from "../../../reducer/navbar-reducer";

interface PropsModel {
  categories: CategoriesModel[];
}

const BoxSliderMenu: FC<PropsModel> = ({ categories }) => {
  const [state, dispatch] = useReducer(reducer, initState);

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

  return (
    <>
      {useMediaQuery(breakpointViewSize) ? (
        <TextCarousel state={state} handleNext={handleNext} handlePrevious={handlePrevious} />
      ) : state.burgerToggle ? (
        <MenuWrapper categories={categories} />
      ) : (
        <TextCarousel state={state} handleNext={handleNext} handlePrevious={handlePrevious} />
      )}
    </>
  );
};

export default BoxSliderMenu;
