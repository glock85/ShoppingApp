import { Box } from "@mui/material";
import { ListProducts, OrderBy } from "../components";

export const ProductsHomePage = () => {
  return (
    <Box sx={{ padding: 2 }}>
      <OrderBy />
      <ListProducts />{" "}
    </Box>
  );
};
