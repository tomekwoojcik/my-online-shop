import { Box } from "@mui/material";
import { FC } from "react";
import BoxSocialMedia from "../../atom/box-social-media/box-social-media";
import { ButtonCustomize } from "./contact-box-customize";
import HeadingFooter from "../../atom/heading-footer/heading-footer";
import ParagraphFooter from "../../atom/paragraph-footer/paragraph-footer";

const ContactBox: FC = () => {
  return (
    <Box>
      <HeadingFooter heading="Kontakt" />
      <ParagraphFooter text="ul. Wensu 1/6, 90-005 Mars" />
      <ButtonCustomize
        variant="text"
        rel="Contact email"
        href={`mailto:galaxy@gmail.com`}
      >
        Email: galaxy@gmail.com
      </ButtonCustomize>
      <ParagraphFooter text="Tel.: 123-456-789" />
      <BoxSocialMedia />
    </Box>
  );
};

export default ContactBox;
