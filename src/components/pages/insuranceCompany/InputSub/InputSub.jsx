import React, { useState } from "react";
import {
  Button,
  FormControl,
  FormHelperText,
  InputLabel,
  MenuItem,
  Select,
  Stack,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
  TextField,
  Typography,
} from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import DeleteIcon from "@mui/icons-material/Delete";
import SendIcon from "@mui/icons-material/Send";

export default function InputSub(props) {
  const [age, setAge] = React.useState("");

  const handleChange = (event) => {
    setAge(event.target.value);
  };
  const [rows, setRows] = useState([{}]);

  const addRow = () => {
    setRows([...rows, {}]);
  };

  const deleteRow = (index) => {
    const updatedRows = [...rows];
    updatedRows.splice(index, 1);
    setRows(updatedRows);
  };

  return (
    <Stack mt={5}>
      <Typography variant="h2" color={"#0f3554"} ml={3}>
        Input User
      </Typography>
      <form>
        <Table sx={{ mt: 5 }}>
          <TableHead>
            <TableRow>
              <TableCell sx={{ fontSize: "1.7rem", color: "#0f3554" }}>
                first name
              </TableCell>
              <TableCell sx={{ fontSize: "1.7rem", color: "#0f3554" }}>
                last name
              </TableCell>
              <TableCell sx={{ fontSize: "1.7rem", color: "#0f3554" }}>
                email
              </TableCell>
              <TableCell sx={{ fontSize: "1.7rem", color: "#0f3554" }}>
                phone number
              </TableCell>
              <TableCell sx={{ fontSize: "1.7rem", color: "#0f3554" }}>
                national ID
              </TableCell>
              <TableCell sx={{ fontSize: "1.7rem", color: "#0f3554" }}>
                type
              </TableCell>
              <TableCell sx={{ fontSize: "1.7rem", color: "#0f3554" }}>
                insurance type
              </TableCell>
              <TableCell sx={{ fontSize: "1.7rem", color: "#0f3554" }}>
                program
              </TableCell>
              <TableCell width={10} />
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.map((row, index) => (
              <TableRow key={index}>
                <TableCell>
                  <TextField />
                </TableCell>
                <TableCell>
                  <TextField />
                </TableCell>
                <TableCell>
                  <TextField />
                </TableCell>
                <TableCell>
                  <TextField />
                </TableCell>
                <TableCell>
                  <TextField />
                </TableCell>

                <TableCell>
                  <FormControl required sx={{ m: 1, minWidth: 120 }}>
                    <Select
                      id="demo-simple-select-required"
                      value={age}
                      onChange={handleChange}
                    >
                      <MenuItem value="">
                        <em>None</em>
                      </MenuItem>
                      <MenuItem value={10}>normal</MenuItem>
                      <MenuItem value={20}>company</MenuItem>
                    </Select>
                    <FormHelperText>Required</FormHelperText>
                  </FormControl>
                </TableCell>
                <TableCell>
                  <FormControl required sx={{ m: 1, minWidth: 120 }}>
                    <Select>
                      <MenuItem>
                        <em>None</em>
                      </MenuItem>
                      <MenuItem>health</MenuItem>
                      <MenuItem>car</MenuItem>
                    </Select>
                    <FormHelperText>Required</FormHelperText>
                  </FormControl>
                </TableCell>
                <TableCell>
                  <FormControl required sx={{ m: 1, minWidth: 120 }}>
                    <Select>
                      <MenuItem>
                        <em>None</em>
                      </MenuItem>
                      <MenuItem>Ten</MenuItem>
                      <MenuItem>Twenty</MenuItem>
                      <MenuItem>Thirty</MenuItem>
                    </Select>
                    <FormHelperText>Required</FormHelperText>
                  </FormControl>
                </TableCell>
                <TableCell>
                  {index === rows.length - 1 ? (
                    <Button onClick={addRow}>
                      <AddIcon />
                    </Button>
                  ) : (
                    <Button onClick={() => deleteRow(index)}>
                      <DeleteIcon />
                    </Button>
                  )}
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
        <Button variant="contained" endIcon={<SendIcon />} sx={{ mt: 5 }}>
          Send
        </Button>
      </form>
    </Stack>
  );
}
