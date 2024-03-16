import { FC } from "react"
import { useParams } from "react-router-dom"

const SingleProductPage: FC = () => {
    const { productId } = useParams();
    return (
        <div>
            Single product: {productId}
        </div>
    )
}

export default SingleProductPage