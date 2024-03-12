import { Box, Button } from "@mui/material";
import { FC, useEffect, useState } from "react";
import styled from "styled-components";
import { ProductsModel, apiGetProducts } from "../../../api/api-get-products";
import { apiPath } from "../../../state/state";
import { ProductModel } from "../../../api/api-product";
import InfoDiscount from "./info-discount-box";
import CategoriesBoxProductsCartButton from "./categories-box-products-cart-button";
import CategoriesBoxProductsInfo from "./categories-box-products-info";
const SingleProductBox = styled(Box)``;
const productsObj: ProductsModel | undefined = await apiGetProducts(apiPath);
const { products } = productsObj || { products: [] };

const ProductImage = styled(Box)`
  width: calc(330px - 40px) !important;
  height: calc(330px - 40px) !important;
  padding: 10px !important;
  display: flex !important;
  flex-direction: column !important;
  justify-content: space-between !important;
`;

const ProductsBox = styled(Box)`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  padding: 20px;
`;

const CategoriesBoxProducts: FC = () => {
  const [productsArr, setProductsArr] = useState(products);
  console.log(products);

  useEffect(() => {
    const filterProducts: ProductModel[] = products.filter(
      (obj: ProductModel) => {
        return obj.status == "ACTIVE";
      }
    );
    setProductsArr(filterProducts);
  }, []);

  return (
    <ProductsBox>
      {productsArr.map((productObj: ProductModel) => (
        <Button>
          <SingleProductBox key={productObj.sku}>
            <ProductImage>
              <InfoDiscount
                discountPrice={productObj.discountPrice}
                regularPrice={productObj.regularPrice}
                discountPriceEndDate={productObj.discountPriceEndDate}
              />
              <CategoriesBoxProductsCartButton />
            </ProductImage>
            <CategoriesBoxProductsInfo
              value={productObj.quantity}
              productName={productObj.name}
              price={productObj.regularPrice}
              discountPrice={productObj.discountPrice}
              discountDate={productObj.discountPriceEndDate}
            />
          </SingleProductBox>
        </Button>
      ))}
    </ProductsBox>
  );
};

export default CategoriesBoxProducts;
