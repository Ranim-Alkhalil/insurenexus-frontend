import {
  Grid,
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
export default function NexusInfo(props) {
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
        <Grid container spacing={3}>
          <Grid item xs={12} sm={6} md={3}>
            <DisplayBoxWithBorder
              title="Name"
              value={user.firstName + " " + user.lastName}
            />
          </Grid>
          <Grid item xs={12} sm={6} md={3}>
            <DisplayBoxWithBorder title="Email" value={user.email} />
          </Grid>
          <Grid item xs={12} sm={6} md={3}>
            <DisplayBoxWithBorder title="National ID" value={user.nationalId} />
          </Grid>
          <Grid item xs={12} sm={6} md={3}>
            <DisplayBoxWithBorder title="Phone Number" value={user.phoneNum} />
          </Grid>
        </Grid>
      </Stack>
    </ThemeProvider>
  );
}
