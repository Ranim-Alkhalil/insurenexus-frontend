import { useState } from "react";

import { Box, Tab, Tabs } from "@mui/material";

import CreateEmp from "./AddEmployee";

export default function CompanyEmployeeTools(props) {
  const [selectedPanel, setSelectedPanel] = useState("AddEmp");
  return (
    <>
      <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
        <Tabs>
          <Tab
            label="Add Employee"
            sx={{ fontSize: 20, color: "#0f3554" }}
            onClick={() => {
              setSelectedPanel("AddEmp");
            }}
          />
        </Tabs>
      </Box>

      {selectedPanel === "AddEmp" && <CreateEmp />}
    </>
  );
}
