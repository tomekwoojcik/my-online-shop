import { Button, Dialog } from "@mui/material";

import TuneIcon from "@mui/icons-material/Tune";
import { FC, useState } from "react";
import { CategoryBoxMenuMobile } from "./categories-box-menu-mobile";

interface CategoryDialogPropsModel {
  activeCategory: number | null;
  handleButtonCategory: (arrIndex: number, endPath: string) => void;
}

export const CategoryDialog: FC<CategoryDialogPropsModel> = ({
  activeCategory,
  handleButtonCategory,
}) => {
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
        <CategoryBoxMenuMobile
          activeCategory={activeCategory}
          handleButtonCategory={handleButtonCategory}
        />
      </Dialog>
    </>
  );
};
