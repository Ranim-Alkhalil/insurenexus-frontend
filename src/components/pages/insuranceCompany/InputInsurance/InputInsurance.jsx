import {
  Stack,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
  TextField,
  Typography,
} from "@mui/material";

export default function InputInsurance(props) {
  return (
    <Stack mt={4}>
      <Typography variant="h2" color={"#0f3554"} ml={3}>
        Input Information
      </Typography>
      <form>
        <Table sx={{ mt: 8 }}>
          <TableHead>
            <TableRow>
              <TableCell sx={{ fontSize: "2rem", color: "#0f3554" }}>
                Insurance type
              </TableCell>
              <TableCell sx={{ fontSize: "2rem", color: "#0f3554" }}>
                Programs
              </TableCell>
              <TableCell sx={{ fontSize: "2rem", color: "#0f3554" }}>
                Classes
              </TableCell>
              <TableCell sx={{ fontSize: "2rem", color: "#0f3554" }}>
                Facilities
              </TableCell>
              <TableCell sx={{ fontSize: "2rem", color: "#0f3554" }}>
                Links
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
                />
              </TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </form>
    </Stack>
  );
}
