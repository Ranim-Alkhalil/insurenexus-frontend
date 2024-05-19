import { useState } from "react";

import { Box, Rating, Tab, Tabs } from "@mui/material";

import AddInsuNexus from "./AddEmployee";

export default function AdminTools(props) {
  const [selectedPanel, setSelectedPanel] = useState("add");
  return (
    <>
      <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
        <Tabs>
          <Tab
            label="Add Employee"
            sx={{ fontSize: 20, color: "#0f3554" }}
            onClick={() => {
              setSelectedPanel("add");
            }}
          />
        </Tabs>
      </Box>

      {selectedPanel === "add" && <AddInsuNexus />}
    </>
  );
}
