import { FC } from "react"
import { TypographyBoxHeader } from "./category-box-menu-header.styled"
interface PropsModel{
    textHeader:string
}

const CategoryBoxMenuHeader: FC<PropsModel> = ({textHeader}) => {
    return (
        <TypographyBoxHeader variant="h5">{textHeader}</TypographyBoxHeader>

    )
}

export default CategoryBoxMenuHeader