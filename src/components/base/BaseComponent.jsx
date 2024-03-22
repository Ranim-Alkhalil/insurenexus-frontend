import { createContext, useEffect, useState } from "react";
import LeftDrawer from "./LeftDrawer";
import TopAppBar from "./TopAppBar";
import {
  Box,
  Button,
  CircularProgress,
  Container,
  Stack,
  ThemeProvider,
  Typography,
  createTheme,
} from "@mui/material";
import { NavLink, Outlet, useLocation, useNavigate } from "react-router-dom";
import { ValidateSessionApi } from "../../api/security/Session";
import { GetUserInfo } from "../../api/user/User";

export const GlobalStates = createContext(null);

const theme = createTheme({
  palette: {
    primary: {
      main: "#0f3554",
    },
  },
});

export default function BaseComponent(props) {
  const [user, setUser] = useState({ signedIn: false });
  const [openDrawer, setOpenDrawer] = useState(false);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();
  const location = useLocation();
  const { hash, pathname, search } = location;

  function validateSession() {
    const sessionId = localStorage.getItem("sessionId");
    if (sessionId == null) {
      navigate("/signin");
      setLoading(false);
      return;
    }

    ValidateSessionApi({ sessionId: sessionId }).then(
      (res) => {
        if (!res.data.error) {
          setUser({ ...user, signedIn: true });
          GetUserInfo(sessionId).then(
            (res) => {
              setUser({
                ...user,
                ...res.data,
                signedIn: true,
                sessionId: res.data.sessionId,
              });
              if (pathname === "/signin") {
                navigate("/home");
              } else {
                navigate(pathname);
              }
              setLoading(false);
            },
            (err) => {}
          );
        } else {
          setLoading(false);
          navigate("/signin");
        }
      },
      (err) => {
        navigate("/signin");
        setLoading(false);
      }
    );
  }

  function handleToggleDrawer() {
    setOpenDrawer(!openDrawer);
  }

  function handleCloseDrawer() {
    setOpenDrawer(false);
  }

  useEffect(() => {
    validateSession();
  }, []);

  return (
    <GlobalStates.Provider value={{ user: user, setUser: setUser }}>
      <ThemeProvider theme={theme}>
        <TopAppBar toggleDrawer={handleToggleDrawer} />
        <LeftDrawer open={openDrawer} closeDrawer={handleCloseDrawer} />
        <Stack height={"100vh"} width={"100vw"} pt={8}>
          {loading ? (
            <Stack
              flexDirection={"column"}
              height={"100%"}
              gap={2}
              justifyContent={"center"}
              alignItems={"center"}
            >
              <CircularProgress size={50} />
              <Typography>Loading, please wait...</Typography>
            </Stack>
          ) : (
            <Outlet />
          )}
        </Stack>
      </ThemeProvider>
    </GlobalStates.Provider>
  );
}
