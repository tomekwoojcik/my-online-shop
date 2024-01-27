import { FC, useContext } from "react";
import EmailOutlinedIcon from '@mui/icons-material/EmailOutlined';
import { FormControlCustomize, TextFieldCustomize, IconButtonCustomize } from "./form-subscription-footer-customize";
import { FooterContext } from "../../../context/footerContext";


const FormSubscriptionFooter: FC = () => {
  const { setHandleEmail, getEmail } = useContext(FooterContext);
  return (
    <FormControlCustomize>
      <TextFieldCustomize
        id="standard-basic"
        label="Email"
        variant="standard"
        color="secondary"
        onChange={(e) => setHandleEmail(e.target.value)}
      />
          <IconButtonCustomize onClick={()=> getEmail()}>
        <EmailOutlinedIcon color="secondary"/>
      </IconButtonCustomize >
    </FormControlCustomize>
  );
};

export default FormSubscriptionFooter;
