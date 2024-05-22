import React, { useEffect, useState, useRef } from "react";
import axios from "axios";
import { getSessionId } from "../../../../api/SessionIdUtils";
import {
  Autocomplete,
  Button,
  Card,
  CardContent,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import { enqueueSnackbar } from "notistack";

export default function AddFacility(props) {
  const [options, setOptions] = useState([]);
  const [services, setServices] = useState([]);
  const [service, setService] = useState(null);

  // Handle adding a new insurance service
  const handleAdd = () => {
    axios
      .post(
        "http://localhost:3000/insuranceEmployee/addInsurance",
        { insurance: service },
        {
          headers: { SESSION_ID: getSessionId() },
        }
      )
      .then((response) => {
        console.log("Service added successfully:", response.data);
        // Update the options state with the new service
        setOptions((prevOptions) => [...prevOptions, service]);
        setService(null); // Clear the selected service
        enqueueSnackbar("Service added successfully", {
          variant: "success",
        });
      })
      .catch((error) => {
        console.error("Error adding service:", error);
        enqueueSnackbar("Failed to add service", {
          variant: "error",
        });
      });
  };

  return (
    <Stack
      flexDirection={"column"}
      height={"100%"}
      width="100%"
      gap={2}
      justifyContent={"flex-start"}
      alignItems={"flex-start"}
      p={2}
    >
      <Typography variant="h3" color={"primary"}>
        Add Facility
      </Typography>
      <Autocomplete
        value={service}
        onChange={(event, newValue) => {
          setService(newValue);
        }}
        sx={{ width: 350 }}
        options={options}
        renderInput={(params) => (
          <TextField
            {...params}
            label="Select Target Insurance"
            variant="outlined"
            required
          />
        )}
      />
      <Autocomplete
        value={service}
        onChange={(event, newValue) => {
          setService(newValue);
        }}
        sx={{ width: 350 }}
        options={options}
        renderInput={(params) => (
          <TextField
            {...params}
            label="Select Target Facility"
            variant="outlined"
            required
          />
        )}
      />
      <Button sx={{ width: 100 }} variant="contained" onClick={handleAdd}>
        ADD
      </Button>
    </Stack>
  );
}
