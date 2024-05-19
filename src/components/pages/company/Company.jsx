import {
  Autocomplete,
  Box,
  Button,
  Divider,
  Grid,
  Paper,
  Rating,
  Stack,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableRow,
  TextField,
  Typography,
} from "@mui/material";
import { useEffect, useState } from "react";
import axios from "axios";
import { enqueueSnackbar } from "notistack";
import cover from "./image/cover.jpg";
import { useParams } from "react-router-dom";

import styled from "@emotion/styled";
import { getSessionId } from "../../../api/SessionIdUtils";
export default function Company(props) {
  const [info, setInfo] = useState([]);
  const [rate, setRate] = useState(null);
  const [comments, setComments] = useState([]);
  const [insurances, setInsurances] = useState([]);
  const { companyName } = useParams();
  useEffect(() => {
    axios
      .get("http://localhost:3000/user/companyInfo", {
        headers: { SESSION_ID: getSessionId() },
        params: {
          param1: companyName,
        },
      })
      .then((res) => {
        console.log("get is success", res.data);
        setInfo(res.data);
      })
      .catch((err) => {
        console.error(err);
      });
  }, []);
  useEffect(() => {
    axios
      .get("http://localhost:3000/user/compRate", {
        headers: { SESSION_ID: getSessionId() },
        params: {
          param1: companyName,
        },
      })
      .then((res) => {
        console.log("get is success", res.data);
        setRate(res.data.rating);
      })
      .catch((err) => {
        console.error(err);
      });
  }, []);
  useEffect(() => {
    axios
      .get("http://localhost:3000/user/compComment", {
        headers: { SESSION_ID: getSessionId() },
        params: {
          param1: companyName,
        },
      })
      .then((res) => {
        console.log("get is success", res.data);
        setComments(res.data);
      })
      .catch((err) => {
        console.error(err);
      });
  }, []);
  useEffect(() => {
    axios
      .get("http://localhost:3000/user/compInsu", {
        headers: { SESSION_ID: getSessionId() },
        params: {
          param1: companyName,
        },
      })
      .then((res) => {
        console.log("get is success", res.data);
        setInsurances(res.data);
      })
      .catch((err) => {
        console.error(err);
      });
  }, []);
  const StyledBox = styled(Box)({
    boxShadow: "0px 4px 6px rgba(0, 0, 0, 0.1)", // Adding a shadow
    padding: "20px", // Adding padding for spacing
    borderRadius: "8px", // Adding border radius for rounded corners
    backgroundColor: "#fff", // Setting background color
  });
  return (
    <Stack
      flexDirection={"column"}
      height={"100%"}
      width="100%"
      gap={3}
      justifyContent={"flex-start"}
      alignItems={"flex-start"}
      sx={{ overflowX: "hidden" }} // Set overflowX to hidden
    >
      <img src={cover} />

      <Stack direction="row" pl={2}>
        <Typography variant="h3" color="primary">
          {companyName}
        </Typography>
        <Rating value={rate} precision={0.5} readOnly sx={{ pt: 2, pl: 2 }} />
      </Stack>
      <Box pl={2}>
        <TableContainer
          style={{ width: "100%", height: "auto", overflowX: "auto" }}
        >
          <Table style={{ width: "auto" }}>
            <TableBody>
              <TableRow>
                <TableCell>Description:</TableCell>
                <TableCell>{info.description}</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>Phone Number:</TableCell>
                <TableCell>{info.phone_number}</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>Email:</TableCell>
                <TableCell>{info.email}</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>Address:</TableCell>
                <TableCell>{info.address}</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>Mail:</TableCell>
                <TableCell>{info.mail}</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>Fax:</TableCell>
                <TableCell>{info.fax}</TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </TableContainer>
      </Box>

      <Typography variant="h4" color="primary" pt={5} pl={2}>
        Types of Insurances
      </Typography>
      <Stack direction="row" spacing={2} pl={2} flexWrap={"wrap"}>
        {insurances.map((insurance, index) => (
          <Box
            key={index}
            width="200px"
            height="150px"
            display="flex"
            justifyContent="center"
            alignItems="center"
          >
            <Paper
              elevation={3}
              style={{ padding: "10px", width: "100%", height: "100%" }}
            >
              <Stack direction="column" spacing={5} alignItems="center" pt={3}>
                <Typography variant="h5" color="primary">
                  {insurance}
                </Typography>
                <Button
                  variant="outlined"
                  size="small"
                  href={insurance.pdfLink}
                  target="_blank"
                >
                  PDF
                </Button>
              </Stack>
            </Paper>
          </Box>
        ))}
      </Stack>

      <Stack
        flexDirection={"column"}
        height={"100%"}
        width="90%"
        gap={2}
        justifyContent={"center"}
        alignItems={"center"}
        pl={2}
      >
        <Typography variant="h4" color="primary" mt={10}>
          Users Reviews
        </Typography>
        {comments.length > 0 ? (
          comments.map((comment, index) => (
            <Paper
              key={index}
              elevation={3}
              style={{
                padding: "10px",
                marginTop: "10px",
                marginBottom: "20px",
                width: "1000px",
                height: "auto",
                border: "1px solid #CBB26B",
              }}
            >
              <Typography variant="h6" color={"primary"}>
                {comment}
              </Typography>
            </Paper>
          ))
        ) : (
          <Typography pb={5}>No comments available.</Typography>
        )}
      </Stack>
    </Stack>
  );
}
