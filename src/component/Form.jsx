import { Button, Box, Typography, Stack } from "@mui/material";
import { useState } from "react";
import NameStep from "./steps/NameStep";
import WheelStep from "./steps/WheelStep";
import VehicleTypeStep from "./steps/VehicleTypeStep";
import ModelStep from "./steps/ModelStep";
import DateRangeStep from "./steps/DateRangeStep";
import { submitBooking } from "../api/Api";
import { useNavigate } from "react-router-dom";

const steps = [
  {
    label: "Name",
    component: NameStep,
    validate: (d) => d.firstName && d.lastName,
  },
  { label: "Wheels", component: WheelStep, validate: (d) => d.wheels },
  {
    label: "Vehicle Type",
    component: VehicleTypeStep,
    validate: (d) => d.vehicleTypeId,
  },
  { label: "Model", component: ModelStep, validate: (d) => d.vehicleId },
  {
    label: "Date Range",
    component: DateRangeStep,
    validate: (d) => d.startDate && d.endDate,
  },
];

export default function StepperForm() {
  const navigate = useNavigate();
  const [stepIndex, setStepIndex] = useState(0);
  const [formData, setFormData] = useState({});
  const [error, setError] = useState(false);

  const CurrentStep = steps[stepIndex].component;

  const handleNext = async () => {
    const isValid = steps[stepIndex].validate(formData);
    if (!isValid) {
      setError(true);
      return;
    }
    setError(false);

    if (stepIndex === steps.length - 1) {
      try {
        await submitBooking(formData);
        alert("Booking successful!");
        navigate("/details");
      } catch (err) {
        alert(`Booking failed: ${err?.response?.data?.message || err.message}`);
      }
    } else {
      setStepIndex((prev) => prev + 1);
    }
  };

  // Function to check if step is complete
  const isStepComplete = (index) => {
    // We consider a step complete if validate returns true for the current formData
    return index < stepIndex && steps[index].validate(formData);
  };

  return (
    <Box p={4}>
      {/* Top stepper line */}
      <Stack
        direction="row"
        justifyContent="space-between"
        alignItems="center"
        mb={4}
        sx={{ maxWidth: 600, mx: "auto" }}
      >
        {steps.map((step, index) => {
          const completed = isStepComplete(index);
          const active = index === stepIndex;

          return (
            <Box
              key={step.label}
              sx={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                flex: 1,
                position: "relative",
              }}
            >
              {/* Circle / node */}
              <Box
                sx={{
                  width: 24,
                  height: 24,
                  borderRadius: "50%",
                  backgroundColor: completed
                    ? "success.main"
                    : active
                    ? "primary.main"
                    : "grey.400",
                  border: active ? "3px solid" : "none",
                  borderColor: "primary.main",
                  zIndex: 1,
                }}
              />
              {/* Label */}
              <Typography
                variant="caption"
                mt={1}
                sx={{
                  color: completed || active ? "text.primary" : "text.disabled",
                  fontWeight: active ? "bold" : "normal",
                  textAlign: "center",
                }}
              >
                {step.label}
              </Typography>

              {/* Line connecting to next node except for last */}
              {index < steps.length - 1 && (
                <Box
                  sx={{
                    position: "absolute",
                    top: "12px",
                    left: "50%",
                    right: "-50%",
                    height: 2,
                    backgroundColor:
                      index < stepIndex - 1 ? "success.main" : "grey.300",
                    zIndex: 0,
                  }}
                />
              )}
            </Box>
          );
        })}
      </Stack>

      <Typography variant="h5" mb={3}>
        {steps[stepIndex].label}
      </Typography>
      <CurrentStep
        formData={formData}
        setFormData={setFormData}
        error={error}
        setError={setError}
      />
      <Box mt={4}>
        <Button variant="contained" onClick={handleNext}>
          Next
        </Button>
      </Box>
    </Box>
  );
}
