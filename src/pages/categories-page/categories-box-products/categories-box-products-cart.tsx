import { FC } from "react";
import { ProductModel } from "../../../api/api-product";
import { Card, CardActionArea, CardMedia, CardContent } from "@mui/material";
import CategoriesBoxProductsCartButton from "./categories-box-products-cart-button";
import CategoriesBoxProductsInfo from "./categories-box-products-info";
import InfoDiscount from "./info-discount-box";

interface CategoriesBoxProductsCartPropsModel{
    breakpoint: boolean;
    imgSrc: string;
    productObj: ProductModel,
}

const CategoriesBoxProductsCart:FC<CategoriesBoxProductsCartPropsModel> = ({breakpoint, imgSrc, productObj}) => {
    return (
       <Card>
              <CardActionArea>
                <CardMedia
                  sx={{
                    background: `url(${imgSrc})`,
                    backgroundSize: "cover",
                    backgroundRepeat: "no-repeat",
                    height: breakpoint ? "310px" : "145px",
                    width: "calc(100% - 20px)",
                    backgroundPosition: "center",
                    display: "flex",
                    padding: "10px",
                    justifyContent: "space-between",
                  }}
                >
                  <InfoDiscount
                    discountPrice={productObj.discountPrice}
                    regularPrice={productObj.regularPrice}
                    discountPriceEndDate={productObj.discountPriceEndDate}
                  />
                  {breakpoint ? <CategoriesBoxProductsCartButton /> : null}
                </CardMedia>
                <CardContent sx={{ backgroundColor: "#f2efe9" }}>
                  <CategoriesBoxProductsInfo
                    value={productObj.quantity}
                    productName={productObj.name}
                    price={productObj.regularPrice}
                    discountPrice={productObj.discountPrice}
                    discountDate={productObj.discountPriceEndDate}
                  />
                </CardContent>
              </CardActionArea>
            </Card>
    )
}

export default CategoriesBoxProductsCart