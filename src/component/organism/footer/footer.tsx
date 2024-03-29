import { Grid } from "@mui/material";
import { FC, useState } from "react";
import ContactBox from "../../molecules/contact-box/contact-box";
import CategoryBox from "../../atom/category-box/category-box";
import OtherMenuBox from "../../atom/other-menu-box/other-menu-box";
import SubscriptionBox from "../../molecules/subscription-box/subscription-box";
import { FooterBoxCustomize } from "./footer-customize";
import { CategoriesModel } from "../../../api/api-get-categories";
import { helpCenterArr } from "../../../state/state";

interface FooterPropsModel{
  categories: CategoriesModel[];
}

const Footer: FC<FooterPropsModel> = ({ categories }) => {
    const [handleEmail, setHandleEmail] = useState<string>("");
     const getEmail = (): void => {
      handleEmail
  }
  return (
    <FooterBoxCustomize
      sx={{
        padding: {
          md: "69px 79px !important" },
        width: { md: "calc( 100vw - 2*79px) !important" },
      }}
      component="footer"
    >
      <Grid container spacing={6}>
        <Grid xs={6} md={2} item>
          <ContactBox />
        </Grid>
        <Grid xs={6} md={2} item>
          <CategoryBox categories={categories} />
        </Grid>
        <Grid xs={6} md={2} item>
          <OtherMenuBox
            name={helpCenterArr[0].masterHeading}
            arr={helpCenterArr[0].arrButton}
          />
        </Grid>
        <Grid xs={6} md={2} item>
          <OtherMenuBox
            name={helpCenterArr[1].masterHeading}
            arr={helpCenterArr[1].arrButton}
          />
        </Grid>
        <Grid xs={0} md={2} item />

        <Grid xs={12} md={2} item>
          <SubscriptionBox getEmail={getEmail} setHandleEmail={setHandleEmail} />
        </Grid>
      </Grid>
    </FooterBoxCustomize>
  );
};

export default Footer;
