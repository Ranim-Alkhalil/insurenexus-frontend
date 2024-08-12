import React, { useEffect, useState, useRef } from "react";
import axios from "axios";
import { getSessionId } from "../../../../api/SessionIdUtils";
import {
  Autocomplete,
  Button,
  Card,
  CardContent,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import { enqueueSnackbar } from "notistack";

export default function CompanyInfo(props) {
  const [options, setOptions] = useState([]);
  const [facilities, setFacilities] = useState([]);
  const [maxWidth, setMaxWidth] = useState(0);
  const [maxHeight, setMaxHeight] = useState(0);

  const cardRefs = useRef([]);
  const facilityCardRefs = useRef([]);

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
        (err) => {
          console.error("Failed to fetch insurances", err);
        }
      );

    axios
      .get("http://localhost:3000/insuranceEmployee/compFacilities", {
        headers: { SESSION_ID: getSessionId() },
      })
      .then(
        (res) => {
          setFacilities(res.data);
          console.log("get facilities is success");
        },
        (err) => {
          console.error("Failed to fetch facilities", err);
        }
      );
  }, []);

  useEffect(() => {
    if (cardRefs.current.length > 0 || facilityCardRefs.current.length > 0) {
      const widths = [...cardRefs.current, ...facilityCardRefs.current].map(
        (ref) => ref?.offsetWidth || 0
      );
      const heights = [...cardRefs.current, ...facilityCardRefs.current].map(
        (ref) => ref?.offsetHeight || 0
      );
      setMaxWidth(Math.max(...widths));
      setMaxHeight(Math.max(...heights));
    }
  }, [options, facilities]);

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
      <Typography variant="h6" color={"primary"}>
        Your Company Services
      </Typography>
      <Stack flexDirection={"row"} flexWrap={"wrap"} gap={2}>
        {options.map((insurance, index) => (
          <Card
            key={index}
            ref={(el) => (cardRefs.current[index] = el)}
            sx={{
              width: maxWidth || "auto",
              height: maxHeight || "auto",
              border: "1px solid",
              borderColor: "#CBB26B",
            }}
          >
            <CardContent>
              <Typography variant="body1" color={"primary"}>
                {insurance}
              </Typography>
            </CardContent>
          </Card>
        ))}
      </Stack>
      <Typography variant="h6" color={"primary"}>
        Your Company Facilities
      </Typography>
      <Stack flexDirection={"row"} flexWrap={"wrap"} gap={2}>
        {facilities.map((facility, index) => (
          <Card
            key={index}
            ref={(el) => (facilityCardRefs.current[index] = el)}
            sx={{
              width: maxWidth || "auto",
              height: maxHeight || "auto",
              border: "1px solid",
              borderColor: "#CBB26B",
            }}
          >
            <CardContent>
              <Typography variant="body1" color={"primary"}>
                {facility}
              </Typography>
            </CardContent>
          </Card>
        ))}
      </Stack>
    </Stack>
  );
}
