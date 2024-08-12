import { Stack, TextField, Typography, Button } from "@mui/material";
import axios from "axios";
import { useState } from "react";
import { getSessionId } from "../../../../api/SessionIdUtils";
import { enqueueSnackbar } from "notistack";

export default function EditInfo() {
  const [newPhoneNumber, setNewPhoneNumber] = useState("");
  const [oldPassword, setOldPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const handleUpdatePhoneNumber = async () => {
    try {
      await axios.post(
        "http://localhost:3000/user/update-phone-number",
        { newPhoneNumber },
        { headers: { SESSION_ID: getSessionId() } }
      );
      enqueueSnackbar("Phone number updated successfully", {
        variant: "success",
      });
    } catch (error) {
      enqueueSnackbar("Failed to update phone number", { variant: "error" });
    }
  };

  const handleUpdatePassword = async () => {
    if (newPassword !== confirmPassword) {
      enqueueSnackbar("New passwords do not match", { variant: "error" });
      return;
    }

    try {
      await axios.post(
        "http://localhost:3000/user/update-password",
        { oldPassword, newPassword },
        { headers: { SESSION_ID: getSessionId() } }
      );
      enqueueSnackbar("Password updated successfully", { variant: "success" });
    } catch (error) {
      enqueueSnackbar("Failed to update password", { variant: "error" });
    }
  };

  return (
    <Stack
      flexDirection={"column"}
      height={"100%"}
      width="100%"
      gap={3}
      p={3}
      justifyContent={"flex-start"}
      alignItems={"flex-start"}
    >
      <Typography variant="h6" color={"primary"}>
        Edit Phone Number
      </Typography>
      <TextField
        label="Enter New Phone Number"
        value={newPhoneNumber}
        onChange={(e) => setNewPhoneNumber(e.target.value)}
        sx={{ width: "400px" }}
      />
      <Button
        variant="contained"
        color="primary"
        onClick={handleUpdatePhoneNumber}
      >
        Update Phone Number
      </Button>

      <Typography variant="h6" color={"primary"}>
        Edit Password
      </Typography>
      <TextField
        label="Enter Old Password"
        type="password"
        value={oldPassword}
        onChange={(e) => setOldPassword(e.target.value)}
        sx={{ width: "400px" }}
      />
      <TextField
        label="Enter New Password"
        type="password"
        value={newPassword}
        onChange={(e) => setNewPassword(e.target.value)}
        sx={{ width: "400px" }}
      />
      <TextField
        label="Re-enter New Password"
        type="password"
        value={confirmPassword}
        onChange={(e) => setConfirmPassword(e.target.value)}
        sx={{ width: "400px" }}
      />
      <Button
        variant="contained"
        color="primary"
        onClick={handleUpdatePassword}
      >
        Update Password
      </Button>
    </Stack>
  );
}
