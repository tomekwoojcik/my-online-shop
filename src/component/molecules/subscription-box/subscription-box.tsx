import { Box } from "@mui/material"
import { Dispatch, FC, SetStateAction } from "react"
import HeadingFooter from "../../atom/heading-footer/heading-footer"
import ParagraphFooter from "../../atom/paragraph-footer/paragraph-footer"
import FormSubscriptionFooter from "../../atom/form-subscription-footer/form-subscription-footer"

interface SubscriptionBoxPropsModel{
    getEmail: () => void;
    setHandleEmail: Dispatch<SetStateAction<string>>
}

const SubscriptionBox:FC<SubscriptionBoxPropsModel> = ({getEmail, setHandleEmail}) => {
    return (
        <Box>
            <HeadingFooter heading="SUBSKRYPCJA" />
            <ParagraphFooter text="Zapisz się do naszej subskrybcji, a otrzymasz 10% rabatu na pierwsze zakupy." />
            <FormSubscriptionFooter getEmail={getEmail} setHandleEmail={setHandleEmail}/>
        </Box>
    )
}

export default SubscriptionBox