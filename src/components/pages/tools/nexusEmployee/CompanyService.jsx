import {
  Autocomplete,
  Button,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import React, { useEffect, useState } from "react";
import axios from "axios";

import { getSessionId } from "../../../../api/SessionIdUtils";
import { enqueueSnackbar } from "notistack";

export default function CompanyService(props) {
  const [options, setOptions] = useState([]);
  const [company_name, setcompany_name] = useState(null);
  const [service, setService] = useState(null);
  const [services, setServices] = useState(null);

  const [errorFields, setErrorFields] = useState([]);
  useEffect(() => {
    axios
      .get("http://localhost:3000/nexusEmployee/insuranceCompanies", {
        headers: { SESSION_ID: getSessionId() },
      })
      .then(
        (res) => {
          setOptions(res.data);
          console.log("get is success");
        },
        (err) => {}
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
  const handleAdd = () => {
    const errors = [];

    if (!company_name) {
      errors.push("Company name cannot be empty.");
    }
    if (!service) {
      errors.push("Service cannot be empty.");
    }

    setErrorFields(errors);

    if (errors.length === 0) {
      axios
        .post(
          "http://localhost:3000/nexusEmployee/addInsurance",
          {
            company_name: company_name,
            service: service,
          },
          {
            headers: { SESSION_ID: getSessionId() },
          }
        )
        .then((response) => {
          console.log("Service added successfully:", response.data);
          setService(null);
          setcompany_name(null);
          enqueueSnackbar("Service is added ", {
            variant: "success",
          });
        })
        .catch((error) => {
          console.error("Error adding service:", error);
          enqueueSnackbar("Failed to add Service", {
            variant: "error",
          });
        });
    }
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
        Add service for company
      </Typography>

      <Autocomplete
        value={company_name}
        onChange={(event, newValue) => {
          setcompany_name(newValue);
        }}
        sx={{ width: 350 }}
        options={options}
        renderInput={(params) => (
          <TextField
            {...params}
            label="Select Target Insurance Compay"
            variant="outlined"
            required
          />
        )}
      />

      <Autocomplete
        disabled={company_name == null}
        value={service}
        onChange={(event, newValue) => {
          setService(newValue);
        }}
        sx={{ width: 350 }}
        options={services}
        renderInput={(params) => (
          <TextField
            {...params}
            label="Select Target Insurance"
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
