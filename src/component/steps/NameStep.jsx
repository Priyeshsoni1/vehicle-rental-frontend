import { TextField, Grid } from "@mui/material";

export default function NameStep({ formData, setFormData, error }) {
  return (
    <Grid container spacing={2}>
      <Grid item xs={6}>
        <TextField
          label="First Name"
          fullWidth
          value={formData.firstName || ""}
          onChange={(e) =>
            setFormData((prev) => ({ ...prev, firstName: e.target.value }))
          }
          error={!!error}
          helperText={error && !formData.firstName ? "Required" : ""}
        />
      </Grid>
      <Grid item xs={6}>
        <TextField
          label="Last Name"
          fullWidth
          value={formData.lastName || ""}
          onChange={(e) =>
            setFormData((prev) => ({ ...prev, lastName: e.target.value }))
          }
          error={!!error}
          helperText={error && !formData.lastName ? "Required" : ""}
        />
      </Grid>
    </Grid>
  );
}
