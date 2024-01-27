import { FC } from 'react'
import { TypographyHeadingCustomize } from './heading-footer-customize';
interface PropsModel {
    heading: string;
}

const HeadingFooter:FC<PropsModel> = ({heading}) => {
    return (
        <TypographyHeadingCustomize variant="h5">
            {heading}
          </TypographyHeadingCustomize>
    )
}

export default HeadingFooter