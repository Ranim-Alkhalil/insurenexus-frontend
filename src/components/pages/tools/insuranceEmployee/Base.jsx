import { useState } from "react";
import AddSubscription from "./AddSubscription";
import AddSubscribedComp from "./AddSubsribedComp";
import CreateEmployee from "./CreateEmployee";
import CreateUser from "./CreateUser";

import { Box, Tab, Tabs } from "@mui/material";

import AddInfo from "./AddInfo";

export default function InsuranceEmployeeTools(props) {
  const [selectedPanel, setSelectedPanel] = useState("Addnormaluser");
  return (
    <>
      <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
        <Tabs>
          <Tab
            label="Add client"
            sx={{ fontSize: 20, color: "#0f3554" }}
            onClick={() => {
              setSelectedPanel("Addnormaluser");
            }}
          />
          <Tab
            label="Add company"
            sx={{ fontSize: 20, color: "#0f3554" }}
            onClick={() => {
              setSelectedPanel("Addcompany");
            }}
          />
          <Tab
            label="Add company manager"
            sx={{ fontSize: 20, color: "#0f3554" }}
            onClick={() => {
              setSelectedPanel("Addcompanymanager");
            }}
          />

          <Tab
            label="Add subscription"
            sx={{ fontSize: 20, color: "#0f3554" }}
            onClick={() => {
              setSelectedPanel("Addsubscription");
            }}
          />

          <Tab
            label="Add info"
            sx={{ fontSize: 20, color: "#0f3554" }}
            onClick={() => {
              setSelectedPanel("AddInfo");
            }}
          />
        </Tabs>
      </Box>
      {selectedPanel === "AddInfo" && <AddInfo />}

      {selectedPanel === "Addcompanymanager" && <CreateEmployee />}
      {selectedPanel === "Addnormaluser" && <CreateUser />}
      {selectedPanel === "Addcompany" && <AddSubscribedComp />}
      {selectedPanel === "Addsubscription" && <AddSubscription />}
    </>
  );
}
