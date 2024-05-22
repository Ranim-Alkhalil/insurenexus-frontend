import {
  Autocomplete,
  Button,
  Stack,
  TextField,
  Typography,
} from "@mui/material";

import { useEffect, useState } from "react";
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

  // const [img, setImg] = useState(null);
  // const [pdf, setPdf] = useState(null);

  function fileToBase64(file) {
    const temporaryFileReader = new FileReader();

    return new Promise((resolve, reject) => {
      temporaryFileReader.onerror = () => {
        temporaryFileReader.abort();
        reject(new DOMException("Problem parsing input file."));
      };

      temporaryFileReader.onload = () => {
        resolve(temporaryFileReader.result);
      };
      temporaryFileReader.readAsDataURL(file);
    });
  }

  // function onPdfSelect(event) {
  //   setPdf(event.target.files[0]);
  // }
  function onImgSelect(event) {
    setImg(event.target.files[0]);
  }
  function handleAdd() {
    // fileToBase64(pdf).then((pdfResult) => {
    // fileToBase64(img).then((imgResult) => {
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
          // pdf: pdfResult,
          // logo: imgResult,
        },
        {
          headers: { SESSION_ID: getSessionId() },
        }
      )
      .then((response) => {
        console.log("Company added successfully:", response.data);
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
    // });
    // }
    // );
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
      <Typography variant="h3" color={"primary"} pb={5}>
        Add insurance company
      </Typography>

      <TextField
        id="company_name"
        label="Company Name"
        onChange={(e) => {
          setCompanyName(e.target.value);
        }}
        value={company_name}
      />
      <TextField
        id="email"
        label="Email"
        onChange={(e) => {
          setEmail(e.target.value);
        }}
        value={email}
      />
      <TextField
        id="phone_number"
        label="Phone Number"
        onChange={(e) => {
          setPhoneNum(e.target.value);
        }}
        value={phone_number}
      />
      <TextField
        id="address"
        label="Address"
        onChange={(e) => {
          setAddress(e.target.value);
        }}
        value={address}
      />
      <TextField
        id="mail"
        label="Mail"
        onChange={(e) => {
          setMail(e.target.value);
        }}
        value={mail}
      />
      <TextField
        id="fax"
        label="Fax"
        onChange={(e) => {
          setFax(e.target.value);
        }}
        value={fax}
      />

      {/* pdf */}
      {/* <input
        id={"pdf-manual-input"}
        type="file"
        onChange={onPdfSelect}
        style={{ display: "none" }}
      />
      <Typography>
        {pdf != null
          ? "Selected File : " + pdf.name
          : "Please Select Brochoure File!"}
      </Typography>

      <Button
        variant="contained"
        onClick={() => {
          document.getElementById("pdf-manual-input").click();
        }}
      >
        Select Brochoure PDF
      </Button> */}
      {/* image */}
      {/* <input
        id={"image-input"}
        type="file"
        onChange={onImgSelect}
        style={{ display: "none" }}
      />
      <Typography>
        {img != null ? "Selected File : " + img.name : "Please Select logo"}
      </Typography>
      <Button
        variant="contained"
        onClick={() => {
          document.getElementById("image-input").click();
        }}
      >
        Select logo
      </Button> */}

      <Button sx={{ width: 100 }} variant="contained" onClick={handleAdd}>
        ADD
      </Button>
    </Stack>
  );
}
