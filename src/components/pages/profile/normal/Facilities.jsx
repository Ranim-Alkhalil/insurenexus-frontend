import {
  Autocomplete,
  Button,
  Stack,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  TextField,
  Typography,
} from "@mui/material";
import axios from "axios";
import { useEffect, useState } from "react";
import { getSessionId } from "../../../../api/SessionIdUtils";

export default function Facilities(props) {
  const [services, setServices] = useState([]);
  const [selectedService, setSelectedService] = useState(null);
  const [facilities, setFacilities] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:3000/user/userInsurances", {
        headers: { SESSION_ID: getSessionId() },
      })
      .then(
        (res) => {
          setServices(res.data);
          console.log("Fetched insurance services successfully");
        },
        (err) => {
          console.error("Failed to fetch insurance services", err);
        }
      );
  }, []);

  useEffect(() => {
    if (selectedService) {
      axios
        .get("http://localhost:3000/user/userFacilities", {
          headers: { SESSION_ID: getSessionId() },
          params: { param1: selectedService },
        })
        .then(
          (res) => {
            setFacilities(res.data);
            console.log("Fetched facilities successfully");
          },
          (err) => {
            console.error("Failed to fetch facilities", err);
          }
        );
    }
  }, [selectedService]);

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
      <Typography variant="h3" color={"#0f3554"}>
        Facilities
      </Typography>
      <Autocomplete
        options={services}
        value={selectedService}
        onChange={(event, newValue) => setSelectedService(newValue)}
        renderInput={(params) => (
          <TextField {...params} label="Select Service" />
        )}
        sx={{ width: 300, mb: 2 }}
      />
      <TableContainer sx={{ width: "100%", mt: 5 }}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell
                width="200"
                sx={{ fontSize: "1.6rem", color: "#0f3554" }}
              >
                Category
              </TableCell>
              <TableCell
                width="200"
                sx={{ fontSize: "1.6rem", color: "#0f3554" }}
              >
                Name
              </TableCell>
              <TableCell
                width="200"
                sx={{ fontSize: "1.6rem", color: "#0f3554" }}
              >
                Governorate
              </TableCell>
              <TableCell
                width="400"
                sx={{ fontSize: "1.6rem", color: "#0f3554" }}
              >
                Location
              </TableCell>
              <TableCell
                width="200"
                sx={{ fontSize: "1.6rem", color: "#0f3554" }}
              >
                Phone Number
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {facilities.map((facility, index) => (
              <TableRow key={index}>
                <TableCell sx={{ fontSize: "1.4rem", color: "#0f3554" }}>
                  {facility.type}
                </TableCell>
                <TableCell sx={{ fontSize: "1.4rem", color: "#0f3554" }}>
                  {facility.name}
                </TableCell>
                <TableCell sx={{ fontSize: "1.4rem", color: "#0f3554" }}>
                  {facility.governorate}
                </TableCell>
                <TableCell sx={{ fontSize: "1.4rem", color: "#0f3554" }}>
                  {facility.location}
                </TableCell>
                <TableCell sx={{ fontSize: "1.4rem", color: "#0f3554" }}>
                  {facility.phone_number}
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Stack>
  );
}
