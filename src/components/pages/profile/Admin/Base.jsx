import { Box, Tab, Tabs } from "@mui/material";
import { useState } from "react";
import AdminInfo from "./Info";

export default function AdminProfile(props) {
  const [selectedPanel, setSelectedPanel] = useState("websiteInfo");
  return (
    <>
      <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
        <Tabs>
          <Tab
            label="Website Info"
            sx={{ fontSize: 20, color: "#0f3554" }}
            onClick={() => {
              setSelectedPanel("websiteInfo");
            }}
          />
        </Tabs>
      </Box>

      {selectedPanel === "websiteInfo" && <AdminInfo />}
    </>
  );
}
