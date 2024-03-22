import {
  AppBar,
  Button,
  IconButton,
  Stack,
  Toolbar,
  Typography,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import { useContext } from "react";
import { GlobalStates } from "./BaseComponent";
import LogoutIcon from "@mui/icons-material/Logout";
import { useNavigate } from "react-router-dom";

export default function TopAppBar(props) {
  const { user, setUser } = useContext(GlobalStates);
  const naviaget = useNavigate();

  function handleSingout() {
    localStorage.removeItem("sessionId");
    naviaget("/signin");
    setUser({ signedIn: false });
  }

  return (
    <AppBar position="fixed" color="primary">
      <Toolbar>
        <Stack
          flexDirection={"row"}
          flexWrap={"nowrap"}
          width={"100%"}
          alignItems={"space-betweem"}
        >
          <Stack flexDirection={"row"} flexWrap={"nowrap"} width={"100%"}>
            {user.signedIn && (
              <IconButton
                size="large"
                edge="start"
                color="inherit"
                sx={{ mr: 1 }}
                onClick={props.toggleDrawer}
              >
                <MenuIcon />
              </IconButton>
            )}
            <img height="55px" src="/logo.png" />
          </Stack>
          <Stack flexDirection={"row"} flexWrap={"nowrap"}>
            {user.signedIn && (
              <IconButton size="large" color="inherit" onClick={handleSingout}>
                <LogoutIcon />
              </IconButton>
            )}
          </Stack>
        </Stack>
      </Toolbar>
    </AppBar>
  );
}
