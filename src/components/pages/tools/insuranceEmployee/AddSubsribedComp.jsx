import { Button, Stack, TextField, Typography } from "@mui/material";

import { useState } from "react";
import axios from "axios";
import { enqueueSnackbar } from "notistack";
import { getSessionId } from "../../../../api/SessionIdUtils";

export default function AddSubscribedComp(props) {
  const [company_name, setCompanyName] = useState("");
  const [email, setEmail] = useState("");
  const [address, setAddress] = useState("");
  const [phoneNum, setPhoneNum] = useState("");
  const [errorFields, setErrorFields] = useState([]);
  const nameRegex = /^[a-zA-Z ]{1,15}$/;
  const addressRegex = /^[\w\s\-,.]{1,}$/;
  const emailRegex = /^[a-zA-Z0-9]+@[a-zA-Z0-9]+\.[a-zA-Z0-9]+$/;
  const phoneRegex = /^(07\d{8}|06\d{7})$/;
  const handleAdd = () => {
    const errors = [];
    if (!nameRegex.test(company_name)) errors.push("company_name_reg");
    if (!addressRegex.test(address)) errors.push("address_reg");
    if (!emailRegex.test(email)) errors.push("email_reg");
    if (!phoneRegex.test(phoneNum)) errors.push("phone_num_reg");
    if (!company_name.trim()) errors.push("company_name");
    if (!address.trim()) errors.push("address");
    if (!email.trim()) errors.push("email");
    if (!phoneNum.trim()) errors.push("phone_num");

    console.log(errors);
    setErrorFields(errors);

    if (errors.length === 0) {
      axios
        .post(
          "http://localhost:3000/insuranceEmployee/addSubComp",
          {
            company_name: company_name,
            email: email,
            phoneNum: phoneNum,
            address: address,
          },
          {
            headers: { SESSION_ID: getSessionId() },
          }
        )
        .then((response) => {
          console.log("User added successfully:", response.data);
          setCompanyName("");
          setEmail("");
          setAddress("");
          setPhoneNum("");
          enqueueSnackbar(company_name + " is added ", {
            variant: "success",
          });
        })
        .catch((error) => {
          console.error("Error adding user:", error);
          enqueueSnackbar("Failed to Add  " + company_name, {
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
      gap={3}
      justifyContent={"flex-start"}
      alignItems={"flex-start"}
      p={2}
    >
      <Typography variant="h3" color={"primary"} pb={5}>
        Add company
      </Typography>

      <TextField
        sx={{ width: "350px" }}
        id="company_name"
        label="Company Name"
        onChange={(e) => {
          setCompanyName(e.target.value);
        }}
        value={company_name}
        error={
          errorFields.includes("company_name_reg") ||
          errorFields.includes("company_name")
        }
        helperText={
          errorFields.includes("company_name")
            ? "company_name is required"
            : errorFields.includes("company_name_reg")
            ? "Invalid company_name it must contain only characters"
            : ""
        }
        required
      />

      <TextField
        sx={{ width: "350px" }}
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
      />
      <TextField
        sx={{ width: "350px" }}
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
      />
      <TextField
        sx={{ width: "350px" }}
        id="address"
        label="Address"
        onChange={(e) => {
          setAddress(e.target.value);
        }}
        value={address}
        error={
          errorFields.includes("address_reg") || errorFields.includes("address")
        }
        helperText={
          errorFields.includes("address")
            ? "address is required"
            : errorFields.includes("address_reg")
            ? "Invalid address"
            : ""
        }
        required
      />
      <Button sx={{ width: 100 }} variant="contained" onClick={handleAdd}>
        ADD
      </Button>
    </Stack>
  );
}
