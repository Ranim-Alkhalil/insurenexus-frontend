import { Box, Tab, Tabs } from "@mui/material";
import { useState } from "react";
import NexusInfo from "./Nexus";
import EditInfo from "./EditInfo";

export default function NexusEmployeeProfile(props) {
  const [selectedPanel, setSelectedPanel] = useState("personalInfo");
  return (
    <>
      <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
        <Tabs>
          <Tab
            label="Personal Info"
            sx={{ fontSize: 20, color: "#0f3554" }}
            onClick={() => {
              setSelectedPanel("personalInfo");
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

      {selectedPanel === "personalInfo" && <NexusInfo />}
      {selectedPanel === "EditInfo" && <EditInfo />}
    </>
  );
}
