import { Button, Stack, TextField, Typography } from "@mui/material";
import { useState } from "react";
import axios from "axios";
import { enqueueSnackbar } from "notistack";
import { getSessionId } from "../../../../api/SessionIdUtils";

export default function AddInsuComp(props) {
  const [company_name, setCompanyName] = useState("");
  const [email, setEmail] = useState("");
  const [phone_number, setPhoneNum] = useState("");
  const [address, setAddress] = useState("");
  const [mail, setMail] = useState("");
  const [fax, setFax] = useState("");

  function handleAdd() {
    const errors = [];
    const nameRegex = /^[a-zA-Z0-9 ]{1,100}$/;
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const phoneRegex = /^0\d{8,9}$/;
    const addressRegex = /^[a-zA-Z0-9 ,.-]{1,100}$/;
    const faxRegex = /^0\d{8,9}$/;

    if (!nameRegex.test(company_name)) {
      errors.push(
        "Company name must be 1-100 characters long and can include letters, numbers, and spaces."
      );
    }
    if (!emailRegex.test(email)) {
      errors.push("Invalid email format.");
    }
    if (!phoneRegex.test(phone_number)) {
      errors.push("Phone number must be 9 or 10 digits and start with zero.");
    }
    if (!addressRegex.test(address)) {
      errors.push(
        "Address must be 1-100 characters long and can include letters, numbers, and common punctuation."
      );
    }
    if (mail && !addressRegex.test(mail)) {
      errors.push(
        "Mail address must be 1-100 characters long and can include letters, numbers, and common punctuation."
      );
    }
    if (fax && !faxRegex.test(fax)) {
      errors.push("Fax number must be 9 or 10 digits and start with zero.");
    }

    if (errors.length > 0) {
      errors.forEach((error) => {
        enqueueSnackbar(error, { variant: "error" });
      });
      return;
    }

    axios
      .post(
        "http://localhost:3000/nexusEmployee/addInsuComp",
        {
          company_name: company_name,
          email: email,
          phone_number: phone_number,
          address: address,
          mail: mail,
          fax: fax,
        },
        {
          headers: { SESSION_ID: getSessionId() },
        }
      )
      .then((response) => {
        console.log("Company added successfully:", response.data);
        setAddress("");
        setCompanyName("");
        setEmail("");
        setFax("");
        setMail("");
        setPhoneNum("");
        enqueueSnackbar("Company added successfully", {
          variant: "success",
        });
      })
      .catch((error) => {
        console.error("Error adding company:", error);
        enqueueSnackbar("Failed to Add Company " + company_name, {
          variant: "error",
        });
      });
  }

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
        Add insurance company
      </Typography>

      <TextField
        id="company_name"
        label="Company Name"
        onChange={(e) => {
          setCompanyName(e.target.value);
        }}
        value={company_name}
        required
        sx={{ width: 300 }}
      />
      <Stack
        width="100%"
        flexDirection="row"
        flexWrap={"wrap"}
        alignItems={"flex-start"}
        justifyContent={"flex-start"}
        gap={2}
      >
        <TextField
          id="email"
          label="Email"
          onChange={(e) => {
            setEmail(e.target.value);
          }}
          value={email}
          required
          sx={{ flexGrow: 1 }}
        />
        <TextField
          id="phone_number"
          label="Phone Number"
          onChange={(e) => {
            setPhoneNum(e.target.value);
          }}
          value={phone_number}
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
          id="address"
          label="Address"
          onChange={(e) => {
            setAddress(e.target.value);
          }}
          value={address}
          required
          sx={{ flexGrow: 1 }}
        />
        <TextField
          id="mail"
          label="Mail"
          onChange={(e) => {
            setMail(e.target.value);
          }}
          value={mail}
          sx={{ flexGrow: 1 }}
        />
        <TextField
          id="fax"
          label="Fax"
          onChange={(e) => {
            setFax(e.target.value);
          }}
          value={fax}
          sx={{ flexGrow: 1 }}
        />
      </Stack>
      <Button sx={{ width: 100 }} variant="contained" onClick={handleAdd}>
        ADD
      </Button>
    </Stack>
  );
}
