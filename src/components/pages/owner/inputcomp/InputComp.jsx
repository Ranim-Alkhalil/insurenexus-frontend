import React, { useState } from "react";
import {
  Button,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
  TextField,
} from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import DeleteIcon from "@mui/icons-material/Delete";
import SendIcon from "@mui/icons-material/Send";

export default function inputComp(props) {
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
    <div>
      <form>
        <Table>
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
          <Button variant="contained" endIcon={<SendIcon />}>
            Send
          </Button>
        </div>
      </form>
    </div>
  );
}
