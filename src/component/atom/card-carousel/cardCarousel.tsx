import { FC, Fragment } from "react";
import { CardContentCustomize, TypographyCustomize } from "./cardCarouselCustomize";

interface propsModel {
  textLabel: string;
}

const CardCarousel: FC<propsModel> = ({ textLabel }) => {
  return (
    <Fragment>
      <CardContentCustomize>
        <TypographyCustomize> {textLabel} </TypographyCustomize>
      </CardContentCustomize>
    </Fragment>
  );
};

export default CardCarousel;
