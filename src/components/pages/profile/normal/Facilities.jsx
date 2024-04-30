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
  // const [facilitiyTypes, setFacilityTypes] = useState([]);

  // useEffect(() => {
  //   axios.get("http://localhost:3000/facilities").then(
  //     (res) => {
  //       setFacilityTypes(res.data);
  //     },
  //     (err) => {}
  //   );
  // }, []);

  return (
    <Stack
      flexDirection={"column"}
      height={"100%"}
      width="100%"
      gap={3}
      justifyContent={"flex-start"}
      alignItems={"flex-start"}
      p={2}
    >
      <Typography variant="h3" color={"#0f3554"}>
        Facilities
      </Typography>
      <Stack flexDirection={"row"} flexWrap={"nowrap"} gap={170}>
        <ButtonGroup
          size="large"
          aria-label="Large button group"
          sx={{ mt: 2 }}
        >
          <Button
            sx={{
              color: "#0f3554",
              borderColor: "#0f3554",
            }}
          >
            health
          </Button>
          <Button
            sx={{
              color: "#0f3554",
              borderColor: "#0f3554",
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
        <TextField
          id="outlined-search"
          label="Search field"
          type="search"
          sx={{ mt: 3 }}
        />
      </Stack>
      <TableContainer sx={{ width: "100%", mt: 5 }}>
        {/*sticky not working */}
        <Table>
          <TableHead>
            <TableRow>
              <TableCell
                width="200"
                sx={{ fontSize: "1.6rem", color: "#0f3554" }}
              >
                Category
              </TableCell>
              <TableCell
                width="200"
                sx={{ fontSize: "1.6rem", color: "#0f3554" }}
              >
                Name
              </TableCell>
              <TableCell
                width="200"
                sx={{ fontSize: "1.6rem", color: "#0f3554" }}
              >
                Governorate
              </TableCell>
              <TableCell
                width="400"
                sx={{ fontSize: "1.6rem", color: "#0f3554" }}
              >
                Location
              </TableCell>
              <TableCell
                width="200"
                sx={{ fontSize: "1.6rem", color: "#0f3554" }}
              >
                Phone Number
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            <TableRow>
              <TableCell sx={{ fontSize: "1.4rem", color: "#0f3554" }}>
                hospital
              </TableCell>
              <TableCell sx={{ fontSize: "1.4rem", color: "#0f3554" }}>
                hamza
              </TableCell>
              <TableCell sx={{ fontSize: "1.4rem", color: "#0f3554" }}>
                amman
              </TableCell>
              <TableCell sx={{ fontSize: "1.4rem", color: "#0f3554" }}>
                street
              </TableCell>
              <TableCell sx={{ fontSize: "1.4rem", color: "#0f3554" }}>
                765465
              </TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </TableContainer>
    </Stack>
  );
}
