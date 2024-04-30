import {
  Autocomplete,
  Button,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import InputText from "../../createUser/InputText";
import { useEffect, useState } from "react";
import axios from "axios";
// import { DropzoneArea } from "@mui/lab";
export default function AddInsuComp(props) {
  const [company_name, setCompanyName] = useState("");
  const [email, setEmail] = useState("");
  const [phone_number, setPhoneNum] = useState("");
  const [address, setAddress] = useState("");
  const [mail, setMail] = useState("");
  const [fax, setFax] = useState("");
  const [description, setDescription] = useState("");
  const [logo, setLogo] = useState("");
  function handleAdd() {
    axios
      .post("http://localhost:3000/user/addNewInsuEmployee", {
        company_name: company_name,
        email: email,
        phone_number: phone_number,
        address: address,
        mail: mail,
        fax: fax,
        description: description,
        pdf: pdf,
        logo: logo,
      })
      .then((response) => {
        console.log("User added successfully:", response.data);
      })
      .catch((error) => {
        console.error("Error adding user:", error);
      });
  }

  const handleDropzoneChange = (newFiles) => {
    if (newFiles.length > 0) {
      setLogo(newFiles[0]);
    } else {
      setLogo(null);
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
        Add insurance company
      </Typography>

      <InputText
        id="company_name"
        label="Company_name"
        onChange={(e) => {
          setCompanyName(e.target.value);
        }}
        value={company_name}
      />
      <InputText
        id="email"
        label="email"
        onChange={(e) => {
          setEmail(e.target.value);
        }}
        value={email}
      />
      <InputText
        id="phone_number"
        label="phone_number"
        onChange={(e) => {
          setPhoneNum(e.target.value);
        }}
        value={phone_number}
      />
      <InputText
        id="address"
        label="address"
        onChange={(e) => {
          setAddress(e.target.value);
        }}
        value={address}
      />
      <InputText
        id="mail"
        label="mail"
        onChange={(e) => {
          setMail(e.target.value);
        }}
        value={mail}
      />
      <InputText
        id="fax"
        label="fax"
        onChange={(e) => {
          setFax(e.target.value);
        }}
        value={fax}
      />
      <InputText
        id="description"
        label="description"
        onChange={(e) => {
          setDescription(e.target.value);
        }}
        value={description}
      />
      <InputText id="pdf" label="pdf" />
      <InputText id="logo" label="logo" />
      {/* <DropzoneArea
        acceptedFiles={["image/*"]}
        onChange={handleDropzoneChange}
        filesLimit={1} // Limiting to one file
        maxFileSize={10485760} // 10 MB in bytes
      /> */}
      <Button sx={{ width: 100 }} variant="contained" onClick={handleAdd}>
        ADD
      </Button>
    </Stack>
  );
}
