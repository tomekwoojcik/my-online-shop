import { Dispatch, FC, SetStateAction } from "react";
import EmailOutlinedIcon from '@mui/icons-material/EmailOutlined';
import { FormControlCustomize, TextFieldCustomize, IconButtonCustomize } from "./form-subscription-footer-customize";

interface FormSubscriptionFooterPropsModel{
    getEmail: () => void;
    setHandleEmail: Dispatch<SetStateAction<string>>
}

const FormSubscriptionFooter: FC<FormSubscriptionFooterPropsModel> = ({getEmail, setHandleEmail}) => {
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
