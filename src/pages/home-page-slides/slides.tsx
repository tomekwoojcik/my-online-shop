import { FC } from "react";
import HomePageSlides from "./home-page-slides";
import HomePageSlidesMobile from "./home-page-slides-mobile-width";
import { breakpointViewSize } from "../../state/state";
import { useMediaQuery } from "@mui/material";

const Slides: FC = () => {
  const breakpointView: boolean = useMediaQuery(breakpointViewSize);
  return breakpointView ? <HomePageSlides /> : <HomePageSlidesMobile />;
};

export default Slides;
