import { useState } from "react";

import { Box, Tab, Tabs } from "@mui/material";
import AddInsuComp from "./AddInsuComp";
import AddInsuranceCompUser from "./AddInsuranceCompUser";
import AddFacility from "./AddFacility";
import AddService from "./AddService";
import CompanyService from "./CompanyService";

export default function NexusEmployeeTools(props) {
  const [selectedPanel, setSelectedPanel] = useState("AddComp");
  return (
    <>
      <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
        <Tabs>
          <Tab
            label="Add Company"
            sx={{ fontSize: 20, color: "#0f3554" }}
            onClick={() => {
              setSelectedPanel("AddComp");
            }}
          />
          <Tab
            label="Add Employee"
            sx={{ fontSize: 20, color: "#0f3554" }}
            onClick={() => {
              setSelectedPanel("AddEmp");
            }}
          />
          <Tab
            label="Add Facility"
            sx={{ fontSize: 20, color: "#0f3554" }}
            onClick={() => {
              setSelectedPanel("AddFacility");
            }}
          />
          <Tab
            label="Add service"
            sx={{ fontSize: 20, color: "#0f3554" }}
            onClick={() => {
              setSelectedPanel("AddService");
            }}
          />
          <Tab
            label="Add service for a company"
            sx={{ fontSize: 20, color: "#0f3554" }}
            onClick={() => {
              setSelectedPanel("CompanyService");
            }}
          />
        </Tabs>
      </Box>

      {selectedPanel === "AddComp" && <AddInsuComp />}
      {selectedPanel === "AddEmp" && <AddInsuranceCompUser />}
      {selectedPanel === "AddFacility" && <AddFacility />}
      {selectedPanel === "AddService" && <AddService />}
      {selectedPanel === "CompanyService" && <CompanyService />}
    </>
  );
}
