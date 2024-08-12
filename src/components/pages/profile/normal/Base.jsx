import { useState } from "react";
import PersonalInformation from "./PersonalInformation";
import Insurances from "./Insurances";
import Facilities from "./Facilities";
import { Box, Tab, Tabs } from "@mui/material";
import EditInfo from "./EditInfo";

export default function NormalUserProfile(props) {
  const [selectedPanel, setSelectedPanel] = useState("personalInfo");
  return (
    <>
      <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
        <Tabs>
          <Tab
            label="Personal Information"
            sx={{ fontSize: 20, color: "#0f3554" }}
            onClick={() => {
              setSelectedPanel("personalInfo");
            }}
          />
          <Tab
            label="Insurances"
            sx={{ fontSize: 20, color: "#0f3554" }}
            onClick={() => {
              setSelectedPanel("insurances");
            }}
          />
          <Tab
            label="Facilities"
            sx={{ fontSize: 20, color: "#0f3554" }}
            onClick={() => {
              setSelectedPanel("facilities");
            }}
          />
          <Tab
            label="Edit Info"
            sx={{ fontSize: 20, color: "#0f3554" }}
            onClick={() => {
              setSelectedPanel("EditInfo");
            }}
          />
        </Tabs>
      </Box>

      {selectedPanel === "personalInfo" && <PersonalInformation />}
      {selectedPanel === "insurances" && <Insurances />}
      {selectedPanel === "facilities" && <Facilities />}
      {selectedPanel === "EditInfo" && <EditInfo />}
    </>
  );
}
