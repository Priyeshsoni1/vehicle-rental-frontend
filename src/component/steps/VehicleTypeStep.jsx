import { useEffect, useState } from "react";
import { fetchVehicleTypes } from "../../api/Api";
import {
  FormControl,
  FormLabel,
  RadioGroup,
  FormControlLabel,
  Radio,
  CircularProgress,
} from "@mui/material";

export default function VehicleTypeStep({ formData, setFormData, error }) {
  const [vehicleTypes, setVehicleTypes] = useState([]);

  useEffect(() => {
    if (formData.wheels) {
      fetchVehicleTypes(formData.wheels)
        .then((res) => setVehicleTypes(res.data))
        .catch(console.error);
    }
  }, [formData.wheels]);

  if (!vehicleTypes.length) return <CircularProgress />;

  return (
    <FormControl component="fieldset" error={!!error}>
      <FormLabel>Type of Vehicle</FormLabel>
      <RadioGroup
        value={formData.vehicleTypeId || ""}
        onChange={(e) =>
          setFormData((prev) => ({ ...prev, vehicleTypeId: e.target.value }))
        }
      >
        {vehicleTypes.map((type) => (
          <FormControlLabel
            key={type.id}
            value={type.id}
            control={<Radio />}
            label={type.name}
          />
        ))}
      </RadioGroup>
    </FormControl>
  );
}
