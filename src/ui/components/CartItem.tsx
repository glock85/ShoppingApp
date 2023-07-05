import { Box, IconButton, Typography } from "@mui/material";
import DeleteOutlineTwoToneIcon from "@mui/icons-material/DeleteOutlineTwoTone";
import { Product } from "../../interfaces/interfaces";

export const CartItem = ({
  product,
  quantity,
  removeFromCartHandler,
}: {
  product: Product;
  quantity: number;
  removeFromCartHandler: (id: number) => void;
}) => {
  return (
    <Box
      key={product.id}
      sx={{
        display: "flex",
        justifyContent: "space-between",
        padding: "10px",
        alignItems: "center",
      }}
    >
      <img
        src={product.image}
        alt={product.name}
        style={{ width: "50px", height: "50px", borderRadius: "5px" }}
      />
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          alignItems: "flex-start",
          width: "100%",
          padding: "15px",
        }}
      >
        <Typography>
          <span>
            <strong>Producto: </strong>
          </span>
          {product.name.length > 20
            ? product.name.substring(0, 20) + "..."
            : product.name}
        </Typography>
        <Typography>
          <span>
            <strong>Precio: </strong>
          </span>
          {product.price} € (c/u)
        </Typography>
        <Typography>
          <span>
            <strong>Cantidad: </strong>
          </span>
          {quantity}
        </Typography>
        <Typography>
          <span>
            <strong>Subtotal: </strong>
          </span>
          {product.price * quantity} €
        </Typography>
      </Box>
      <IconButton onClick={() => removeFromCartHandler(product.id)}>
        <DeleteOutlineTwoToneIcon sx={{ color: "error.main" }} />
      </IconButton>
    </Box>
  );
};
