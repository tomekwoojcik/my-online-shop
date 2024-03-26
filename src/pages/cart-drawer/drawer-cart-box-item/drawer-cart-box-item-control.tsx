import { IconButton } from "@mui/material"
import { Dispatch, FC,  } from "react"
import { ControlBox, CountBox, TypographyQuantity } from "./drawer-cart-box-item-styled"
import DeleteOutlinedIcon from "@mui/icons-material/DeleteOutlined";
import RemoveOutlinedIcon from "@mui/icons-material/RemoveOutlined";
import AddOutlinedIcon from "@mui/icons-material/AddOutlined";

const iconSize: string = "25px !important";

interface DrawerCartBoxItemControlInterface{
    setCartItemQuantity: Dispatch<React.SetStateAction<number>>;
    cartItemQuantity: number;
}

const DrawerCartBoxItemControl:FC<DrawerCartBoxItemControlInterface> = ({cartItemQuantity, setCartItemQuantity}) => {
    return (
        <ControlBox>
          <IconButton>
            <DeleteOutlinedIcon
              sx={{ width: iconSize, height: iconSize }}
            />
          </IconButton>

          <CountBox>
            <IconButton
              onClick={() => setCartItemQuantity(cartItemQuantity - 1)}
            >
              <RemoveOutlinedIcon />
            </IconButton>
            <TypographyQuantity>{cartItemQuantity}</TypographyQuantity>
            <IconButton>
              <AddOutlinedIcon
                onClick={() => setCartItemQuantity(cartItemQuantity + 1)}
              />
            </IconButton>
          </CountBox>
        </ControlBox>
    )
}

export default DrawerCartBoxItemControl