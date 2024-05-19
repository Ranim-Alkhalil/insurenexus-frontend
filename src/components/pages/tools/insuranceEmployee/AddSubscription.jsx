import {
  Autocomplete,
  FormControlLabel,
  Radio,
  RadioGroup,
  Stack,
  TextField,
  Typography,
  Button,
} from "@mui/material";
import { useEffect, useState } from "react";
import axios from "axios";
import { getSessionId } from "../../../../api/SessionIdUtils";

export default function AddSubscription(props) {
  const days = Array.from({ length: 31 }, (_, index) => index + 1);
  const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];
  const years = Array.from(
    { length: 100 },
    (_, index) => new Date().getFullYear() - index
  );
  const [startDate, setStartDate] = useState({
    day: null,
    month: null,
    year: null,
  });
  const [endDate, setEndDate] = useState({
    day: null,
    month: null,
    year: null,
  });
  const [service, setService] = useState(null);
  const [options, setOptions] = useState([]);
  const [nationalID, setNationalID] = useState("");
  const [userName, setUserName] = useState(null);
  const [paid, setPaid] = useState(null);
  const [active, setActive] = useState(null);
  const [formEnabled, setFormEnabled] = useState(false);

  useEffect(() => {
    axios
      .get("http://localhost:3000/insuranceEmployee/checkNationalID", {
        headers: { SESSION_ID: getSessionId() },
        params: { param1: nationalID },
      })
      .then(
        (res) => {
          setUserName(res.data);
          console.log("get is success");
        },
        (err) => {}
      );
  }, []);

  const handleStartDateChange = (key, value) => {
    setStartDate((prevState) => ({
      ...prevState,
      [key]: value,
    }));
  };

  const handleEndDateChange = (key, value) => {
    setEndDate((prevState) => ({
      ...prevState,
      [key]: value,
    }));
  };

  const handlePaidChange = (event) => {
    setPaid(event.target.value);
  };

  const handleActiveChange = (event) => {
    setActive(event.target.value);
  };

  const checkNationalID = () => {
    axios
      .get("http://localhost:3000/checkNationalID", {
        headers: { SESSION_ID: getSessionId() },
        params: { nationalID: nationalID },
      })
      .then(
        (res) => {
          if (res.data.exists) {
            setUserName(`${res.data.firstName} ${res.data.lastName}`);
            setFormEnabled(true);
          } else {
            setUserName(null);
            setFormEnabled(false);
          }
        },
        (err) => {
          setUserName(null);
          setFormEnabled(false);
        }
      );
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
        Add Subscription
      </Typography>
      <Stack direction="row" spacing={2}>
        <TextField
          id="nationalID"
          label="National ID"
          sx={{ width: "350px" }}
          onChange={(e) => {
            setNationalID(e.target.value);
          }}
          value={nationalID}
          required
        />
        <Button variant="contained" onClick={checkNationalID}>
          Check
        </Button>
      </Stack>
      {userName && <Typography variant="h6">User: {userName}</Typography>}
      <Autocomplete
        disabled={!formEnabled}
        value={service}
        onChange={(event, newValue) => {
          setService(newValue);
        }}
        sx={{ width: 350 }}
        options={options}
        renderInput={(params) => (
          <TextField {...params} label="Service" variant="outlined" required />
        )}
      />

      <Stack direction="row" spacing={2}>
        <Typography variant="h5">Start Date</Typography>
        <Autocomplete
          disabled={!formEnabled}
          value={startDate.day}
          onChange={(event, newValue) => handleStartDateChange("day", newValue)}
          options={days}
          renderInput={(params) => (
            <TextField {...params} label="Day" variant="outlined" />
          )}
        />
        <Autocomplete
          disabled={!formEnabled}
          value={startDate.month}
          onChange={(event, newValue) =>
            handleStartDateChange("month", newValue)
          }
          options={months}
          renderInput={(params) => (
            <TextField {...params} label="Month" variant="outlined" />
          )}
        />
        <Autocomplete
          disabled={!formEnabled}
          value={startDate.year}
          onChange={(event, newValue) =>
            handleStartDateChange("year", newValue)
          }
          options={years}
          renderInput={(params) => (
            <TextField {...params} label="Year" variant="outlined" />
          )}
        />
      </Stack>
      <Stack direction="row" spacing={2}>
        <Typography variant="h5">End Date</Typography>
        <Autocomplete
          disabled={!formEnabled}
          value={endDate.day}
          onChange={(event, newValue) => handleEndDateChange("day", newValue)}
          options={days}
          renderInput={(params) => (
            <TextField {...params} label="Day" variant="outlined" />
          )}
        />
        <Autocomplete
          disabled={!formEnabled}
          value={endDate.month}
          onChange={(event, newValue) => handleEndDateChange("month", newValue)}
          options={months}
          renderInput={(params) => (
            <TextField {...params} label="Month" variant="outlined" />
          )}
        />
        <Autocomplete
          disabled={!formEnabled}
          value={endDate.year}
          onChange={(event, newValue) => handleEndDateChange("year", newValue)}
          options={years}
          renderInput={(params) => (
            <TextField {...params} label="Year" variant="outlined" />
          )}
        />
      </Stack>
      <Stack direction="column" spacing={2}>
        <Typography variant="h5">Is this service paid?</Typography>
        <RadioGroup value={paid} onChange={handlePaidChange} row>
          <FormControlLabel
            value="Yes"
            control={<Radio />}
            label="Yes"
            disabled={!formEnabled}
          />
          <FormControlLabel
            value="No"
            control={<Radio />}
            label="No"
            disabled={!formEnabled}
          />
        </RadioGroup>
      </Stack>
      <Stack direction="column" spacing={2}>
        <Typography variant="h6">Is this service active?</Typography>
        <RadioGroup value={active} onChange={handleActiveChange} row>
          <FormControlLabel
            value="Yes"
            control={<Radio />}
            label="Yes"
            disabled={!formEnabled}
          />
          <FormControlLabel
            value="No"
            control={<Radio />}
            label="No"
            disabled={!formEnabled}
          />
        </RadioGroup>
      </Stack>
      <TextField id="amount" label="Amount" disabled={!formEnabled} />
    </Stack>
  );
}
