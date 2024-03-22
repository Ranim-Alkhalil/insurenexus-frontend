import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
  TextField,
} from "@mui/material";

export default function InputInsurance(props) {
  return (
    <div>
      <form>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell sx={{ fontSize: "1.4rem", color: "#0f3554" }}>
                insurance type
              </TableCell>
              <TableCell sx={{ fontSize: "1.4rem", color: "#0f3554" }}>
                programs
              </TableCell>
              <TableCell sx={{ fontSize: "1.4rem", color: "#0f3554" }}>
                classes
              </TableCell>
              <TableCell sx={{ fontSize: "1.4rem", color: "#0f3554" }}>
                facilities
              </TableCell>
              <TableCell sx={{ fontSize: "1.4rem", color: "#0f3554" }}>
                links
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            <TableRow>
              <TableCell>
                <TextField
                  style={{ textAlign: "left" }}
                  floatingLabelText="MultiLine and FloatingLabel"
                  multiline
                  sx={{
                    width: 300,
                  }}
                  InputProps={{ sx: { height: 80 } }}
                />
              </TableCell>
              <TableCell>
                <TextField
                  style={{ textAlign: "left" }}
                  floatingLabelText="MultiLine and FloatingLabel"
                  multiline
                  sx={{
                    width: 300,
                  }}
                  InputProps={{ sx: { height: 80 } }}
                />
              </TableCell>
              <TableCell>
                <TextField
                  style={{ textAlign: "left" }}
                  floatingLabelText="MultiLine and FloatingLabel"
                  multiline
                  sx={{
                    width: 300,
                  }}
                  InputProps={{ sx: { height: 80 } }}
                />
              </TableCell>
              <TableCell>
                <TextField
                  style={{ textAlign: "left" }}
                  floatingLabelText="MultiLine and FloatingLabel"
                  multiline
                  sx={{
                    width: 300,
                  }}
                  InputProps={{ sx: { height: 80 } }}
                />
              </TableCell>
              <TableCell>
                <TextField
                  style={{ textAlign: "left" }}
                  floatingLabelText="MultiLine and FloatingLabel"
                  multiline
                  sx={{
                    width: 300,
                  }}
                  InputProps={{ sx: { height: 80 } }}
                />
              </TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </form>
    </div>
  );
}
