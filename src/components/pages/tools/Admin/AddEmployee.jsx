import {
  Autocomplete,
  Button,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import { useEffect, useState } from "react";
import InputText from "../../createUser/InputText";
import axios from "axios";
import { enqueueSnackbar } from "notistack";
import { getSessionId } from "../../../../api/SessionIdUtils";

export default function AddInsuNexus(props) {
  const [company_name, setcompany_name] = useState(null);
  const [options, setOptions] = useState([]);
  const [firstName, setFirstName] = useState("");
  const [secondName, setSecondName] = useState("");
  const [lastName, setLastName] = useState("");
  const [nationalID, setNationalID] = useState("");
  const [email, setEmail] = useState("");
  const [phoneNum, setPhoneNum] = useState("");
  const [errorFields, setErrorFields] = useState([]);
  const nameRegex = /^[a-zA-Z]{1,15}$/;
  const NIDRegex = /^\d{10}$/;
  const emailRegex = /^[a-zA-Z0-9]+@[a-zA-Z0-9]+\.[a-zA-Z0-9]+$/;
  const phoneRegex = /^07\d{8}$/;
  const handleAdd = () => {
    console.log(firstName);
    const errors = [];
    if (!nameRegex.test(firstName)) errors.push("first_name_reg");
    if (!nameRegex.test(secondName)) errors.push("second_name_reg");
    if (!nameRegex.test(lastName)) errors.push("last_name_reg");
    if (!NIDRegex.test(nationalID)) errors.push("national_id_reg");
    if (!emailRegex.test(email)) errors.push("email_reg");
    if (!phoneRegex.test(phoneNum)) errors.push("phone_num_reg");
    if (!firstName.trim()) errors.push("first_name");
    if (!secondName.trim()) errors.push("second_name");
    if (!lastName.trim()) errors.push("last_name");
    if (!nationalID.trim()) errors.push("national_id");
    if (!email.trim()) errors.push("email");
    if (!phoneNum.trim()) errors.push("phone_num");

    console.log(errors);
    setErrorFields(errors);

    if (errors.length === 0) {
      axios
        .post(
          "http://localhost:3000/admin/addNexusEmp",
          {
            first_name: firstName,
            second_name: secondName,
            last_name: lastName,
            national_id: nationalID,
            email: email,
            phone_number: phoneNum,
          },
          {
            headers: { SESSION_ID: getSessionId() },
          }
        )
        .then((response) => {
          console.log("User added successfully:", response.data);

          setFirstName("");
          setSecondName("");
          setLastName("");
          setNationalID("");
          setEmail("");
          setPhoneNum("");

          enqueueSnackbar("User Added to " + company_name, {
            variant: "success",
          });
        })
        .catch((error) => {
          console.error("Error adding user:", error);
          enqueueSnackbar("Failed to Add User to " + company_name, {
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
        Add Employee
      </Typography>

      <Stack
        width="100%"
        flexDirection="row"
        flexWrap={"wrap"}
        alignItems={"flex-start"}
        justifyContent={"flex-start"}
        gap={2}
      >
        <TextField
          id="first_name"
          label="First Name"
          onChange={(e) => {
            setFirstName(e.target.value);
          }}
          value={firstName}
          error={
            errorFields.includes("first_name_reg") ||
            errorFields.includes("first_name")
          }
          helperText={
            errorFields.includes("first_name")
              ? "First name is required"
              : errorFields.includes("first_name_reg")
              ? "Invalid first name it must contain only characters"
              : ""
          }
          required
          sx={{ flexGrow: 1 }}
        />
        <TextField
          id="second_name"
          label="Second Name"
          onChange={(e) => {
            setSecondName(e.target.value);
          }}
          value={secondName}
          error={
            errorFields.includes("second_name_reg") ||
            errorFields.includes("second_name")
          }
          helperText={
            errorFields.includes("second_name")
              ? "Second name is required"
              : errorFields.includes("second_name_reg")
              ? "Invalid second name it must contain only characters"
              : ""
          }
          required
          sx={{ flexGrow: 1 }}
        />
        <TextField
          id="last_name"
          label="Last Name"
          onChange={(e) => {
            setLastName(e.target.value);
          }}
          value={lastName}
          error={
            errorFields.includes("last_name_reg") ||
            errorFields.includes("last_name")
          }
          helperText={
            errorFields.includes("last_name")
              ? "Last name is required"
              : errorFields.includes("last_name_reg")
              ? "Invalid last name it must contain only characters"
              : ""
          }
          required
          sx={{ flexGrow: 1 }}
        />
      </Stack>
      <Stack
        width="100%"
        flexDirection="row"
        flexWrap={"wrap"}
        alignItems={"flex-start"}
        justifyContent={"flex-start"}
        gap={2}
      >
        <TextField
          id="national_id"
          label="National ID"
          onChange={(e) => {
            setNationalID(e.target.value);
          }}
          value={nationalID}
          error={
            errorFields.includes("national_id_reg") ||
            errorFields.includes("national_id")
          }
          helperText={
            errorFields.includes("national_id")
              ? "National ID is required"
              : errorFields.includes("last_name_reg")
              ? "Invalid national ID it must contain only 10 integers"
              : ""
          }
          required
          sx={{ flexGrow: 1 }}
        />
        <TextField
          id="email"
          label="Email"
          onChange={(e) => {
            setEmail(e.target.value);
          }}
          value={email}
          error={
            errorFields.includes("email_reg") || errorFields.includes("email")
          }
          helperText={
            errorFields.includes("email")
              ? "Email is required"
              : errorFields.includes("email_reg")
              ? "Invalid email"
              : ""
          }
          required
          sx={{ flexGrow: 1 }}
        />
        <TextField
          id="phone_num"
          label="Phone Number"
          onChange={(e) => {
            setPhoneNum(e.target.value);
          }}
          value={phoneNum}
          error={
            errorFields.includes("phone_num_reg") ||
            errorFields.includes("phone_num")
          }
          helperText={
            errorFields.includes("phone_num")
              ? "Phone number is required"
              : errorFields.includes("phone_num_reg")
              ? "Invalid phone number"
              : ""
          }
          required
          sx={{ flexGrow: 1 }}
        />
      </Stack>
      <Button sx={{ width: 100 }} variant="contained" onClick={handleAdd}>
        ADD
      </Button>
    </Stack>
  );
}
