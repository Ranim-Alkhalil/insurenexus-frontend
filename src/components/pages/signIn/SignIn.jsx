import { Visibility, VisibilityOff } from "@mui/icons-material";
import {
  Button,
  Fade,
  Stack,
  TextField,
  Typography,
  Zoom,
} from "@mui/material";
import axios from "axios";
import { useContext, useState } from "react";
import { GlobalStates } from "../../base/BaseComponent";
import { SignInApi } from "../../../api/security/Session";
import { useNavigate } from "react-router-dom";
import { GetUserInfo } from "../../../api/user/User";

export default function SignIn(props) {
  const { user, setUser } = useContext(GlobalStates);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  function handleSignIn() {
    SignInApi({
      email: email,
      password: password,
    }).then(
      (res) => {
        if (!res.data.error) {
          localStorage.setItem("sessionId", res.data.sessionId);
          GetUserInfo().then(
            (res) => {
              setUser({
                ...user,
                ...res.data,
                signedIn: true,
                sessionId: res.data.sessionId,
              });
              console.log("navigating to home");
              navigate("/home");
            },
            (err) => {}
          );
        }
      },
      (err) => {}
    );
  }
  return (
    <Zoom in={true}>
      <Stack
        flexDirection={"column"}
        gap={3}
        width={"100%"}
        height={"100%"}
        justifyContent={"center"}
        alignItems={"center"}
      >
        <Typography variant="h3">Sign In</Typography>
        <TextField
          label="Email"
          type="email"
          variant="outlined"
          required
          sx={{ width: 300 }}
          onChange={(e) => {
            setEmail(e.target.value);
          }}
          value={email}
        />
        <TextField
          type="password"
          label="Password"
          variant="outlined"
          required
          sx={{ width: 300 }}
          onChange={(e) => {
            setPassword(e.target.value);
          }}
          value={password}
        />

        <Button
          color="primary"
          variant="contained"
          sx={{ width: 120 }}
          onClick={handleSignIn}
        >
          Sign In
        </Button>
      </Stack>
    </Zoom>
  );
}
