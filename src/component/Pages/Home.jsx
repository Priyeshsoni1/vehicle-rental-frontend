import React from "react";
import { Container, Box } from "@mui/material";

import backgroundImage from "../../assets/car-rental.png";
import StepperForm from "../Form";

function Home() {
  return (
    <Box
      sx={{
        minHeight: "100vh",
        backgroundImage: `url(${backgroundImage})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        px: { xs: 2, sm: 3, md: 4 },
      }}
    >
      <Container
        maxWidth="sm"
        sx={{
          bgcolor: "rgba(255, 255, 255, 0.4)",
          borderRadius: 2,
          boxShadow: 3,
          p: { xs: 2, sm: 3, md: 4 },
          backdropFilter: "blur(10px)",
          width: "100%",
        }}
      >
        <StepperForm />
      </Container>
    </Box>
  );
}

export default Home;
