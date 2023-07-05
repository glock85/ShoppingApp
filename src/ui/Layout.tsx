import { Box } from "@mui/material";
import { Navbar } from ".";

export const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <Box sx={{ height: "100vh" }}>
      <Navbar />
      {children}
    </Box>
  );
};
