import { useEffect, useState } from "react";
import { fetchModels } from "../../api/api";
import {
  FormControl,
  FormLabel,
  RadioGroup,
  FormControlLabel,
  Radio,
  CircularProgress,
} from "@mui/material";

export default function ModelStep({ formData, setFormData, error }) {
  const [models, setModels] = useState([]);

  useEffect(() => {
    if (formData.vehicleTypeId) {
      fetchModels(formData.vehicleTypeId)
        .then((res) => setModels(res.data))
        .catch(console.error);
    }
  }, [formData.vehicleTypeId]);

  if (!models.length) return <CircularProgress />;

  return (
    <FormControl component="fieldset" error={!!error}>
      <FormLabel>Choose a Model</FormLabel>
      <RadioGroup
        value={formData.vehicleId || ""}
        onChange={(e) =>
          setFormData((prev) => ({ ...prev, vehicleId: +e.target.value }))
        }
      >
        {models.map((model) => (
          <FormControlLabel
            key={model.id}
            value={model.id}
            control={<Radio />}
            label={`${model.model}  ₹${model.pricePerDay}`}
          />
        ))}
      </RadioGroup>
    </FormControl>
  );
}
