import { FC, Fragment } from "react";
import { CardContentCustomize, TypographyCustomize } from "./card-carousel-customize";

interface PropsModel {
  textLabel: string;
}

const CardCarousel: FC<PropsModel> = ({ textLabel }) => {
  return (
    <Fragment>
      <CardContentCustomize>
        <TypographyCustomize> {textLabel} </TypographyCustomize>
      </CardContentCustomize>
    </Fragment>
  );
};

export default CardCarousel;
