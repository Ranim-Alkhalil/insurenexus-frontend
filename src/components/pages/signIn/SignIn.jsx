import { Visibility, VisibilityOff } from "@mui/icons-material";
import {
  Button,
  Fade,
  Stack,
  TextField,
  Typography,
  Zoom,
  Alert,
} from "@mui/material";
import axios from "axios";
import { useContext, useState, useEffect } from "react";
import { GlobalStates } from "../../base/BaseComponent";
import { SignInApi } from "../../../api/security/Session";
import { Link, useNavigate } from "react-router-dom";
import { GetUserInfo } from "../../../api/user/User";

export default function SignIn(props) {
  const { user, setUser } = useContext(GlobalStates);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [userType, setUserType] = useState(null);
  const [errorMessage, setErrorMessage] = useState("");
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
              const newUser = {
                ...user,
                ...res.data,
                signedIn: true,
                sessionId: res.data.sessionId,
              };
              setUser(newUser);
              setUserType(res.data.type);
            },
            (err) => {}
          );
        } else {
          setErrorMessage(res.data.message); // Set the error message
        }
      },
      (err) => {
        setErrorMessage("An error occurred. Please try again."); // Handle network or other errors
      }
    );
  }

  useEffect(() => {
    if (userType !== null) {
      switch (userType) {
        case 1:
          navigate("/profile/normal");
          break;
        case 2:
          navigate("/profile/insurance-employee");
          break;
        case 3:
          navigate("/profile/company-employee");
          break;
        case 4:
          navigate("/profile/nexus-employee");
          break;
        case 5:
          navigate("/profile/admin");
          break;
        default:
          break;
      }
    }
  }, [userType, navigate]);

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
        {errorMessage && <Alert severity="error">{errorMessage}</Alert>}
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
        <Button
          color="primary"
          sx={{ width: 180 }}
          onClick={() => navigate("/forgotPassword")}
        >
          forgot password ?
        </Button>
      </Stack>
    </Zoom>
  );
}
