import { Grid, useMediaQuery } from "@mui/material";
import { FC, useEffect, useState } from "react";
import styled from "styled-components";
import { ProductsModel, apiGetProducts } from "../../../api/api-get-products";
import {
  apiPath,
  breakpointViewSize,
  initialProductStatus,
  initialQuantityOfProductsFullView,
  initialQuantityOfProductsMobileView,
  initialWidthProduct,
  initialWidthProductMobile,
} from "../../../state/state";
import { ProductModel } from "../../../api/api-product";
import adventure from "../../../assets/products/ethiopia/adventure.png";
import CategoriesBoxProductsFormControl from "./categories-box-products-form-control";
import CategoriesBoxProductsBoxButton from "./categories-box-products-box-button";
import CategoriesBoxProductsCart from "./categories-box-products-cart";

const ProductsBox = styled(Grid)`
  padding-top: 110px;
  padding-left: 20px;
  padding-bottom: 20px;
  background-color: #f2efe9;
`;

const CategoriesBoxProducts: FC = () => {
  const breakpoint = useMediaQuery(breakpointViewSize);
  const startProductOfPage: number = breakpoint
    ? initialQuantityOfProductsFullView
    : initialQuantityOfProductsMobileView;
  const [numberOfProductsOnThePage, setNumberOfProductsOnThePage] =
    useState<number>(startProductOfPage);
  const [productsArr, setProductsArr] = useState<ProductModel[]>([]);
  const [productsObj, setProductsObj] = useState<ProductsModel | undefined>();
  const [page, setPage] = useState<number>(0);

  useEffect(() => {
    const fetchProducts = async () => {
      const productsObj: ProductsModel | undefined = await apiGetProducts(
        apiPath,
        page,
        numberOfProductsOnThePage
      );
      if (productsObj) {
        const filteredProducts = productsObj.products.filter(
          (obj: ProductModel) => obj.status === initialProductStatus
        );
        setProductsObj(productsObj);
        setProductsArr(filteredProducts);
      }
    };

    fetchProducts();
  }, [breakpoint, page, numberOfProductsOnThePage]);
  return (
    <>
      <CategoriesBoxProductsFormControl
        numberOfProductsOnThePage={numberOfProductsOnThePage}
        setNumberOfProductsOnThePage={setNumberOfProductsOnThePage}
      />
      <ProductsBox
        sx={{
          width: breakpoint ? initialWidthProduct : initialWidthProductMobile,
          paddingRight: "20px",
        }}
        item
        xs={12}
        rowSpacing={4}
        columnSpacing={1}
        container
      >
        {productsArr.map((productObj: ProductModel, idx: number) => (
          <Grid
            item
            key={idx}
            xs={6}
            lg={4}
          >
            <CategoriesBoxProductsCart
              breakpoint={breakpoint}
              imgSrc={adventure}
              productObj={productObj}
            />
          </Grid>
        ))}
      </ProductsBox>
      <CategoriesBoxProductsBoxButton
        breakpoint={breakpoint}
        hasNext={!productsObj?.hasNext}
        hasPrevious={!productsObj?.hasPrevious}
        setPage={setPage}
        page={page}
      />
    </>
  );
};

export default CategoriesBoxProducts;
