import { useState } from "react";

import { Box, Rating, Tab, Tabs } from "@mui/material";
import Rate from "./Rating";

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
        </Tabs>
      </Box>

      {selectedPanel === "Rate" && <Rate />}
    </>
  );
}
