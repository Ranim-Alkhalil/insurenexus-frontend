import {
  Box,
  Divider,
  Typography,
  TextField,
  Stack,
  Grid,
} from "@mui/material";
import { useEffect, useState } from "react";
import CircleIcon from "@mui/icons-material/Circle";
import axios from "axios";
import { getSessionId } from "../../../../api/SessionIdUtils";
export default function InsurancesEmp(props) {
  const [insurances, setInsurances] = useState([]);
  useEffect(() => {
    axios
      .get("http://localhost:3000/manager/insurances", {
        headers: { SESSION_ID: getSessionId() },
      })
      .then(
        (res) => {
          setInsurances(res.data);
        },
        (err) => {}
      );
  }, []);
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
        Insurances
      </Typography>
      <Grid container spacing={2}>
        {insurances.map((insurance, index) => (
          <Grid item key={index} xs={12} sm={6} md={6} lg={6} xl={6}>
            <Box
              border={1}
              borderRadius={2}
              borderColor={"#CBB26B"}
              mt={5}
              p={3}
              width={500}
            >
              <Box className="cardLabel">Type of insurance :</Box>
              <Box className="cardContent">
                <CircleIcon sx={{ fontSize: "small", color: "#CBB26B" }} />
                {insurance.service_name}
              </Box>
              <Divider color={"#CBB26B"} />

              <Box className="cardLabel">Company Name :</Box>
              <Box className="cardContent">
                <CircleIcon sx={{ fontSize: "small", color: "#CBB26B" }} />
                {insurance.company_name}
              </Box>

              <Divider color={"#CBB26B"} />
              <Box className="cardLabel" sx={{ padding: 0 }}>
                Start Date :
                <Typography className="cardLabel">(d-m-y)</Typography>
              </Box>
              <Box className="cardContent">
                <CircleIcon sx={{ fontSize: "small", color: "#CBB26B" }} />
                {insurance.subscription_started_at}
              </Box>

              <Divider color={"#CBB26B"} />
              <Box className="cardLabel" sx={{ padding: 0 }}>
                End Date :
                <Typography noWrap className="cardLabel">
                  (d-m-y)
                </Typography>
              </Box>
              <Box className="cardContent">
                <CircleIcon sx={{ fontSize: "small", color: "#CBB26B" }} />
                {insurance.subscription_end_at}
              </Box>
            </Box>
          </Grid>
        ))}
      </Grid>
    </Stack>
  );
}
