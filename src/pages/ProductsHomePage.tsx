import { Box } from "@mui/material";
import { ListProducts } from "../components";
import { OrderBy } from "../components/orderBy";

export const ProductsHomePage = () => {
  return (
    <Box sx={{ padding: 2 }}>
      <OrderBy />
      <ListProducts />{" "}
    </Box>
  );
};
