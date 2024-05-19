import React, { useEffect, useState } from "react";
import axios from "axios";
import { getSessionId } from "../../../../api/SessionIdUtils";
import AddCircleIcon from "@mui/icons-material/AddCircle";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogTitle from "@mui/material/DialogTitle";
import Slide from "@mui/material/Slide";
import {
  Box,
  Button,
  Card,
  CardContent,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import { enqueueSnackbar } from "notistack";
const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});
export default function AddInfo(props) {
  const [newParent, setNewParent] = useState(null);
  const [openParentDialog, setOpenParentDialog] = useState(false);
  const [description, setDescription] = useState("");
  const [img, setImg] = useState(null);
  const [pdf, setPdf] = useState(null);
  const [newDescription, setNewDescription] = useState("");
  const [newImg, setNewImg] = useState(null);
  const [newPdf, setNewPdf] = useState(null);
  useEffect(() => {
    axios
      .get("http://localhost:3000/insuranceEmployee/compInfo", {
        headers: { SESSION_ID: getSessionId() },
      })
      .then((res) => {
        setNewDescription(res.data.description);
        setNewImg(res.data.logo);
        setNewPdf(res.data.pdf);
      })
      .catch((err) => {
        console.error("Failed to fetch company info", err);
      });
  }, []);

  function fileToBase64(file) {
    const temporaryFileReader = new FileReader();
    return new Promise((resolve, reject) => {
      temporaryFileReader.onerror = () => {
        temporaryFileReader.abort();
        reject(new DOMException("Problem parsing input file."));
      };
      temporaryFileReader.onload = () => {
        resolve(temporaryFileReader.result);
      };
      temporaryFileReader.readAsDataURL(file);
    });
  }

  function onPdfSelect(event) {
    setPdf(event.target.files[0]);
  }

  function onImgSelect(event) {
    setImg(event.target.files[0]);
  }

  function handleAddDescription() {
    axios
      .post(
        "http://localhost:3000/insuranceEmployee/updateDescription",
        {
          description: description,
        },
        {
          headers: { SESSION_ID: getSessionId() },
        }
      )
      .then((response) => {
        console.log("Description updated successfully:", response.data);
        enqueueSnackbar("Description updated successfully", {
          variant: "success",
        });
      })
      .catch((error) => {
        console.error("Error updating description:", error);
        enqueueSnackbar("Failed to update description", { variant: "error" });
      });
  }

  function handleAddPdf() {
    fileToBase64(pdf).then((pdfResult) => {
      axios
        .post(
          "http://localhost:3000/insuranceEmployee/updatePdf",
          {
            pdf: pdfResult,
          },
          {
            headers: { SESSION_ID: getSessionId() },
          }
        )
        .then((response) => {
          console.log("PDF updated successfully:", response.data);
          enqueueSnackbar("PDF updated successfully", { variant: "success" });
        })
        .catch((error) => {
          console.error("Error updating PDF:", error);
          enqueueSnackbar("Failed to update PDF", { variant: "error" });
        });
    });
  }

  function handleAddLogo() {
    fileToBase64(img).then((imgResult) => {
      axios
        .post(
          "http://localhost:3000/insuranceEmployee/updateLogo",
          {
            logo: imgResult,
          },
          {
            headers: { SESSION_ID: getSessionId() },
          }
        )
        .then((response) => {
          console.log("Logo updated successfully:", response.data);
          enqueueSnackbar("Logo updated successfully", { variant: "success" });
        })
        .catch((error) => {
          console.error("Error updating logo:", error);
          enqueueSnackbar("Failed to update logo", { variant: "error" });
        });
    });
  }
  const handleOpenDialog = () => {
    setOpenParentDialog(true);
  };

  const handleCloseDialog = () => {
    setOpenParentDialog(false);
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
        Add Information
      </Typography>
      <Stack
        flexDirection={"row"}
        height={"100%"}
        width="100%"
        gap={2}
        justifyContent={"flex-start"}
        alignItems={"flex-start"}
        p={2}
      >
        <Card
          sx={{
            width: 300,
            minHeight: 150,
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            border: "1px solid",
            borderColor: "#CBB26B",
            mb: 2,
          }}
        >
          <CardContent>
            {newImg ? (
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  width: "100%",
                  height: "100%",
                  p: 1, // Add padding to create a margin around the image
                }}
              >
                <img
                  src={newImg}
                  alt="Company logo"
                  style={{
                    maxWidth: "100%",
                    maxHeight: "100%",
                    objectFit: "contain",
                  }}
                />
              </Box>
            ) : (
              <Typography>No Logo</Typography>
            )}
          </CardContent>
        </Card>
        <Stack
          flexDirection={"column"}
          gap={2}
          alignItems={"left"}
          pl={8}
          pt={2}
        >
          <input
            id={"image-input"}
            type="file"
            onChange={onImgSelect}
            style={{ display: "none" }}
          />
          <Typography>
            {img != null ? "Selected File : " + img.name : "Please Select logo"}
          </Typography>
          <Button
            variant="contained"
            onClick={() => {
              document.getElementById("image-input").click();
            }}
          >
            Select logo
          </Button>
          <Button
            sx={{ width: 100 }}
            variant="contained"
            onClick={handleAddLogo}
          >
            ADD
          </Button>
        </Stack>
      </Stack>
      <Stack
        flexDirection={"row"}
        height={"100%"}
        width="100%"
        gap={2}
        justifyContent={"flex-start"}
        alignItems={"flex-start"}
        p={2}
      >
        <Card
          sx={{
            width: 300,
            minHeight: 150,
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            border: "1px solid",
            borderColor: "#CBB26B",
            mb: 2,
          }}
        >
          <CardContent>
            {newPdf ? (
              <a href={newPdf} target="_blank" rel="noopener noreferrer">
                View PDF Brochure
              </a>
            ) : (
              <Typography>No Brochure</Typography>
            )}
          </CardContent>
        </Card>
        <Stack
          flexDirection={"column"}
          gap={2}
          alignItems={"left"}
          pl={8}
          pt={2}
        >
          <input
            id={"pdf-manual-input"}
            type="file"
            onChange={onPdfSelect}
            style={{ display: "none" }}
          />
          <Typography>
            {pdf != null
              ? "Selected File : " + pdf.name
              : "Please Select Brochoure File!"}
          </Typography>

          <Button
            variant="contained"
            onClick={() => {
              document.getElementById("pdf-manual-input").click();
            }}
          >
            Select Brochoure PDF
          </Button>
          <Button
            sx={{ width: 100 }}
            variant="contained"
            onClick={handleAddPdf}
          >
            ADD
          </Button>
        </Stack>
      </Stack>
      <Stack
        flexDirection={"row"}
        height={"100%"}
        width="100%"
        gap={2}
        justifyContent={"flex-start"}
        alignItems={"flex-start"}
        p={2}
      >
        <Card
          sx={{
            width: 300,
            minHeight: 150,
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            border: "1px solid",
            borderColor: "#CBB26B",
            mb: 2,
          }}
        >
          <CardContent>
            {newDescription ? (
              <Typography>{newDescription}</Typography>
            ) : (
              <Typography>No Description</Typography>
            )}
          </CardContent>
        </Card>

        <Button
          sx={{ width: 100, ml: 8, mt: 5 }}
          variant="contained"
          onClick={handleOpenDialog}
        >
          Edit Description
        </Button>
      </Stack>
      <Dialog
        sx={{
          "& .MuiDialog-paper": {
            width: "500px",
            maxWidth: "90vw",
            height: "350px",
          },
        }}
        open={openParentDialog}
        TransitionComponent={Transition}
        keepMounted
        onClose={handleCloseDialog}
        aria-describedby="alert-dialog-slide-description"
      >
        <DialogTitle>{"Edit Description"}</DialogTitle>
        <DialogContent>
          <TextField
            label="Description"
            variant="outlined"
            fullWidth
            multiline
            rows={6}
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            sx={{ mt: 1 }}
          />
        </DialogContent>
        <DialogActions>
          <Button
            onClick={() => {
              handleCloseDialog();
              handleAddDescription();
            }}
          >
            Add
          </Button>
        </DialogActions>
      </Dialog>
    </Stack>
  );
}
