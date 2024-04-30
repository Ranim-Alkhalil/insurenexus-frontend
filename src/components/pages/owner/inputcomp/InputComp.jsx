import React, { useState } from "react";
import {
  Button,
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

export default function InputComp(props) {
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
        Input company
      </Typography>
      <form>
        <Table sx={{ mt: 5 }}>
          <TableHead>
            <TableRow>
              <TableCell sx={{ fontSize: "1.4rem", color: "#0f3554" }}>
                company name
              </TableCell>
              <TableCell sx={{ fontSize: "1.4rem", color: "#0f3554" }}>
                email
              </TableCell>
              <TableCell sx={{ fontSize: "1.4rem", color: "#0f3554" }}>
                phone number
              </TableCell>
              <TableCell sx={{ fontSize: "1.4rem", color: "#0f3554" }}>
                national ID
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
        <div style={{ justifyContent: "right", marginTop: "10" }}>
          <Button variant="contained" endIcon={<SendIcon />} sx={{ mt: 5 }}>
            Send
          </Button>
        </div>
      </form>
    </Stack>
  );
}
