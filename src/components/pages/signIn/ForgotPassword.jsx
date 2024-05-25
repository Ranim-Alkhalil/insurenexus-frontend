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
import { useContext, useState, useEffect } from "react";
import { GlobalStates } from "../../base/BaseComponent";
import { SignInApi } from "../../../api/security/Session";
import { Link, useNavigate } from "react-router-dom";
import { GetUserInfo } from "../../../api/user/User";

export default function ForgotPassword(props) {
  const [email, setEmail] = useState("");
  function handleFirst() {}
  return (
    <Stack
      flexDirection={"column"}
      gap={3}
      width={"100%"}
      height={"100%"}
      justifyContent={"center"}
      alignItems={"center"}
    >
      <Typography variant="h5">Enter your email</Typography>
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
      <Button
        color="primary"
        variant="contained"
        sx={{ width: 120 }}
        onClick={handleFirst}
      >
        Submit
      </Button>
    </Stack>
  );
}
