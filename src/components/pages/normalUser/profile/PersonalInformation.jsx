import { Box, Stack, Typography } from "@mui/material";
import { useContext } from "react";
import { GlobalStates } from "../../../base/BaseComponent";
import DisplayBoxWithBorder from "./components/DisplayBoxWithBorder";

export default function personalInformation(props) {
  const { user, setUser } = useContext(GlobalStates);

  return (
    <Stack flexDirection={"column"} gap={2}>
      <Typography variant="h4" color={"primary"}>
        Personal information
      </Typography>
      <Stack flexDirection={"row"} gap={2}>
        <DisplayBoxWithBorder
          title="Name"
          value={user.firstName + " " + user.lastName}
        />
        <DisplayBoxWithBorder title="Email" value={user.email} />
        <DisplayBoxWithBorder title=" National ID" value={user.nationalId} />
      </Stack>
    </Stack>
  );
}
