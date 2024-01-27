import { FC } from "react";
import InstagramIcon from "@mui/icons-material/Instagram";
import FacebookOutlinedIcon from "@mui/icons-material/FacebookOutlined";
import TwitterIcon from "@mui/icons-material/Twitter";
import YouTubeIcon from "@mui/icons-material/YouTube";
import { BoxSocialMediaCustomize, IconButtonCustomize } from "./box-social-media-customize";

const BoxSocialMedia: FC = () => {
  return (
    <BoxSocialMediaCustomize>
      <IconButtonCustomize color="secondary">
        <InstagramIcon />
      </IconButtonCustomize>
      <IconButtonCustomize color="secondary">
        <FacebookOutlinedIcon />
      </IconButtonCustomize>
      <IconButtonCustomize color="secondary">
        <TwitterIcon />
      </IconButtonCustomize>
      <IconButtonCustomize color="secondary">
        <YouTubeIcon />
      </IconButtonCustomize>
    </BoxSocialMediaCustomize>
  );
};

export default BoxSocialMedia;
