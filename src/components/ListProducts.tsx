import { ProductCard } from ".";
import { Alert, Grid } from "@mui/material";
import { RootState } from "../store";
import { useSelector } from "react-redux";
import { Product } from "../models/products.models";

export const ListProducts = () => {
  const sortedProducts = useSelector(
    (state: RootState) => state.products.products
  );
  const noMatches = sortedProducts.length === 0;
  return (
    <Grid container spacing={2}>
      {noMatches ? (
        <Alert severity="error">No se encontraron coincidencias.</Alert>
      ) : (
        sortedProducts.map((product: Product) => (
          <ProductCard key={product.id} product={product} />
        ))
      )}
    </Grid>
  );
};
