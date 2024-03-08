import { Button, Dialog } from "@mui/material";
import { useContext } from "react";

import TuneIcon from "@mui/icons-material/Tune";
import { CategoryBoxMenuMobile } from "./categories-box-menu-mobile";
import { CategoryShopContext } from "../categories-shop-context";
export const CategoryDialog = () => {
  const { open, handleClickOpen, handleClose } =
    useContext(CategoryShopContext);
  return (
    <>
      <Button
        variant="text"
        sx={{ color: "#0F2615", marginLeft:"10px" }}
        onClick={handleClickOpen}
        startIcon={<TuneIcon />}
      >
        Filtrowanie
      </Button>
      <Dialog
        sx={{ width: "100% !important" }}
        maxWidth={"xl"}
        open={open}
        onClose={handleClose}
        aria-labelledby="responsive-dialog-title"
      >
        <CategoryBoxMenuMobile />
      </Dialog>
    </>
  );
};
