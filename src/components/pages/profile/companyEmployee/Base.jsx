import { Box, Tab, Tabs } from "@mui/material";
import { useState } from "react";
import ManagerInfo from "./Info";
import InsurancesEmp from "./Insurances";
import EditInfo from "./EditInfo";

export default function CompanyEmployeeProfile(props) {
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
            label="Insurances"
            sx={{ fontSize: 20, color: "#0f3554" }}
            onClick={() => {
              setSelectedPanel("Insurances");
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

      {selectedPanel === "personalInfo" && <ManagerInfo />}
      {selectedPanel === "Insurances" && <InsurancesEmp />}
      {selectedPanel === "EditInfo" && <EditInfo />}
    </>
  );
}
