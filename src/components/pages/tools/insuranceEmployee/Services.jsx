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

export default function AddServices(props) {
  const [options, setOptions] = useState([]);
  const [services, setServices] = useState([]);
  const [service, setService] = useState(null);
  const [maxWidth, setMaxWidth] = useState(0);
  const [maxHeight, setMaxHeight] = useState(0);

  const cardRefs = useRef([]);

  useEffect(() => {
    axios
      .get("http://localhost:3000/insuranceEmployee/compInsurances", {
        headers: { SESSION_ID: getSessionId() },
      })
      .then(
        (res) => {
          setOptions(res.data);
          console.log("get is success");
        },
        (err) => {
          console.error("Failed to fetch insurances", err);
        }
      );
  }, []);

  useEffect(() => {
    axios
      .get("http://localhost:3000/insuranceEmployee/Insurances", {
        headers: { SESSION_ID: getSessionId() },
      })
      .then(
        (res) => {
          setServices(res.data);
          console.log("get is success");
        },
        (err) => {
          console.error("Failed to fetch insurances", err);
        }
      );
  }, []);

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

  // Filter the services to exclude the ones already in options
  const availableServices = services.filter(
    (service) => !options.includes(service)
  );

  // Update card dimensions based on content
  useEffect(() => {
    if (cardRefs.current.length > 0) {
      const widths = cardRefs.current.map((ref) => ref?.offsetWidth || 0);
      const heights = cardRefs.current.map((ref) => ref?.offsetHeight || 0);
      setMaxWidth(Math.max(...widths));
      setMaxHeight(Math.max(...heights));
    }
  }, [options]);

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
        Add Service
      </Typography>
      <Autocomplete
        value={service}
        onChange={(event, newValue) => {
          setService(newValue);
        }}
        sx={{ width: 350 }}
        options={availableServices}
        renderInput={(params) => (
          <TextField
            {...params}
            label="Select Target Insurance to Add"
            variant="outlined"
            required
          />
        )}
      />
      <Button sx={{ width: 100 }} variant="contained" onClick={handleAdd}>
        ADD
      </Button>
      <Typography variant="h6" color={"primary"}>
        Your Company Services
      </Typography>
      <Stack flexDirection={"row"} flexWrap={"wrap"} gap={2}>
        {options.map((insurance, index) => (
          <Card
            key={index}
            ref={(el) => (cardRefs.current[index] = el)}
            sx={{
              width: maxWidth || "auto",
              height: maxHeight || "auto",
              border: "1px solid",
              borderColor: "#CBB26B",
            }}
          >
            <CardContent>
              <Typography variant="body1" color={"primary"}>
                {insurance}
              </Typography>
            </CardContent>
          </Card>
        ))}
      </Stack>
    </Stack>
  );
}
