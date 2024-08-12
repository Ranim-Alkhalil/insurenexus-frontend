import React, { useEffect, useState } from "react";
import axios from "axios";
import {
  Grid,
  Card,
  CardContent,
  Typography,
  Box,
  createTheme,
  ThemeProvider,
} from "@mui/material";
import { getSessionId } from "../../../../api/SessionIdUtils";
import UserGrowthChart from "./UserGrowthChart";

const theme = createTheme({
  palette: {
    primary: {
      main: "#0f3554",
    },
    secondary: {
      main: "#CBB26B",
    },
  },
  typography: {
    h4: {
      fontWeight: 600,
    },
  },
});

export default function AdminInfo(props) {
  const [options, setOptions] = useState({
    insuranceCompaniesCount: 0,
    subscribedCompaniesCount: 0,
    usersType2Count: 0,
    usersType4Count: 0,
  });

  useEffect(() => {
    axios
      .get("http://localhost:3000/admin/webInfo", {
        headers: { SESSION_ID: getSessionId() },
      })
      .then((res) => {
        setOptions(res.data);
        console.log("Fetch was successful");
      })
      .catch((err) => {
        console.error("Error fetching data:", err);
      });
  }, []);

  return (
    <ThemeProvider theme={theme}>
      <Box sx={{ flexGrow: 1, p: 3 }}>
        <Grid container spacing={3}>
          <Grid item xs={12} sm={6} md={3}>
            <Card>
              <CardContent>
                <Typography variant="h5" component="div">
                  Employees
                </Typography>
                <Typography variant="h2" color="secondary">
                  {options.usersType4Count}
                </Typography>
              </CardContent>
            </Card>
          </Grid>
          <Grid item xs={12} sm={6} md={3}>
            <Card>
              <CardContent>
                <Typography variant="h5" component="div">
                  Clients
                </Typography>
                <Typography variant="h2" color="primary">
                  {options.usersType2Count}
                </Typography>
              </CardContent>
            </Card>
          </Grid>
          <Grid item xs={12} sm={6} md={3}>
            <Card>
              <CardContent>
                <Typography variant="h5" component="div">
                  Subscribed Companies
                </Typography>
                <Typography variant="h2" color="secondary">
                  {options.subscribedCompaniesCount}
                </Typography>
              </CardContent>
            </Card>
          </Grid>
          <Grid item xs={12} sm={6} md={3}>
            <Card>
              <CardContent>
                <Typography variant="h5" component="div">
                  Insurance Companies
                </Typography>
                <Typography variant="h2" color="primary">
                  {options.insuranceCompaniesCount}
                </Typography>
              </CardContent>
            </Card>
          </Grid>
          <Grid item xs={12}>
            <Card>
              <CardContent>
                <Typography variant="h5" component="div">
                  User Growth Over Time
                </Typography>
                <UserGrowthChart />
              </CardContent>
            </Card>
          </Grid>
        </Grid>
      </Box>
    </ThemeProvider>
  );
}
