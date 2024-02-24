import { FC, useState } from "react";
import EmailOutlinedIcon from "@mui/icons-material/EmailOutlined";
import {
  FormControlCustomize,
  TextFieldCustomize,
  IconButtonCustomize,
} from "./form-subscription-footer-customize";

const FormSubscriptionFooter: FC = () => {
  const [handleEmail, setHandleEmail] = useState<string>("");

  const getEmail = (): void => {
    handleEmail;
  };

  return (
    <FormControlCustomize>
      <TextFieldCustomize
        id="standard-basic"
        label="Email"
        variant="standard"
        color="secondary"
        onChange={(e) => setHandleEmail(e.target.value)}
      />
      <IconButtonCustomize onClick={() => getEmail()}>
        <EmailOutlinedIcon color="secondary" />
      </IconButtonCustomize>
    </FormControlCustomize>
  );
};

export default FormSubscriptionFooter;
