import { Box, Tab, Tabs } from "@mui/material";
import { useState } from "react";
import InsuEmpInfo from "./Info";
import EditInfo from "./EditInfo";
import CompanyInfo from "./CompanyInfo";

export default function InsuranceEmployeeProfile(props) {
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
            label="Company Info"
            sx={{ fontSize: 20, color: "#0f3554" }}
            onClick={() => {
              setSelectedPanel("companyInfo");
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

      {selectedPanel === "personalInfo" && <InsuEmpInfo />}
      {selectedPanel === "EditInfo" && <EditInfo />}
      {selectedPanel === "companyInfo" && <CompanyInfo />}
    </>
  );
}
