import { Badge, Box, Button, Menu } from "@mui/material";
import {
  removeFromCart,
  resetProductsState,
} from "../../store/products/productsSlice";
import { useDispatch, useSelector } from "react-redux";
import { useState } from "react";
import { RootState } from "../../store";

import Fade from "@mui/material/Fade";
import { ButtonResetCart, CartItem, TotalBill } from ".";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";

export const CartListProducts = () => {
  const dispatch = useDispatch();
  const cart = useSelector((state: RootState) => state.products.cart);

  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);

  const removeFromCartHandler = (id: number) => {
    dispatch(removeFromCart(id));
  };
  const resetCart = () => dispatch(resetProductsState());
  const handleClose = () => {
    setAnchorEl(null);
  };

  const open = Boolean(anchorEl);
  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  return (
    <>
      <Box sx={{ display: { md: "flex" } }}>
        <Button
          id="fade-button"
          aria-controls={open ? "fade-menu" : undefined}
          aria-haspopup="true"
          aria-expanded={open ? "true" : undefined}
          onClick={handleClick}
        >
          <Badge badgeContent={cart.length} color="error">
            <ShoppingCartIcon sx={{ color: "white" }} />
          </Badge>
        </Button>
        {cart.length > 0 && (
          <Menu
            id="fade-menu"
            MenuListProps={{
              "aria-labelledby": "fade-button",
            }}
            anchorEl={anchorEl}
            open={open}
            onClose={handleClose}
            TransitionComponent={Fade}
          >
            {cart.map(({ product, quantity }) => (
              <CartItem
                key={product.id}
                product={product}
                quantity={quantity}
                removeFromCartHandler={removeFromCartHandler}
              />
            ))}

            <ButtonResetCart resetCart={resetCart} />
            <TotalBill cart={cart} />
          </Menu>
        )}
      </Box>
    </>
  );
};
