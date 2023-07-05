import { Box, Button, Typography } from "@mui/material";
import { Link } from "react-router-dom";

export const NotFoundPage = () => {
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
        minHeight: "100vh",
        backgroundColor: "secondary.main",
      }}
    >
        <Typography variant="h1" color={"white"}>
          404
        </Typography>
        <Typography variant="h6" color={"white"} sx={{ pb: 2 }}>
          The page you’re looking for doesn’t exist.
        </Typography>
        <Button variant="contained">
          <Link to="/" style={{ textDecoration: "none", color: "white" }}>
            Back Home
          </Link>
        </Button>
      </Box>
  );
};
