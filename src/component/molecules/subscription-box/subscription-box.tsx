import { Box } from "@mui/material"
import { FC } from "react"
import HeadingFooter from "../../atom/heading-footer/heading-footer"
import ParagraphFooter from "../../atom/paragraph-footer/paragraph-footer"
import FormSubscriptionFooter from "../../atom/form-subscription-footer/form-subscription-footer"

const SubscriptionBox:FC = () => {
    return (
        <Box>
            <HeadingFooter heading="SUBSKRYPCJA" />
            <ParagraphFooter text="Zapisz się do naszej subskrybcji, a otrzymasz 10% rabatu na pierwsze zakupy." />
            <FormSubscriptionFooter/>
        </Box>
    )
}

export default SubscriptionBox