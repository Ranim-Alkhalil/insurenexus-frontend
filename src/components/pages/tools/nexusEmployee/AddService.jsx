import {
  Autocomplete,
  Button,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import React, { useEffect, useState } from "react";
import axios from "axios";
import AddCircleIcon from "@mui/icons-material/AddCircle";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogTitle from "@mui/material/DialogTitle";
import Slide from "@mui/material/Slide";
import { getSessionId } from "../../../../api/SessionIdUtils";
import { enqueueSnackbar } from "notistack";

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

export default function AddService(props) {
  const [openParentDialog, setOpenParentDialog] = useState(false);
  const [parent, setParent] = useState(null);
  const [newParent, setNewParent] = useState(null);
  const [child, setChild] = useState(null);
  const [parents, setParents] = useState([]);
  const [children, setChildren] = useState([]);

  const [errorFields, setErrorFields] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:3000/nexusEmployee/serviceParent", {
        headers: { SESSION_ID: getSessionId() },
      })
      .then(
        (res) => {
          setParents(res.data);
          console.log("get is success");
        },
        (err) => {}
      );
  }, []);

  useEffect(() => {
    axios
      .get("http://localhost:3000/nexusEmployee/children", {
        headers: { SESSION_ID: getSessionId() },
      })
      .then(
        (res) => {
          setChildren(res.data);
          console.log("get is success");
        },
        (err) => {}
      );
  }, []);

  const addNewParent = () => {
    const errors = [];

    if (!newParent) {
      errors.push("Parent name cannot be empty");
    }

    setErrorFields(errors);

    if (errors.length === 0) {
      axios
        .post(
          "http://localhost:3000/nexusEmployee/addParent",
          {
            parent: newParent,
          },
          {
            headers: { SESSION_ID: getSessionId() },
          }
        )
        .then((response) => {
          console.log("Service added successfully:", response.data);
          setParents((prevParents) => [...prevParents, newParent]);
          setNewParent("");

          enqueueSnackbar("Service is added successfully", {
            variant: "success",
          });
        })
        .catch((error) => {
          console.error("Error adding Service:", error);
          enqueueSnackbar("Failed to Add Service", {
            variant: "error",
          });
        });
    }
  };

  const handleAdd = () => {
    const errors = [];

    if (!parent) {
      errors.push("Parent name cannot be empty");
    }

    if (!child) {
      errors.push("Child name cannot be empty");
    }

    setErrorFields(errors);
    if (errors.length === 0) {
      axios
        .post(
          "http://localhost:3000/nexusEmployee/addChild",
          {
            parent: parent,
            child: child,
          },
          {
            headers: { SESSION_ID: getSessionId() },
          }
        )
        .then((response) => {
          console.log("Service is added successfully:", response.data);
          setChild("");
          setParent("");
          enqueueSnackbar("Service is added successfully", {
            variant: "success",
          });
        })
        .catch((error) => {
          console.error("Error adding service:", error);
          enqueueSnackbar("Failed to Add Service", {
            variant: "error",
          });
        });
    }
  };

  const handleOpenParentDialog = () => {
    setOpenParentDialog(true);
  };

  const handleCloseParentDialog = () => {
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
        Add Service
      </Typography>

      <Stack flexDirection={"row"}>
        <Autocomplete
          value={parent}
          onChange={(event, newValue) => {
            setParent(newValue);
          }}
          sx={{ width: 350 }}
          options={parents}
          renderInput={(params) => (
            <TextField
              {...params}
              label="Select Target Insurance"
              variant="outlined"
              required
            />
          )}
        />
        <AddCircleIcon
          fontSize="large"
          sx={{ color: "#CBB26B", mt: 1, ml: 2 }}
          onClick={handleOpenParentDialog}
        />
      </Stack>

      <Autocomplete
        disabled={parent == null}
        value={child}
        onChange={(event, newValue) => {
          setChild(newValue);
        }}
        onInputChange={(event, newInputValue) => {
          setChild(newInputValue);
        }}
        freeSolo
        sx={{ width: 350 }}
        options={children}
        renderInput={(params) => (
          <TextField
            {...params}
            label="Select Target program"
            variant="outlined"
            required
          />
        )}
      />

      <Dialog
        open={openParentDialog}
        TransitionComponent={Transition}
        keepMounted
        onClose={handleCloseParentDialog}
        aria-describedby="alert-dialog-slide-description"
      >
        <DialogTitle>{"Add New Insurance"}</DialogTitle>
        <DialogContent>
          <TextField
            id="newParent"
            label="Enter new service"
            value={newParent}
            required
            onChange={(e) => {
              setNewParent(e.target.value);
            }}
            sx={{ width: 350, m: 2 }}
          />
        </DialogContent>
        <DialogActions>
          <Button
            onClick={() => {
              handleCloseParentDialog();
              addNewParent();
            }}
          >
            Add
          </Button>
        </DialogActions>
      </Dialog>

      <Button sx={{ width: 100 }} variant="contained" onClick={handleAdd}>
        ADD
      </Button>
    </Stack>
  );
}
