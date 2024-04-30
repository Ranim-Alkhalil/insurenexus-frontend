import {
  Autocomplete,
  Button,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import React, { useEffect, useState } from "react";
import InputText from "../../createUser/InputText";
import axios from "axios";
import AddCircleIcon from "@mui/icons-material/AddCircle";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import Slide from "@mui/material/Slide";
import { getSessionId } from "../../../../api/SessionIdUtils";
const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});
export default function AddService(props) {
  const [open, setOpen] = useState(false);
  const [parent, setParent] = useState(null);
  const [newParent, setNewParent] = useState(null);
  const [child, setChild] = useState(null);
  const [options, setOptions] = useState([]);
  const [errorFields, setErrorFields] = useState([]);
  useEffect(() => {
    axios
      .get("http://localhost:3000/nexusEmployee/serviceParent", {
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

  const handleAdd = () => {
    const errors = [];
    setErrorFields(errors);
    if (errors.length === 0) {
      axios
        .post(
          "http://localhost:3000/nexusEmployee/addFacility",
          {
            parent: parent,
            child: child,
          },
          {
            headers: { SESSION_ID: getSessionId() },
          }
        )
        .then((response) => {
          console.log("User added successfully:", response.data);

          setParent("");
          setChild("");
          enqueueSnackbar("Facility is added ", {
            variant: "success",
          });
        })
        .catch((error) => {
          console.error("Error adding user:", error);
          enqueueSnackbar("Failed to Add Facility", {
            variant: "error",
          });
        });
    }
  };
  const HandleAdd = () => {
    const errors = [];

    setErrorFields(errors);

    if (errors.length === 0) {
      axios
        .post(
          "http://localhost:3000/nexusEmployee/addFacility",
          {
            parent: parent,
          },
          {
            headers: { SESSION_ID: getSessionId() },
          }
        )
        .then((response) => {
          console.log("User added successfully:", response.data);

          setParent("");

          enqueueSnackbar("Facility is added ", {
            variant: "success",
          });
        })
        .catch((error) => {
          console.error("Error adding user:", error);
          enqueueSnackbar("Failed to Add Facility", {
            variant: "error",
          });
        });
    }
  };
  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
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
        Add Service
      </Typography>
      <Stack flexDirection={"row"}>
        <Autocomplete
          value={parent}
          onChange={(event, newValue) => {
            setParent(newValue);
          }}
          sx={{ width: 350 }}
          options={options}
          renderInput={(params) => (
            <TextField
              {...params}
              label="Select Target Insurance Compay"
              variant="outlined"
              required
            />
          )}
        />
        <AddCircleIcon
          fontSize="large"
          sx={{ color: "#CBB26B", mt: 1, ml: 2 }}
          onClick={handleClickOpen}
        />
      </Stack>
      <TextField
        id="child"
        label="write new service class"
        disabled={parent == null}
        value={child}
        required
        onChange={(e) => {
          setChild(e.target.value);
        }}
        sx={{ width: 350 }}
      />

      <Dialog
        open={open}
        TransitionComponent={Transition}
        keepMounted
        onClose={handleClose}
        aria-describedby="alert-dialog-slide-description"
      >
        <DialogTitle>{"Add New Service"}</DialogTitle>
        <DialogContent>
          <TextField
            id="newParent"
            label="write new service"
            value={newParent}
            required
            onChange={(e) => {
              setNewParent(e.target.value);
            }}
            sx={{ width: 350, m: 2 }}
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={[handleClose, HandleAdd]}>Add</Button>
        </DialogActions>
      </Dialog>
      <Button sx={{ width: 100 }} variant="contained" onClick={handleAdd}>
        ADD
      </Button>
    </Stack>
  );
}
