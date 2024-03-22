import {
  Box,
  Divider,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Typography,
  TextField,
  FilledInput,
} from "@mui/material";
import { useState } from "react";
import Panel from "./Panel";
import PersonalInformation from "./PersonalInformation";
import CircleIcon from "@mui/icons-material/Circle";
export default function Insurances(props) {
  return (
    <div className="insuranceBox">
      <h1 className="header">Insurances</h1>
      <Box
        border={3}
        borderRadius={2}
        borderColor={"#CBB26B"}
        padding={3}
        width={500}
      >
        <Box className="cardLabel">Type of insurance :</Box>
        <Box className="cardContent">
          <CircleIcon sx={{ fontSize: "small", color: "#CBB26B" }} /> Health
        </Box>
        <Divider color={"#CBB26B"} />

        <Box className="cardLabel">Company Name :</Box>
        <Box className="cardContent">
          <CircleIcon sx={{ fontSize: "small", color: "#CBB26B" }} /> GIG
        </Box>

        <Divider color={"#CBB26B"} />
        <Box className="cardLabel">Source :</Box>
        <Box className="cardContent">
          <CircleIcon sx={{ fontSize: "small", color: "#CBB26B" }} /> company
        </Box>

        <Divider color={"#CBB26B"} />
        <Box className="cardLabel" sx={{ padding: 0 }}>
          Start Date :<Typography className="cardLabel">(d-m-y)</Typography>
        </Box>
        <Box className="cardContent">
          <CircleIcon sx={{ fontSize: "small", color: "#CBB26B" }} /> 3-6-2020
        </Box>

        <Divider color={"#CBB26B"} />
        <Box className="cardLabel" sx={{ padding: 0 }}>
          End Date :
          <Typography noWrap className="cardLabel">
            (d-m-y)
          </Typography>
        </Box>
        <Box className="cardContent">
          <CircleIcon sx={{ fontSize: "small", color: "#CBB26B" }} /> 3-6-2020
        </Box>
      </Box>
    </div>
  );
}
