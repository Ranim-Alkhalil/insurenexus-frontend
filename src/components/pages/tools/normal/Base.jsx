import { useState } from "react";

import { Box, Rating, Tab, Tabs } from "@mui/material";
import Rate from "./Rating";
import EditInfo from "./EditInfo";

export default function NormalUserTools(props) {
  const [selectedPanel, setSelectedPanel] = useState("Rate");
  return (
    <>
      <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
        <Tabs>
          <Tab
            label="Rate"
            sx={{ fontSize: 20, color: "#0f3554" }}
            onClick={() => {
              setSelectedPanel("Rate");
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

      {selectedPanel === "Rate" && <Rate />}
      {selectedPanel === "EditInfo" && <EditInfo />}
    </>
  );
}
