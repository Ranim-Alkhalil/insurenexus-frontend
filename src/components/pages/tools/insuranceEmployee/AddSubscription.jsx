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
import { enqueueSnackbar } from "notistack";

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
  const currentYear = new Date().getFullYear();
  const years = Array.from({ length: 11 }, (_, index) => currentYear + index);

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
  const [amount, setAmount] = useState(null);
  const [active, setActive] = useState(null);
  const [formEnabled, setFormEnabled] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  const handleDateChange = (key, value, type) => {
    if (type === "start") {
      setStartDate((prevState) => ({ ...prevState, [key]: value }));
    } else {
      setEndDate((prevState) => ({ ...prevState, [key]: value }));
    }
  };

  const handlePaidChange = (event) => {
    setPaid(event.target.value);
  };

  const handleActiveChange = (event) => {
    setActive(event.target.value);
  };

  useEffect(() => {
    axios
      .get("http://localhost:3000/insuranceEmployee/compInsurances", {
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

  const checkNationalID = () => {
    axios
      .get("http://localhost:3000/insuranceEmployee/checkNationalID", {
        headers: { SESSION_ID: getSessionId() },
        params: { param1: nationalID },
      })
      .then(
        (res) => {
          if (res.data.exists) {
            setUserName(`${res.data.firstName} ${res.data.lastName}`);
            setFormEnabled(true);
            setErrorMessage("");
          } else {
            setUserName(null);
            setFormEnabled(false);
            setErrorMessage("No user found with such national ID");
          }
        },
        (err) => {
          setUserName(null);
          setFormEnabled(false);
          setErrorMessage("No user found with such national ID");
        }
      );
  };

  const formatDate = (date) => {
    return `${date.day}-${date.month}-${date.year}`;
  };

  const handleAdd = () => {
    axios
      .post(
        "http://localhost:3000/insuranceEmployee/addSubscription",
        {
          nationalID: nationalID,
          service: service,
          startDate: formatDate(startDate),
          endDate: formatDate(endDate),
          paid: paid,
          active: active,
          amount: amount,
        },
        {
          headers: { SESSION_ID: getSessionId() },
        }
      )
      .then((response) => {
        console.log("Subscription added successfully:", response.data);

        enqueueSnackbar("Subscription is added", {
          variant: "success",
        });
      })
      .catch((error) => {
        console.error("Error adding subscription:", error);
        enqueueSnackbar("Failed to add subscription", {
          variant: "error",
        });
      });
  };

  return (
    <Stack
      flexDirection={"column"}
      height={"100%"}
      width="100%"
      gap={4}
      justifyContent={"flex-start"}
      alignItems={"flex-start"}
      p={2}
      sx={{ overflowX: "hidden" }}
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
      {userName && (
        <Typography variant="h6" color={"#CBB26B"}>
          User: {userName}
        </Typography>
      )}
      {errorMessage && (
        <Typography variant="h6" color="error">
          {errorMessage}
        </Typography>
      )}
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

      <Stack direction="row" spacing={2} alignItems="center">
        <Typography variant="h5">Start Date</Typography>
        <Autocomplete
          disabled={!formEnabled}
          value={startDate.day}
          onChange={(event, newValue) =>
            handleDateChange("day", newValue, "start")
          }
          options={days}
          renderInput={(params) => (
            <TextField {...params} label="Day" variant="outlined" />
          )}
          sx={{ width: "170px" }}
        />
        <Autocomplete
          disabled={!formEnabled}
          value={startDate.month}
          onChange={(event, newValue) =>
            handleDateChange("month", newValue, "start")
          }
          options={months}
          renderInput={(params) => (
            <TextField {...params} label="Month" variant="outlined" />
          )}
          sx={{ width: "170px" }}
        />
        <Autocomplete
          disabled={!formEnabled}
          value={startDate.year}
          onChange={(event, newValue) =>
            handleDateChange("year", newValue, "start")
          }
          options={years}
          renderInput={(params) => (
            <TextField {...params} label="Year" variant="outlined" />
          )}
          sx={{ width: "170px" }}
        />
      </Stack>
      <Stack direction="row" spacing={2} alignItems="center">
        <Typography variant="h5">End Date</Typography>
        <Autocomplete
          disabled={!formEnabled}
          value={endDate.day}
          onChange={(event, newValue) =>
            handleDateChange("day", newValue, "end")
          }
          options={days}
          renderInput={(params) => (
            <TextField {...params} label="Day" variant="outlined" />
          )}
          sx={{ width: "170px" }}
        />
        <Autocomplete
          disabled={!formEnabled}
          value={endDate.month}
          onChange={(event, newValue) =>
            handleDateChange("month", newValue, "end")
          }
          options={months}
          renderInput={(params) => (
            <TextField {...params} label="Month" variant="outlined" />
          )}
          sx={{ width: "170px" }}
        />
        <Autocomplete
          disabled={!formEnabled}
          value={endDate.year}
          onChange={(event, newValue) =>
            handleDateChange("year", newValue, "end")
          }
          options={years}
          renderInput={(params) => (
            <TextField {...params} label="Year" variant="outlined" />
          )}
          sx={{ width: "170px" }}
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
      <TextField
        id="amount"
        label="Amount paid"
        disabled={!formEnabled}
        sx={{ width: 250 }}
        onChange={(e) => {
          setAmount(e.target.value);
        }}
        value={amount}
      />
      <Button sx={{ width: 100 }} variant="contained" onClick={handleAdd}>
        ADD
      </Button>
    </Stack>
  );
}
