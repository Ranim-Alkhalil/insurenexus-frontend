import { Box, Stack, Typography } from "@mui/material";
import { useContext } from "react";
import { GlobalStates } from "../../../base/BaseComponent";
import DisplayBoxWithBorder from "./components/DisplayBoxWithBorder";

export default function Information(props) {
  return (
    <Stack flexDirection={"column"} gap={2} mt={5} ml={3}>
      <Typography variant="h2" color={"#0f3554"}>
        Personal information
      </Typography>
      <Stack flexDirection={"row"} gap={10} mt={5}>
        <DisplayBoxWithBorder title="Name" value="ahmad" />
        <DisplayBoxWithBorder title="Email" value="ahma@outlook.com" />
        <DisplayBoxWithBorder title=" National ID" value="4363768" />
      </Stack>
    </Stack>
  );
}
