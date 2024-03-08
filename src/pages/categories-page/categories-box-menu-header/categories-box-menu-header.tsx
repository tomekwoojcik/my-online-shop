import { FC } from "react"
import { TypographyBoxHeader } from "./categories-box-menu-header.styled"
interface PropsModel{
    textHeader:string
}

const CategoriesBoxMenuHeader: FC<PropsModel> = ({textHeader}) => {
    return (
        <TypographyBoxHeader variant="h5">{textHeader}</TypographyBoxHeader>

    )
}

export default CategoriesBoxMenuHeader