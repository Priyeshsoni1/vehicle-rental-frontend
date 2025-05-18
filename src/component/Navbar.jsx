import React from "react";
import { AppBar, Toolbar, Button, Box } from "@mui/material";
import DirectionsCarIcon from "@mui/icons-material/DirectionsCar";
import { useNavigate } from "react-router-dom";

function Navbar() {
  const navigate = useNavigate();
  return (
    <AppBar
      position="static"
      elevation={0}
      color="transparent"
      sx={{
        boxShadow: "none", // extra removal of shadow
        backgroundColor: "#9a9285", // ensure transparent
        backdropFilter: "none", // remove blur if any
        color: "#000", // black text/icons for contrast
      }}
    >
      <Toolbar
        sx={{
          display: "flex",
          justifyContent: "space-between",
          flexWrap: "wrap",
        }}
      >
        {/* Logo Icon */}
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            gap: 1,
            flexGrow: { xs: 1, sm: 0 },
            mb: { xs: 1, sm: 0 },
          }}
        >
          <DirectionsCarIcon fontSize="large" />
        </Box>

        {/* Buttons */}
        <Box
          sx={{
            display: "flex",
            gap: 2,

            alignItems: "center",
          }}
        >
          <Button
            variant="contained"
            color="#ffffff"
            onClick={() => navigate("/")}
            sx={{ backgroundColor: "#d8ad83", color: "#ffffff" }}
          >
            Book
          </Button>
          <Button
            variant="outlined"
            onClick={() => navigate("/details")}
            sx={{ backgroundColor: "#54544AFF", color: "#ffffff" }}
          >
            Bookings
          </Button>
        </Box>
      </Toolbar>
    </AppBar>
  );
}

export default Navbar;
