import {
  Button,
  ButtonGroup,
  Stack,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  TextField,
  Typography,
} from "@mui/material";
import axios from "axios";
import { useEffect, useState } from "react";

export default function Facilities(props) {
  const [facilitiyTypes, setFacilityTypes] = useState([]);

  useEffect(() => {
    //get from the webservice the facilitie
    axios.get("http://localhost:3000/facilities").then(
      (res) => {
        setFacilityTypes(res.data);
      },
      (err) => {}
    );
  }, []);

  return (
    <Stack flexDirection={"column"} flexWrap={"nowrap"} gap={2} mt={2} ml={5}>
      <Typography fontSize={80} sx={{ color: "#0f3554" }}>
        Facilities
      </Typography>
      <ButtonGroup size="large" aria-label="Large button group">
        <Button
          sx={{
            color: "#17507f",
            borderColor: "#17507f",
            bgcolor: "white",
          }}
        >
          health
        </Button>
        <Button
          sx={{
            color: "#17507f",
            borderColor: "#17507f",
            bgcolor: "white",
          }}
        >
          car
        </Button>
        {/*{facilitiyTypes.map((ftype) => {
          return (
            <Button
              sx={{
                color: "#17507f",
                borderColor: "#17507f",
                bgcolor: "white",
              }}
            >
              {ftype}
            </Button>
          );
        })}*/}
      </ButtonGroup>
      {/* search or filter */}
      <TextField id="outlined-search" label="Search field" type="search" />
      <TableContainer sx={{ width: "100%" }}>
        {/*sticky not working */}
        <Table stickyHeader>
          <TableHead>
            <TableRow>
              <TableCell
                width="200"
                sx={{ fontSize: "1.4rem", color: "#0f3554" }}
              >
                category
              </TableCell>
              <TableCell
                width="200"
                sx={{ fontSize: "1.4rem", color: "#0f3554" }}
              >
                Name
              </TableCell>
              <TableCell
                width="200"
                sx={{ fontSize: "1.4rem", color: "#0f3554" }}
              >
                Governorate
              </TableCell>
              <TableCell
                width="400"
                sx={{ fontSize: "1.4rem", color: "#0f3554" }}
              >
                Location
              </TableCell>
              <TableCell
                width="200"
                sx={{ fontSize: "1.4rem", color: "#0f3554" }}
              >
                Phone Number
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            <TableRow>
              <TableCell sx={{ fontSize: "1.2rem", color: "#0f3554" }}>
                hospital
              </TableCell>
              <TableCell sx={{ fontSize: "1.2rem", color: "#0f3554" }}>
                hamza
              </TableCell>
              <TableCell sx={{ fontSize: "1.2rem", color: "#0f3554" }}>
                amman
              </TableCell>
              <TableCell sx={{ fontSize: "1.2rem", color: "#0f3554" }}>
                street
              </TableCell>
              <TableCell sx={{ fontSize: "1.2rem", color: "#0f3554" }}>
                765465
              </TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </TableContainer>
    </Stack>
  );
}
