import { DatePicker, DateRangePicker } from "@mui/x-date-pickers-pro";
import { Box } from "@mui/material";

export default function DateRangeStep({ formData, setFormData }) {
  return (
    <Box
      gap={"2rem"}
      sx={{ display: "flex", flexDirection: "column", gap: "2rem" }}
    >
      <DatePicker
        value={formData.startDate}
        label="Start Date"
        onChange={(newValue) =>
          setFormData((prev) => ({
            ...prev,
            startDate: newValue,
          }))
        }
      />
      <DatePicker
        label="End Date"
        value={formData.startDate}
        onChange={(newValue) =>
          setFormData((prev) => ({
            ...prev,
            endDate: newValue,
          }))
        }
      />
    </Box>
  );
}
