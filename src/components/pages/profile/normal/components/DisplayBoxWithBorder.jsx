import { Box, Stack, TextField, Typography } from "@mui/material";

export default function DisplayBoxWithBorder(props) {
  return (
    <Stack gap={2} flexDirection={"column"}>
      <Typography fontSize={22} color={"#0f3554"} sx={props.sx}>
        {props.title}
      </Typography>
      <TextField
        disabled
        value={props.value}
        variant="outlined"
        sx={props.sx}
      />
    </Stack>
  );
}
