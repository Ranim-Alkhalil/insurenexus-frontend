import { Box, Stack, TextField, Typography } from "@mui/material";

export default function DisplayBoxWithBorder(props) {
  return (
    <Stack gap={1} flexDirection={"column"}>
      <Typography fontSize={20} color={"primary"}>
        {props.title}
      </Typography>
      <TextField value={props.value} variant="filled" disabled />
    </Stack>
  );
}
