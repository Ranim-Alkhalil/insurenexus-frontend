import {
  Stack,
  TextField,
  ThemeProvider,
  Typography,
  createTheme,
} from "@mui/material";
import DisplayBoxWithBorder from "../normal/components/DisplayBoxWithBorder";
import { getSessionId } from "../../../../api/SessionIdUtils";
import { useContext, useEffect, useState } from "react";
import axios from "axios";
import { GlobalStates } from "../../../base/BaseComponent";
const profile = createTheme({
  palette: {
    primary: {
      main: "#0f3554",
    },
    action: {
      disabled: "#CBB26B",
    },
    text: {
      disabled: "#0f3554",
    },
  },
});
export default function InsuEmpInfo(props) {
  const { user, setUser } = useContext(GlobalStates);

  return (
    <ThemeProvider theme={profile}>
      <Stack
        flexDirection={"column"}
        height={"100%"}
        width="100%"
        gap={3}
        justifyContent={"flex-start"}
        alignItems={"flex-start"}
        p={2}
      >
        <Typography variant="h3" color={"#0f3554"}>
          Personal information
        </Typography>
        <Stack
          flexDirection={"row"}
          height={"100%"}
          width="100%"
          gap={3}
          flexWrap={"wrap"}
          justifyContent={"flex-start"}
          alignItems={"flex-start"}
          p={2}
        >
          <DisplayBoxWithBorder
            title="Name"
            value={user.firstName + " " + user.lastName}
            sx={{ flexGrow: 1 }}
          />
          <DisplayBoxWithBorder
            title="Email"
            value={user.email}
            sx={{ flexGrow: 1 }}
          />
          <DisplayBoxWithBorder
            title="National ID"
            value={user.nationalId}
            sx={{ flexGrow: 1 }}
          />
          <DisplayBoxWithBorder
            title="Phone Number"
            value={user.phoneNum}
            sx={{ flexGrow: 1 }}
          />
        </Stack>
      </Stack>
    </ThemeProvider>
  );
}
