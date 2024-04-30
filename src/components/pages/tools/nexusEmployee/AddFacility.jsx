import {
  Autocomplete,
  Button,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import axios from "axios";
import { enqueueSnackbar } from "notistack";
import { useState } from "react";
import { getSessionId } from "../../../../api/SessionIdUtils";

export default function AddFacility(props) {
  const [name, setName] = useState("");
  const [type, setType] = useState("");
  const [location, setLocation] = useState("");
  const [governorate, setGovernorate] = useState("");
  const [phoneNum, setPhoneNum] = useState("");
  const [errorFields, setErrorFields] = useState([]);
  const options = ["amman", "zarqa", "aqaba"];

  const nameRegex = /^[a-zA-Z]{1,100}$/;

  const phoneRegex = /^07\d{8}$/;
  const handleAdd = () => {
    const errors = [];
    if (!nameRegex.test(name)) errors.push("name_reg");
    if (!nameRegex.test(type)) errors.push("type_reg");
    if (!nameRegex.test(location)) errors.push("location_reg");
    // autocomplete if (!NIDRegex.test(governorate)) errors.push("governorate_reg");
    if (!phoneRegex.test(phoneNum)) errors.push("phoneNum_reg");
    if (!governorate) errors.push("governorate");

    setErrorFields(errors);

    if (errors.length === 0) {
      axios
        .post(
          "http://localhost:3000/nexusEmployee/addFacility",
          {
            name: name,
            type: type,
            location: location,
            governorate: governorate,
            phoneNum: phoneNum,
          },
          {
            headers: { SESSION_ID: getSessionId() },
          }
        )
        .then((response) => {
          console.log("User added successfully:", response.data);

          setName("");
          setType("");
          setLocation("");
          setGovernorate("");
          setPhoneNum("");
          enqueueSnackbar("Facility is added ", {
            variant: "success",
          });
        })
        .catch((error) => {
          console.error("Error adding user:", error);
          enqueueSnackbar("Failed to Add Facility", {
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
      <Typography variant="h3" color={"primary"} pb={5}>
        Add Facility
      </Typography>

      <TextField
        id="name"
        label="name"
        onChange={(e) => {
          setName(e.target.value);
        }}
        value={name}
        error={errorFields.includes("name_reg")}
        required
        sx={{ width: "300px" }}
      />
      <TextField
        id="type"
        label="type"
        onChange={(e) => {
          setType(e.target.value);
        }}
        value={type}
        error={errorFields.includes("type_reg")}
        required
        sx={{ width: "300px" }}
      />
      <TextField
        id="location"
        label="location"
        onChange={(e) => {
          setLocation(e.target.value);
        }}
        value={location}
        error={errorFields.includes("location_reg")}
        required
        sx={{ width: "300px" }}
      />

      <TextField
        id="phoneNum"
        label="phoneNum"
        onChange={(e) => {
          setPhoneNum(e.target.value);
        }}
        value={phoneNum}
        error={errorFields.includes("phoneNum_reg")}
        required
        sx={{ width: "300px" }}
      />
      <Autocomplete
        value={governorate}
        onChange={(event, newValue) => {
          setGovernorate(newValue);
        }}
        options={options}
        renderInput={(params) => (
          <TextField
            {...params}
            label="Choose one"
            required
            error={errorFields.includes("governorate")}
            sx={{ width: "300px" }}
          />
        )}
      />

      <Button sx={{ width: 100 }} variant="contained" onClick={handleAdd}>
        ADD
      </Button>
    </Stack>
  );
}
