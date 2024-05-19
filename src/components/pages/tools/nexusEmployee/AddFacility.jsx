import {
  Autocomplete,
  Button,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import axios from "axios";
import { enqueueSnackbar } from "notistack";
import { useEffect, useState } from "react";
import { getSessionId } from "../../../../api/SessionIdUtils";

export default function AddFacility(props) {
  const [service, setService] = useState(null);
  const [name, setName] = useState("");
  const [type, setType] = useState("");
  const [location, setLocation] = useState("");
  const [governorate, setGovernorate] = useState("");
  const [phoneNum, setPhoneNum] = useState("");
  const [errorFields, setErrorFields] = useState([]);
  const options = [
    "Amman",
    "Irbid",
    "Zarqa",
    "Salt",
    "Mafraq",
    "Karak",
    "Madaba",
    "Jarash",
    "Ajloun",
    "Aqaba",
    "Ma'an",
    "Tafila",
  ];
  const [services, setServices] = useState([]);

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
            service: service,
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
          setService(null);
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
  useEffect(() => {
    axios
      .get("http://localhost:3000/nexusEmployee/serviceParent", {
        headers: { SESSION_ID: getSessionId() },
      })
      .then(
        (res) => {
          setServices(res.data);
          console.log("get is success");
        },
        (err) => {}
      );
  }, []);
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
      <Autocomplete
        value={service}
        onChange={(event, newValue) => {
          setService(newValue);
        }}
        options={services}
        renderInput={(params) => (
          <TextField
            {...params}
            label="Choose Insurance"
            required
            sx={{ width: "300px" }}
          />
        )}
      />
      <TextField
        disabled={service == null}
        id="name"
        label="Name of facility"
        onChange={(e) => {
          setName(e.target.value);
        }}
        value={name}
        error={errorFields.includes("name_reg")}
        required
        sx={{ width: "300px" }}
      />
      <TextField
        disabled={service == null}
        id="type"
        label="Type of facility"
        onChange={(e) => {
          setType(e.target.value);
        }}
        value={type}
        error={errorFields.includes("type_reg")}
        required
        sx={{ width: "300px" }}
      />
      <TextField
        disabled={service == null}
        id="location"
        label="Location of facility"
        onChange={(e) => {
          setLocation(e.target.value);
        }}
        value={location}
        error={errorFields.includes("location_reg")}
        required
        sx={{ width: "300px" }}
      />

      <TextField
        disabled={service == null}
        id="phoneNum"
        label="Phone number of facility"
        onChange={(e) => {
          setPhoneNum(e.target.value);
        }}
        value={phoneNum}
        error={errorFields.includes("phoneNum_reg")}
        required
        sx={{ width: "300px" }}
      />
      <Autocomplete
        disabled={service == null}
        value={governorate}
        onChange={(event, newValue) => {
          setGovernorate(newValue);
        }}
        options={options}
        renderInput={(params) => (
          <TextField
            {...params}
            label="Governorate"
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
