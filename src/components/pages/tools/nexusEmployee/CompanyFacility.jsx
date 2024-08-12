import {
  Autocomplete,
  Button,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import React, { useEffect, useState } from "react";
import axios from "axios";

import Slide from "@mui/material/Slide";
import { getSessionId } from "../../../../api/SessionIdUtils";
import { enqueueSnackbar } from "notistack";

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

export default function CompanyFacility(props) {
  const [options, setOptions] = useState([]);
  const [company_name, setcompany_name] = useState(null);
  const [service, setService] = useState(null);
  const [facility, setFacility] = useState(null);
  const [option, setOption] = useState([]);
  const [facilities, setFacilities] = useState([]);

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
      .get("http://localhost:3000/nexusEmployee/compInsurances", {
        headers: { SESSION_ID: getSessionId() },
        params: { param1: company_name },
      })
      .then(
        (res) => {
          setOption(res.data);
          console.log("get is success");
        },
        (err) => {
          console.error("Failed to fetch insurances", err);
        }
      );
  }, [company_name]);
  useEffect(() => {
    axios
      .get("http://localhost:3000/nexusEmployee/facilities", {
        headers: { SESSION_ID: getSessionId() },
      })
      .then(
        (res) => {
          setFacilities(res.data);
          console.log("get is success");
        },
        (err) => {
          console.error("Failed to fetch insurances", err);
        }
      );
  }, []);

  const handleAdd = () => {
    const errors = [];
    setErrorFields(errors);
    if (errors.length === 0) {
      axios
        .post(
          "http://localhost:3000/nexusEmployee/addFacilityComp",
          {
            company_name: company_name,
            service: service,
            facility: facility,
          },
          {
            headers: { SESSION_ID: getSessionId() },
          }
        )
        .then((response) => {
          console.log("Facility added successfully:", response.data);
          setFacility("");
          setService("");
          setcompany_name("");
          enqueueSnackbar("Facility is added ", {
            variant: "success",
          });
        })
        .catch((error) => {
          console.error("Error adding facility:", error);
          enqueueSnackbar("Failed to add facility", {
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
        Add facility for company
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
        options={option}
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
        disabled={service == null}
        value={facility}
        onChange={(event, newValue) => {
          setFacility(newValue);
        }}
        sx={{ width: 350 }}
        options={facilities}
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
