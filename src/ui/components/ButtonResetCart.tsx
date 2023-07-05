import { Button, Typography } from "@mui/material";

export const ButtonResetCart = ({ resetCart }: { resetCart: () => void }) => {
  return (
    <Button
      onClick={() => resetCart()}
      variant="contained"
      color="error"
      sx={{ width: "100%", borderRadius: 0 }}
    >
      <Typography>Vaciar carrito</Typography>
    </Button>
  );
};
