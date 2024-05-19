import { Box, Stack, TextField, Typography } from "@mui/material";

export default function DisplayBoxWithBorder(props) {
  return (
    <Stack gap={2} flexDirection={"column"} sx={{ width: "100%", ...props.sx }}>
      <Typography fontSize={22} color={"#0f3554"} sx={{ width: "100%" }}>
        {props.title}
      </Typography>
      <TextField
        disabled
        value={props.value}
        variant="outlined"
        sx={{ width: "100%", ...props.sx }}
      />
    </Stack>
  );
}
