import { CssBaseline, Container, Box } from "@mui/material";
import StepperForm from "./component/Form";
import backgroundImage from "./assets/car-rental.png"; // adjust path if different

function App() {
  return (
    <>
      <CssBaseline />
      <Box
        sx={{
          minHeight: "100vh",
          backgroundImage: `url(${backgroundImage})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Container
          maxWidth="sm"
          sx={{
            bgcolor: "rgba(255, 255, 255, 0.4)", // translucent white background
            borderRadius: 2,
            boxShadow: 3,
            p: 4,
            backdropFilter: "blur(10px)", // optional: glassmorphism effect
          }}
        >
          <StepperForm />
        </Container>
      </Box>
    </>
  );
}

export default App;
