import { Box, Divider, Typography, Stack, Grid } from "@mui/material";
import { useEffect, useState } from "react";
import CircleIcon from "@mui/icons-material/Circle";
import axios from "axios";
import { getSessionId } from "../../../../api/SessionIdUtils";

export default function Insurances(props) {
  const [insurances, setInsurances] = useState([]);
  useEffect(() => {
    axios
      .get("http://localhost:3000/user/insurances", {
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
              p={4}
              sx={{
                width: {
                  xs: 1, // Full width on extra-small screens
                  sm: 500, // 500px on small screens
                  md: 550, // 550px on medium screens
                },
              }}
            >
              <Box sx={{ fontSize: "1.4rem", mb: 1 }}>Type of insurance :</Box>
              <Box sx={{ fontSize: "1.3rem", mb: 2 }}>
                <CircleIcon sx={{ fontSize: "small", color: "#CBB26B" }} />
                {insurance.service_name}
              </Box>
              <Divider color={"#CBB26B"} />

              <Box sx={{ fontSize: "1.4rem", mt: 2, mb: 1 }}>
                Company Name :
              </Box>
              <Box sx={{ fontSize: "1.3rem", mb: 2 }}>
                <CircleIcon sx={{ fontSize: "small", color: "#CBB26B" }} />
                {insurance.company_name}
              </Box>

              <Divider color={"#CBB26B"} />
              <Box sx={{ fontSize: "1.4rem", mt: 2, mb: 1 }}>
                Start Date :
                <Typography sx={{ fontSize: "1.2rem", display: "inline" }}>
                  (d-m-y)
                </Typography>
              </Box>
              <Box sx={{ fontSize: "1.3rem", mb: 2 }}>
                <CircleIcon sx={{ fontSize: "small", color: "#CBB26B" }} />
                {insurance.subscription_started_at}
              </Box>

              <Divider color={"#CBB26B"} />
              <Box sx={{ fontSize: "1.4rem", mt: 2, mb: 1 }}>
                End Date :
                <Typography
                  noWrap
                  sx={{ fontSize: "1.2rem", display: "inline" }}
                >
                  (d-m-y)
                </Typography>
              </Box>
              <Box sx={{ fontSize: "1.3rem" }}>
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
