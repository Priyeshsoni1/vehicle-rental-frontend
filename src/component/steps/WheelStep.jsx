import {
  FormControl,
  FormLabel,
  RadioGroup,
  FormControlLabel,
  Radio,
} from "@mui/material";

export default function WheelStep({ formData, setFormData, error }) {
  return (
    <FormControl component="fieldset" error={!!error}>
      <FormLabel component="legend">Number of Wheels</FormLabel>
      <RadioGroup
        row
        value={formData.wheels || ""}
        onChange={(e) =>
          setFormData((prev) => ({ ...prev, wheels: e.target.value }))
        }
      >
        <FormControlLabel value="2" control={<Radio />} label="2" />
        <FormControlLabel value="4" control={<Radio />} label="4" />
      </RadioGroup>
    </FormControl>
  );
}
