import { Box, CardContent, Grid, Typography } from "@mui/material";
import { Product } from "../models/products.models";

export const ContentProduct = ({ product }: { product: Product }) => {
  return (
    <Grid item sx={{ flexGrow: 1 }}>
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {product.name}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {product.description}
        </Typography>
        <Box>
          <Typography variant="body2" mt={2} sx={{ fontWeight: "bold" }}>
            <span style={{ textAlign: "right", fontSize: "1rem" }}>
              Fecha de caducidad:{" "}
            </span>
            {product.validityDate}
          </Typography>
        </Box>

        <Typography
          variant="body2"
          sx={{
            fontWeight: "bold",
            textAlign: "right",
            fontSize: "1.2rem",
          }}
        >
          {product.price} €
        </Typography>
      </CardContent>
    </Grid>
  );
};
