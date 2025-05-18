import { DateRangePicker } from "@mui/x-date-pickers-pro";
import { Box } from "@mui/material";
import dayjs from "dayjs";

export default function DateRangeStep({ formData, setFormData }) {
  return (
    <Box>
      <DateRangePicker
        value={formData.dateRange || [null, null]}
        onChange={(newValue) =>
          setFormData((prev) => ({ ...prev, dateRange: newValue }))
        }
      />
    </Box>
  );
}
