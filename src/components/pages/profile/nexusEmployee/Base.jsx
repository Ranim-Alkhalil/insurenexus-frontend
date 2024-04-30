import { Box, Tab, Tabs } from "@mui/material";
import { useState } from "react";
import NexusInfo from "./Nexus";

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
        </Tabs>
      </Box>

      {selectedPanel === "personalInfo" && <NexusInfo />}
    </>
  );
}
