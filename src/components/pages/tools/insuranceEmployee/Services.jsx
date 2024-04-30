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
export default function AddServices(props) {
  const [parent, setParent] = useState(null);
  const [newService, setNewService] = useState(null);
  const [child, setChild] = useState(null);
  const [options, setOptions] = useState([]);
  const [option, setOption] = useState([]);
  const [children, setChildren] = useState([]);
  useEffect(() => {
    axios
      .get("http://localhost:3000/insuranceEmployee/companyParent", {
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
  useEffect(() => {
    axios
      .get("http://localhost:3000/insuranceEmployee/Parent", {
        headers: { SESSION_ID: getSessionId() },
      })
      .then(
        (res) => {
          setOption(res.data);
          console.log("get is success");
        },
        (err) => {}
      );
  }, []);
  useEffect(() => {
    axios
      .get("http://localhost:3000/insuranceEmployee/child", {
        headers: { SESSION_ID: getSessionId() },
        params: {
          param1: parent,
        },
      })
      .then(
        (res) => {
          setChildren(res.data);
          console.log("get is success");
        },
        (err) => {}
      );
  }, [parent]);
  const [open, setOpen] = React.useState(false);

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

      <Autocomplete
        disabled={parent == null}
        value={child}
        onChange={(event, newValue) => {
          setChild(newValue);
        }}
        sx={{ width: 350 }}
        options={children}
        renderInput={(params) => (
          <TextField
            {...params}
            label="Select Target "
            variant="outlined"
            required
          />
        )}
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
          <Autocomplete
            value={newService}
            onChange={(event, newValue) => {
              setNewService(newValue);
            }}
            sx={{ width: 350, p: 2 }}
            options={option}
            renderInput={(params) => (
              <TextField
                {...params}
                label="Select Target "
                variant="outlined"
                required
              />
            )}
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Add</Button>
        </DialogActions>
      </Dialog>
      <Button sx={{ width: 100 }} variant="contained" onClick={handleAdd}>
        ADD
      </Button>
    </Stack>
  );
}
