import {
  Autocomplete,
  Button,
  IconButton,
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
  const [openProgramDialog, setOpenProgramDialog] = useState(false);
  const [openChildDialog, setOpenChildDialog] = useState(false);
  const [parent, setParent] = useState(null);
  const [newParent, setNewParent] = useState(null);
  const [program, setProgram] = useState(null);
  const [newProgram, setNewProgram] = useState(null);
  const [child, setChild] = useState(null);
  const [newChild, setNewChild] = useState(null);
  const [parents, setParents] = useState([]);
  const [programs, setPrograms] = useState([]);
  const [classes, setClasses] = useState([]);
  const [errorFields, setErrorFields] = useState([]);
  // get parent
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
  //get program
  useEffect(() => {
    axios
      .get("http://localhost:3000/nexusEmployee/programs", {
        headers: { SESSION_ID: getSessionId() },
        params: { param1: parent },
      })
      .then(
        (res) => {
          setPrograms(res.data);
          console.log("get is success");
        },
        (err) => {}
      );
  }, [parent, programs]);
  //get class
  useEffect(() => {
    axios
      .get("http://localhost:3000/nexusEmployee/classes", {
        headers: { SESSION_ID: getSessionId() },
      })
      .then(
        (res) => {
          setClasses(res.data);
          console.log("get is success");
        },
        (err) => {}
      );
  }, [classes]);

  //add new parent
  const addNewParent = () => {
    const errors = [];

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
  //add new programand connect to parent
  const addNewProgram = () => {
    const errors = [];
    setErrorFields(errors);
    if (errors.length === 0) {
      axios
        .post(
          "http://localhost:3000/nexusEmployee/addChild",
          {
            parent: parent,
            child: newProgram,
          },
          {
            headers: { SESSION_ID: getSessionId() },
          }
        )
        .then((response) => {
          console.log("Program added successfully:", response.data);

          setNewProgram("");

          enqueueSnackbar("Program is added successfully", {
            variant: "success",
          });
        })
        .catch((error) => {
          console.error("Error adding Program:", error);
          enqueueSnackbar("Failed to Add Program", {
            variant: "error",
          });
        });
    }
  };
  const addNewChild = () => {
    const errors = [];
    setErrorFields(errors);
    if (errors.length === 0) {
      axios
        .post(
          "http://localhost:3000/nexusEmployee/addParent",
          {
            parent: newChild,
          },
          {
            headers: { SESSION_ID: getSessionId() },
          }
        )
        .then((response) => {
          console.log("Child added successfully:", response.data);

          setNewChild("");

          enqueueSnackbar("Child is added successfully", {
            variant: "success",
          });
        })
        .catch((error) => {
          console.error("Error adding Child:", error);
          enqueueSnackbar("Failed to Add Child", {
            variant: "error",
          });
        });
    }
  };
  const handleAdd = () => {
    const errors = [];
    setErrorFields(errors);
    if (errors.length === 0) {
      axios
        .post(
          "http://localhost:3000/nexusEmployee/addClass",
          {
            parent: program,
            child: child,
          },
          {
            headers: { SESSION_ID: getSessionId() },
          }
        )
        .then((response) => {
          console.log("User added successfully:", response.data);

          setNewProgram("");

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

  const handleOpenParentDialog = () => {
    setOpenParentDialog(true);
  };

  const handleCloseParentDialog = () => {
    setOpenParentDialog(false);
  };

  const handleOpenProgramDialog = () => {
    setOpenProgramDialog(true);
  };

  const handleCloseProgramDialog = () => {
    setOpenProgramDialog(false);
  };

  const handleOpenChildDialog = () => {
    setOpenChildDialog(true);
  };

  const handleCloseChildDialog = () => {
    setOpenChildDialog(false);
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
      {/* /////////////////////////////////////// */}
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
      {/* ////////////////////////////////////////////////// */}
      <Stack flexDirection={"row"}>
        <Autocomplete
          disabled={parent == null}
          value={program}
          onChange={(event, newValue) => {
            setProgram(newValue);
          }}
          sx={{ width: 350 }}
          options={programs}
          renderInput={(params) => (
            <TextField
              {...params}
              label="Select Target program"
              variant="outlined"
              required
            />
          )}
        />
        <IconButton disabled={parent == null} onClick={handleOpenProgramDialog}>
          <AddCircleIcon fontSize="large" sx={{ color: "#CBB26B" }} />
        </IconButton>
      </Stack>
      {/* //////////////////////////////////////////////////////// */}
      <Stack flexDirection={"row"}>
        <Autocomplete
          disabled={program == null}
          value={child}
          onChange={(event, newValue) => {
            setChild(newValue);
          }}
          sx={{ width: 350 }}
          options={classes}
          renderInput={(params) => (
            <TextField
              {...params}
              label="Select Target Class"
              variant="outlined"
              required
            />
          )}
        />
        <AddCircleIcon
          fontSize="large"
          sx={{ color: "#CBB26B", mt: 1, ml: 2 }}
          onClick={handleOpenChildDialog}
        />
      </Stack>

      {/* ///////////////////////////// */}
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
      {/* //////////////////////////////////////////////// */}

      <Dialog
        open={openProgramDialog}
        TransitionComponent={Transition}
        keepMounted
        onClose={handleCloseProgramDialog}
        aria-describedby="alert-dialog-slide-description"
      >
        <DialogTitle>{"Add New Program"}</DialogTitle>
        <DialogContent>
          <TextField
            id="newProgram"
            label="write new program"
            value={newProgram}
            required
            onChange={(e) => {
              setNewProgram(e.target.value);
            }}
            sx={{ width: 350, m: 2 }}
          />
        </DialogContent>
        <DialogActions>
          <Button
            onClick={() => {
              handleCloseProgramDialog();
              addNewProgram();
            }}
          >
            Add
          </Button>
        </DialogActions>
      </Dialog>
      {/* /////////////////////////////////////////////////// */}

      <Dialog
        open={openChildDialog}
        TransitionComponent={Transition}
        keepMounted
        onClose={handleCloseChildDialog}
        aria-describedby="alert-dialog-slide-description"
      >
        <DialogTitle>{"Add New Class"}</DialogTitle>
        <DialogContent>
          <TextField
            id="newClass"
            label="write new class"
            value={newChild}
            required
            onChange={(e) => {
              setNewChild(e.target.value);
            }}
            sx={{ width: 350, m: 2 }}
          />
        </DialogContent>
        <DialogActions>
          <Button
            onClick={() => {
              handleCloseChildDialog();
              addNewChild();
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
