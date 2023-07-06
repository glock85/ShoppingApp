import { Product } from "../models/products.models";
import Card from "@mui/material/Card";
import CardMedia from "@mui/material/CardMedia";
import { Box, Grid, SelectChangeEvent } from "@mui/material";
import { useDispatch } from "react-redux";
import { addToCart, removeFromCart } from "../store/products/productsSlice";
import { useState } from "react";
import { ButtonAddToCart, ContentProduct, FormQuantity } from ".";

export const ProductCard = ({ product }: { product: Product }) => {
  const currentDate = new Date().toISOString().split("T")[0];
  const isExpired = product.validityDate < currentDate;

  const [quantity, setQuantity] = useState(0);
  const dispatch = useDispatch();

  const handleAddToCart = () => {
    dispatch(addToCart(product.id));
    if (quantity > 0) {
      for (let i = 0; i < quantity - 1 && i < 9; i++) {
        dispatch(addToCart(product.id));
      }
    } else {
      dispatch(removeFromCart(product.id));
    }
  };

  const handleChange = (event: SelectChangeEvent<number>) => {
    const value = Number(event.target.value);
    setQuantity(value);
  };

  return (
    <Grid
      item
      xs={12}
      sm={6}
      md={4}
      lg={3}
      sx={{ justifyContent: "center", display: "flex" }}
    >
      <Card sx={{ maxWidth: 345, height: "100%" }}>
        <Grid container direction="column" height="100%">
          <Grid item>
            <CardMedia
              sx={{ height: 180 }}
              image={product.image}
              title={product.name}
            />
          </Grid>
          <ContentProduct product={product} />
          <Box
            sx={{
              display: "flex",
              justifyContent: "space-evenly",
              alignItems: "center",
            }}
          >
            <ButtonAddToCart
              handleAddToCart={handleAddToCart}
              isExpired={isExpired}
            />
            <FormQuantity
              isExpired={isExpired}
              quantity={quantity}
              handleChange={handleChange}
            />
          </Box>
        </Grid>
      </Card>
    </Grid>
  );
};
