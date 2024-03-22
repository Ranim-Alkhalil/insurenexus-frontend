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

export default function InputSub(props) {
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
                first name
              </TableCell>
              <TableCell sx={{ fontSize: "1.4rem", color: "#0f3554" }}>
                last name
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
              <TableCell sx={{ fontSize: "1.4rem", color: "#0f3554" }}>
                type
              </TableCell>
              <TableCell sx={{ fontSize: "1.4rem", color: "#0f3554" }}>
                insurance type
              </TableCell>
              <TableCell sx={{ fontSize: "1.4rem", color: "#0f3554" }}>
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
        <Button variant="contained" endIcon={<SendIcon />}>
          Send
        </Button>
      </form>
    </div>
  );
}
{
  /*import {
  Button,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
  TextField,
} from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import SendIcon from "@mui/icons-material/Send";
import { useState } from "react";
export default function InputSub(props) {
  const [newrow, setrow] = useState();
  function addrow() {
    return (
      <TableRow>
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
          <TextField />
        </TableCell>
        <TableCell>
          <TextField />
        </TableCell>
        <TableCell>
          <Button>
            <AddIcon />
          </Button>
        </TableCell>
      </TableRow>
    );
  }
  return (
    <div>
      <form>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell sx={{ fontSize: "1.4rem", color: "#0f3554" }}>
                first name
              </TableCell>
              <TableCell sx={{ fontSize: "1.4rem", color: "#0f3554" }}>
                last name
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
              <TableCell sx={{ fontSize: "1.4rem", color: "#0f3554" }}>
                insurance type
              </TableCell>
              <TableCell sx={{ fontSize: "1.4rem", color: "#0f3554" }}>
                program
              </TableCell>
              <TableCell width={10} />
            </TableRow>
          </TableHead>
          <TableBody>
            <TableRow>
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
                <TextField />
              </TableCell>
              <TableCell>
                <TextField />
              </TableCell>
              <TableCell>
                <Button>
                  <AddIcon />
                </Button>
              </TableCell>
            </TableRow>
          </TableBody>
        </Table>
        <Button variant="contained" endIcon={<SendIcon />}>
          Send
        </Button>
      </form>
    </div>
  );
}*/
}
