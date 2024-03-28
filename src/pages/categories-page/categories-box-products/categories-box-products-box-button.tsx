import { Box, Button } from "@mui/material";
import { Dispatch, FC } from "react";
import { initialWidthProduct, initialWidthProductMobile } from "../../../state/state";

interface CategoriesBoxProductsBoxButtonPropsModel{
    breakpoint: boolean;
    hasNext: boolean;
    hasPrevious: boolean;
    setPage: Dispatch<React.SetStateAction<number>>;
    page: number;
}

const CategoriesBoxProductsBoxButton:FC<CategoriesBoxProductsBoxButtonPropsModel> = ({breakpoint,hasNext, hasPrevious, setPage, page}) => {
    return (
        <Box sx={{
          width: breakpoint ? initialWidthProduct : initialWidthProductMobile,
          display:"flex",
        }}>
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
          disabled={hasNext}
          onClick={() => {
            setPage(page + 1);
          }}
        >
          pokaż więcej
        </Button>
          <Button
            sx={{
              textTransform: "none",
              fontFamily: "Quicksand !important",
              fontSize: "16px !important",
              fontWeight: "600 !important",
              margin: "0 auto !important",
            }}
            disabled={hasPrevious}
            color="secondary"
            variant="outlined"
            onClick={() => setPage(page - 1)}
          >
            poprzednia strona
          </Button>
      </Box>
    )
}

export default CategoriesBoxProductsBoxButton;