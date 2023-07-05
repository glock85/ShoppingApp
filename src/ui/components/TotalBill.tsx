import { Typography } from "@mui/material";

export const TotalBill = ({
  cart,
}: {
  cart: { product: { price: number }; quantity: number }[];
}) => {
  return (
    <Typography sx={{ padding: "10px", textAlign: "center" }}>
      <span>
        <strong>Total a facturar: </strong>
      </span>
      {cart.reduce(
        (acc, { product, quantity }) => acc + product.price * quantity,
        0
      )}
      €
    </Typography>
  );
};
