import { FC } from "react";
import { Box } from "@mui/material";
import { ArrButtonModel } from "../../../state/state";
import HeadingFooter from "../heading-footer/heading-footer";
import { ButtonCustomize, ListCustomize } from "./other-menu-customize";


interface OtherMenuPropsModel {
  name: string;
  arr: ArrButtonModel[];
}

const OtherMenuBox: FC<OtherMenuPropsModel> = ({ name, arr }) => {
  return (
    <Box>
      <HeadingFooter heading={name} />
      <ListCustomize>
        {arr.map((obj: ArrButtonModel, idx: number) => (
          <ButtonCustomize key={idx} variant="text">
            {obj.heading}
          </ButtonCustomize>
        ))}
      </ListCustomize>
    </Box>
  );
};

export default OtherMenuBox;
