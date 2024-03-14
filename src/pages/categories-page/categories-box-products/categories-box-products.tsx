import { Box, Button, Grid, useMediaQuery } from "@mui/material";
import { FC, useEffect, useState } from "react";
import styled from "styled-components";
import { ProductsModel, apiGetProducts } from "../../../api/api-get-products";
import { apiPath, breakpointViewSize } from "../../../state/state";
import { ProductModel } from "../../../api/api-product";
import InfoDiscount from "./info-discount-box";
import CategoriesBoxProductsCartButton from "./categories-box-products-cart-button";
import CategoriesBoxProductsInfo from "./categories-box-products-info";
import adventure from "../../../assets/products/ethiopia/adventure.png";

const ProductImage = styled(Box)`
  display: flex !important;
  flex-direction: column !important;
  justify-content: space-between !important;
`;

const ProductsBox = styled(Grid)`
  padding-top: 110px;
  padding-left: 20px;
  padding-bottom: 20px;
  background-color: #f2efe9;
`;

const CategoriesBoxProducts: FC = () => {
  const breakpoint = useMediaQuery(breakpointViewSize);
  const startProductOfPage: number = breakpoint ? 6 : 4;
  const [productsArr, setProductsArr] = useState<ProductModel[] | []>([]);
  const [hasNext, setHasNext] = useState<boolean>();
  const [hasPrevious, setHasPrevious] = useState<boolean>();
  const [productOfPage, setProductOfPage] =
    useState<number>(startProductOfPage);
  const [productsArrLength, setProductsArrLength] = useState<number>(0);
  const [page, setPage] = useState<number>(0);

  useEffect(() => {
    const fetchProducts = async () => {
      const productsObj: ProductsModel | undefined = await apiGetProducts(
        apiPath,
        page
      );
        console.log(productsObj);
      if (productsObj) {
        const filteredProducts = productsObj.products.filter(
          (obj: ProductModel) => obj.status === "ACTIVE"
        );
        setProductsArrLength(productsObj.products.length);
        setProductsArr(filteredProducts.slice(0, productOfPage));
        setHasNext(productsObj.hasNext);
        setHasPrevious(productsObj.hasPrevious);
      }
    };

    fetchProducts();
  }, [breakpoint, page, productOfPage, hasNext, hasPrevious]);

  

  return (
    <>
      <ProductsBox
        sx={{ width: breakpoint ? "72.9% !important" : "100% important" }}
        xs={12}
        container
      >
        {productsArr.map((productObj: ProductModel, idx: number) => (
          <Grid
            item
            key={idx}
            xs={6}
            lg={4}
            sx={
              breakpoint
                ? {
                    width: "calc(33% - 10px)!important",
                    margin: "5px !important",
                    height: "450px",
                    maxWidth: "calc(33% - 10px)!important",
                  }
                : {
                    width: "calc(50vw - 20px) !important",
                    height: "calc(268px - 10px) !important",
                    margin: "5px !important",
                    maxWidth: "calc(50vw - 25px)!important",
                  }
            }
          >
            <ProductImage
              sx={{
                width: "calc(100% - 10px) !important",
                height: breakpoint
                  ? "calc(73% - 10px) !important"
                  : "calc(65% - 10px) !important",
                padding: "5px !important",
                background: `url(${adventure}) !important`,
                backgroundRepeat: "no-repeat !important",
                backgroundSize: "cover !important",
              }}
            >
              <InfoDiscount
                discountPrice={productObj.discountPrice}
                regularPrice={productObj.regularPrice}
                discountPriceEndDate={productObj.discountPriceEndDate}
              />
              {breakpoint ? <CategoriesBoxProductsCartButton /> : null}
            </ProductImage>
            <CategoriesBoxProductsInfo
              value={productObj.quantity}
              productName={productObj.name}
              price={productObj.regularPrice}
              discountPrice={productObj.discountPrice}
              discountDate={productObj.discountPriceEndDate}
            />
          </Grid>
        ))}
      </ProductsBox>
      <Box>
        {productOfPage != productsArrLength ? null : (
          <Button
            sx={{
              textTransform: "none",
              fontFamily: "Quicksand !important",
              fontSize: "16px !important",
              fontWeight: "600 !important",
              margin: "0 auto !important",
            }}
            disabled={!hasPrevious}
            color="secondary"
            variant="outlined"
            onClick={() => setPage(page - 1)}
          >
            poprzednia strona
          </Button>
        )}

          <Button
            sx={{
              textTransform: "none",
              fontFamily: "Quicksand !important",
              fontSize: "16px !important",
              fontWeight: "600 !important",
              margin: "0 auto !important",
            }}
            color="secondary"
                  variant="outlined"
                  disabled={productOfPage != 10 ? false : true}
            onClick={() => {
              productOfPage != 4
                ? setProductOfPage(productsArrLength)
                : setProductOfPage(8);
            }}
          >
            pokaż więcej
          </Button>
        {productOfPage != productsArrLength ? null : (
          <Button
            sx={{
              textTransform: "none",
              fontFamily: "Quicksand !important",
              fontSize: "16px !important",
              fontWeight: "600 !important",
              margin: "0 auto !important",
            }}
            disabled={!hasNext}
            color="secondary"
            variant="outlined"
            onClick={() => setPage(page + 1)}
          >
            następna strona
          </Button>
        )}
      </Box>
    </>
  );
};

export default CategoriesBoxProducts;
