import {
  Box,
  Divider,
  List,
  ListItem,
  ListItemButton,
  Stack,
  Tab,
  Tabs,
  Typography,
} from "@mui/material";

export default function Panel(props) {
  return (
    <>
      <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
        <Tabs>
          <Tab
            label="Personal Information"
            sx={{ fontSize: 20, color: "#0f3554" }}
            onClick={() => {
              props.setSelectedPanel("personalInfo");
            }}
          />
          <Tab
            label="Insurances"
            sx={{ fontSize: 20, color: "#0f3554" }}
            onClick={() => {
              props.setSelectedPanel("insurances");
            }}
          />
          <Tab
            label="Facilities"
            sx={{ fontSize: 20, color: "#0f3554" }}
            onClick={() => {
              props.setSelectedPanel("facilities");
            }}
          />
        </Tabs>
      </Box>
    </>
  );
}
