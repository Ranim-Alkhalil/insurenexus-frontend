import { Button, Stack, TextField, Typography } from "@mui/material";
import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function ForgotPassword(props) {
  const [email, setEmail] = useState("");
  const [token, setToken] = useState("");
  const [showTokenField, setShowTokenField] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const navigate = useNavigate();

  async function handleFirst() {
    try {
      const response = await axios.post(
        "http://localhost:3000/user/forgotpass",
        { email }
      );
      if (response.data.success) {
        setShowTokenField(true);
        setErrorMessage(""); // Clear any previous errors
      } else {
        setErrorMessage(response.data.message);
      }
    } catch (error) {
      setErrorMessage("Failed to send email. Please try again.");
    }
  }

  async function handleTokenVerification() {
    try {
      const response = await axios.post("http://localhost:3000/user/token", {
        email,
        token,
      });
      if (response.data.success) {
        navigate("/changePassword", { state: { email } });
      } else {
        setErrorMessage(response.data.message);
      }
    } catch (error) {
      setErrorMessage("Failed to verify token. Please try again.");
    }
  }

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
        onChange={(e) => setEmail(e.target.value)}
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
      {showTokenField && (
        <>
          <TextField
            label="Token"
            type="text"
            variant="outlined"
            required
            sx={{ width: 300 }}
            onChange={(e) => setToken(e.target.value)}
            value={token}
          />
          <Typography variant="body2" color="textSecondary">
            Please check your email for the token.
          </Typography>
          <Button
            color="primary"
            variant="contained"
            sx={{ width: 120 }}
            onClick={handleTokenVerification}
          >
            Verify Token
          </Button>
        </>
      )}
      {errorMessage && (
        <Typography variant="body2" color="error">
          {errorMessage}
        </Typography>
      )}
    </Stack>
  );
}
