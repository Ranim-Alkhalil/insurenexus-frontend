import { TextField } from "@mui/material";

export default function InputText(props) {
  return (
    <TextField
      required
      id={props.id}
      label={props.label}
      variant="outlined"
      sx={{ width: 350 }}
      error={props.error}
      helperText={props.helperText}
      onChange={props.onChange}
      disabled={props.disabled}
    />
  );
}
