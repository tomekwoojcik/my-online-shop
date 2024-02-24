import { Button, Dialog } from "@mui/material";
import { useState } from "react";
import TuneIcon from "@mui/icons-material/Tune";
import { CategoryBoxMenuMobile } from "./category-box-menu-mobile";
export const CategoryDialog = () => {
  const [open, setOpen] = useState<boolean>(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <>
      <Button
        variant="text"
        sx={{ color: "#0F2615", marginLeft: "10px" }}
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
