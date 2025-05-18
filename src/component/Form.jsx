import { Button, Box, Typography } from "@mui/material";
import { useState } from "react";
import NameStep from "./steps/NameStep";
import WheelStep from "./steps/WheelStep";
import VehicleTypeStep from "./steps/VehicleTypeStep";
import ModelStep from "./steps/ModelStep";
import DateRangeStep from "./steps/DateRangeStep";
import { submitBooking } from "../api/api";

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
  { label: "Model", component: ModelStep, validate: (d) => d.modelId },
  {
    label: "Date Range",
    component: DateRangeStep,
    validate: (d) => d.dateRange?.[0] && d.dateRange?.[1],
  },
];

export default function StepperForm() {
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
      await submitBooking(formData);
      alert("Booking successful!");
    } else {
      setStepIndex((prev) => prev + 1);
    }
  };

  return (
    <Box p={4}>
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
