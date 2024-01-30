import { FC } from "react";
import { Box } from "@mui/material";
import { ArrButtonModel } from "../../../context/footerContext";
import HeadingFooter from "../heading-footer/heading-footer";
import { ButtonCustomize, ListCustomize } from "./other-menu-customize";


interface PropsModel {
  name: string;
  arr: ArrButtonModel[];
}

const OtherMenuBox: FC<PropsModel> = ({ name, arr }) => {
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
