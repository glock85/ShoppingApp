import { Button, Grid } from "@mui/material";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";

export const ButtonAddToCart = ({
  handleAddToCart,
  isExpired,
}: {
  handleAddToCart: () => void;
  isExpired: boolean;
}) => {
  return (
    <Grid item>
      <Button
        data-testid="buttonAddToCart"
        variant="contained"
        startIcon={<ShoppingCartIcon />}
        sx={{ backgroundColor: "primary.main" }}
        onClick={handleAddToCart}
        disabled={isExpired}
      >
        Añadir al carrito
      </Button>
    </Grid>
  );
};
