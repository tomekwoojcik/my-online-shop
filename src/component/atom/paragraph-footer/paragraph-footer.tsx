
import { FC } from 'react'
import { TypographyParagraphCustomize } from './paragraph-footer-customize';

interface PropsModel{
    text: string;
}

const ParagraphFooter:FC<PropsModel> = ({text}) => {
    return (
        <TypographyParagraphCustomize style={{
            textTransform: "none"}}>
            {text}
      </TypographyParagraphCustomize>
    )
}

export default ParagraphFooter