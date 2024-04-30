import {
  Box,
  Stack,
  ThemeProvider,
  Typography,
  createTheme,
} from "@mui/material";
import { useContext } from "react";
import { GlobalStates } from "../../../base/BaseComponent";
import DisplayBoxWithBorder from "./components/DisplayBoxWithBorder";
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
export default function personalInformation(props) {
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
          justifyContent={"flex-start"}
          alignItems={"flex-start"}
          p={2}
        >
          <DisplayBoxWithBorder
            title="Name"
            value={user.firstName + " " + user.lastName}
          />
          <DisplayBoxWithBorder title="Email" value={user.email} />
          <DisplayBoxWithBorder title="National ID" value={user.nationalId} />
          <DisplayBoxWithBorder title="Phone Number" value={user.phoneNum} />
        </Stack>
      </Stack>
    </ThemeProvider>
  );
}
