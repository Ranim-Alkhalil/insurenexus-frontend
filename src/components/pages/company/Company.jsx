
import {
  Button,
  Divider,
  List,
  ListItem,
  ListItemText,
  Paper,
  Rating,
  Stack,
  Typography,
} from "@mui/material";
import { useEffect, useState } from "react";
import axios from "axios";
import cover from "./image/cover.jpg";
import { useParams } from "react-router-dom";
import LocalPhoneIcon from "@mui/icons-material/LocalPhone";
import AlternateEmailIcon from "@mui/icons-material/AlternateEmail";
import HomeIcon from "@mui/icons-material/Home";
import MailIcon from "@mui/icons-material/Mail";
import FaxIcon from "@mui/icons-material/Fax";
import DescriptionIcon from "@mui/icons-material/Description";
import CircleIcon from "@mui/icons-material/Circle";
import { getSessionId } from "../../../api/SessionIdUtils";
import DownloadIcon from "@mui/icons-material/Download";
import Footer from "../footer_section/Footer_pages";

export default function Company(props) {
  const [info, setInfo] = useState([]);
  const [rate, setRate] = useState(null);
  const [image, setImage] = useState(null);
  const [comments, setComments] = useState([]);
  const [insurances, setInsurances] = useState([]);
  const [hasPdf, setHasPdf] = useState(false);
  const { companyName } = useParams();
  useEffect(() => {
    axios
      .get("http://localhost:3000/user/companyInfo", {
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
  useEffect(() => {
    axios
      .get("http://localhost:3000/user/compImage", {
        params: {
          param1: companyName,
        },
      })
      .then((res) => {
        console.log("get is success", res.data);
        setImage(res.data.image);
      })
      .catch((err) => {
        console.error(err);
      });
  }, []);
  useEffect(() => {
    axios
      .get("http://localhost:3000/user/compPdf", {
        params: { param1: companyName },
      })
      .then((response) => {
        if (response.data) {
          setHasPdf(true);
        } else {
          setHasPdf(false);
        }
      })
      .catch((error) => {
        console.error("There was an error checking the PDF!", error);
      });
  }, []);
  const handleDownload = () => {
    axios
      .get("http://localhost:3000/user/compPdf", {
        params: { param1: companyName },
        responseType: "blob",
      })
      .then((response) => {
        const url = window.URL.createObjectURL(
          new Blob([response.data], { type: "application/pdf" })
        );
        const link = document.createElement("a");
        link.href = url;
        link.setAttribute("download", "document.pdf");
        document.body.appendChild(link);
        link.click();
        link.remove();
      })
      .catch((error) => {
        console.error("There was an error downloading the PDF!", error);
      });
  };
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

      <Stack
        direction="row"
        justifyContent="flex-start"
        alignItems="center"
        pl={2}
      >
        <Typography variant="h3" color="primary">
          {companyName}
        </Typography>
        <Rating
          value={rate}
          precision={0.5}
          readOnly
          sx={{ pt: 2, pl: 2, pr: 8 }}
        />

        {image && (
          <img
            src={image}
            alt="Company logo"
            style={{
              maxWidth: "300px",
              maxHeight: "400px",
              width: "auto",
              height: "auto",
              objectFit: "contain",
            }}
          />
        )}
      </Stack>

      <Divider
        sx={{ width: "100%", mt: 1, mb: 1, borderWidth: "1.5px" }}
        color={"#CBB26B"}
      />
      <Stack direction="column" spacing={3} pl={2}>
        <Stack direction="row" spacing={6} pl={2} flexWrap={"wrap"}>
          <Typography>
            <DescriptionIcon sx={{ color: "#CBB26B", fontSize: 35 }} />
          </Typography>
          <Typography sx={{ fontSize: "1.4rem", width: "1200px" }}>
            {info.description}
          </Typography>
        </Stack>
        <Stack direction="row" spacing={6} pl={2} flexWrap={"wrap"}>
          <Typography>
            <LocalPhoneIcon sx={{ color: "#CBB26B", fontSize: 35 }} />
          </Typography>
          <Typography sx={{ fontSize: "1.4rem" }}>
            {info.phone_number}
          </Typography>
        </Stack>
        <Stack direction="row" spacing={6} pl={2} flexWrap={"wrap"}>
          <Typography>
            <AlternateEmailIcon sx={{ color: "#CBB26B", fontSize: 35 }} />
          </Typography>
          <Typography sx={{ fontSize: "1.4rem" }}>{info.email}</Typography>
        </Stack>
        <Stack direction="row" spacing={6} pl={2} flexWrap={"wrap"}>
          <Typography>
            <HomeIcon sx={{ color: "#CBB26B", fontSize: 35 }} />
          </Typography>
          <Typography sx={{ fontSize: "1.4rem" }}>{info.address}</Typography>
        </Stack>
        <Stack direction="row" spacing={6} pl={2} flexWrap={"wrap"}>
          <Typography>
            <MailIcon sx={{ color: "#CBB26B", fontSize: 35 }} />
          </Typography>
          <Typography sx={{ fontSize: "1.4rem" }}>{info.mail}</Typography>
        </Stack>
        <Stack direction="row" spacing={6} pl={2} flexWrap={"wrap"}>
          <Typography>
            <FaxIcon sx={{ color: "#CBB26B", fontSize: 35 }} />
          </Typography>
          <Typography sx={{ fontSize: "1.4rem" }}>{info.fax}</Typography>
        </Stack>
      </Stack>
      {hasPdf && (
        <>
          <Typography variant="h5" color="primary" pt={10} pl={2}>
            Company brochure
          </Typography>
          <Button
            variant="contained"
            color="primary"
            startIcon={<DownloadIcon />}
            onClick={handleDownload}
            sx={{ ml: 3 }}
          >
            Download PDF
          </Button>
        </>
      )}

      <Typography variant="h4" color="primary" pt={10} pl={2}>
        Types of Insurances
      </Typography>
      <List sx={{ pl: 2 }}>
        {insurances.map((insurance, index) => (
          <ListItem key={index} disableGutters>
            <CircleIcon sx={{ fontSize: "small", color: "#CBB26B" }} />
            <ListItemText
              primary={insurance}
              primaryTypographyProps={{
                color: "primary",
                fontSize: "1.5rem",
                pl: 2,
              }}
            />
          </ListItem>
        ))}
      </List>
      <Divider
        sx={{ width: "100%", mt: 1, borderWidth: "1.5px" }}
        color={"#CBB26B"}
      />
      <Stack
        flexDirection={"column"}
        height={"100%"}
        width="90%"
        gap={2}
        justifyContent={"center"}
        alignItems={"center"}
        pl={2}
      >
        <Typography variant="h4" color="primary" mt={4}>
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
      <Footer />
    </Stack>



  );
}
