import { Stack, TextField, Typography, Button } from "@mui/material";
import axios from "axios";
import { useState } from "react";

import { enqueueSnackbar } from "notistack";
import { useLocation } from "react-router-dom";

export default function Password() {
  const location = useLocation();
  const email = location.state?.email;
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const handleUpdatePassword = async () => {
    if (newPassword !== confirmPassword) {
      enqueueSnackbar("New passwords do not match", { variant: "error" });
      return;
    }

    try {
      await axios.post("http://localhost:3000/user/edit-password", {
        newPassword,
        email,
      });
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
        Edit Password
      </Typography>

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
