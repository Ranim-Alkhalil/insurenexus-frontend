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

export default function AddSubscription(props) {
  const [service, setServices] = useState(null);
  const [newService, setCompanies] = useState(null);
  const [child, setChild] = useState(null);
  useEffect(() => {
    axios.get("http://localhost:3000/user/companyServices").then(
      (res) => {
        setServices(res.data);
      },
      (err) => {}
    );
  }, []);
  useEffect(() => {
    axios.get("http://localhost:3000/user/subscribedCompanies").then(
      (res) => {
        const com = res.data;
        setCompanies(["none", ...com]);
      },
      (err) => {}
    );
  }, []);

  return (
    <>
      <Typography variant="h2" color={"primary"} pb={5}>
        subscription
      </Typography>
      <Autocomplete
        value={service}
        onChange={(event, newValue) => {
          setService(newValue);
        }}
        sx={{ width: 350 }}
        options={services}
        renderInput={(params) => (
          <TextField {...params} label="Service" variant="outlined" />
        )}
      />
      <Autocomplete
        value={company}
        onChange={(event, newValue) => {
          setCompany(newValue);
        }}
        sx={{ width: 350 }}
        options={companies}
        renderInput={(params) => (
          <TextField {...params} label="Company Name" variant="outlined" />
        )}
      />
      <TextField id="start" label="Start date" />
      <TextField id="end" label="End date" />
      <TextField id="paid" label="Paid" />
      <TextField id="amount" label="Amount" />
    </>
  );
}
