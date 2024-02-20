import { FC, useContext } from "react";
import { SlidesContext } from "./home-page-slides-context";
import HomePageSlides from "./home-page-slides";
import HomePageSlidesMobile from "./home-page-slides-mobile-width";

const Slides: FC = () => {
    const {breakpointView} = useContext(SlidesContext);
    return (
        breakpointView ? <HomePageSlides/> : <HomePageSlidesMobile/>
    )
}

export default Slides;