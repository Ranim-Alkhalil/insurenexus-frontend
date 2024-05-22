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
import LocalPhoneIcon from "@mui/icons-material/LocalPhone";
import AlternateEmailIcon from "@mui/icons-material/AlternateEmail";
import HomeIcon from "@mui/icons-material/Home";
import MailIcon from "@mui/icons-material/Mail";
import FaxIcon from "@mui/icons-material/Fax";
import DescriptionIcon from "@mui/icons-material/Description";

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
    boxShadow: "0px 4px 6px #0f3554",
    padding: "20px",
    borderRadius: "8px",
    backgroundColor: "#fff",
  });
  return (
    <Stack
      flexDirection={"column"}
      height={"100%"}
      width="100%"
      gap={3}
      justifyContent={"flex-start"}
      alignItems={"flex-start"}
      sx={{ overflowX: "hidden" }}
    >
      <img src={cover} />

      <Stack direction="row" pl={2}>
        <Typography variant="h3" color="primary">
          {companyName}
        </Typography>
        <Rating value={rate} precision={0.5} readOnly sx={{ pt: 2, pl: 2 }} />
      </Stack>
      <Stack direction="row" spacing={6} pl={2} flexWrap={"wrap"}>
        <Typography>
          <DescriptionIcon sx={{ color: "#CBB26B" }}></DescriptionIcon>
        </Typography>
        <Typography>{info.description}</Typography>
      </Stack>
      <Stack direction="row" spacing={6} pl={2} flexWrap={"wrap"}>
        <Typography>
          <LocalPhoneIcon sx={{ color: "#CBB26B" }}></LocalPhoneIcon>
        </Typography>
        <Typography>{info.phone_number}</Typography>
      </Stack>
      <Stack direction="row" spacing={6} pl={2} flexWrap={"wrap"}>
        <Typography>
          <AlternateEmailIcon sx={{ color: "#CBB26B" }}></AlternateEmailIcon>
        </Typography>
        <Typography>{info.email}</Typography>
      </Stack>
      <Stack direction="row" spacing={6} pl={2} flexWrap={"wrap"}>
        <Typography>
          <HomeIcon sx={{ color: "#CBB26B" }}></HomeIcon>
        </Typography>
        <Typography>{info.address}</Typography>
      </Stack>
      <Stack direction="row" spacing={6} pl={2} flexWrap={"wrap"}>
        <Typography>
          <MailIcon sx={{ color: "#CBB26B" }}></MailIcon>
        </Typography>
        <Typography>{info.mail}</Typography>
      </Stack>
      <Stack direction="row" spacing={6} pl={2} flexWrap={"wrap"}>
        <Typography>
          <FaxIcon sx={{ color: "#CBB26B" }}></FaxIcon>
        </Typography>
        <Typography>{info.fax}</Typography>
      </Stack>

      <Typography variant="h4" color="primary" pt={5} pl={2}>
        Types of Insurances
      </Typography>
      <Stack direction="row" spacing={8} pl={2} flexWrap={"wrap"}>
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
              sx={{
                padding: "10px",
                width: "auto",
                height: "50%",
                boxShadow: "1px 2px 4px #0f3554",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <Stack direction="column" spacing={5} alignItems="center" pt={3}>
                <Typography variant="h5" color="primary">
                  {insurance}
                </Typography>
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
                boxShadow: "2px 2px 8px #DDC285",
                // border: "1px solid #CBB26B",
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
