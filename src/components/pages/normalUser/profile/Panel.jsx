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
            sx={{ fontSize: 20, color: "primary" }}
            onClick={() => {
              props.setSelectedPanel("personalInfo");
            }}
          />
          <Tab
            label="Insurances"
            onClick={() => {
              props.setSelectedPanel("insurances");
            }}
          />
          <Tab
            label="Facilities"
            onClick={() => {
              props.setSelectedPanel("facilities");
            }}
          />
        </Tabs>
      </Box>
      {/* <CustomTabPanel value={value} index={0}>
        Item One
      </CustomTabPanel>
      <CustomTabPanel value={value} index={1}>
        Item Two
      </CustomTabPanel>
      <CustomTabPanel value={value} index={2}>
        Item Three
      </CustomTabPanel> */}
      {/* <Stack flexWrap={"wrap"} flexDirection={"row"} gap={10}>
        <Box>
          <List>
            <ListItem disablePadding className="profileButton">
              <ListItemButton
                sx={{ bgcolor: "white", height: 75 }}
                onClick={() => {
                  props.setSelectedPanel("personalInfo");
                }}
              >
                <Typography sx={{ color: "#0f3554", typography: "h5" }}>
                  PERSONAL INFORMATION
                </Typography>
              </ListItemButton>
            </ListItem>

            <Divider color="#e8d6ad" />

            <ListItem disablePadding className="profileButton">
              <ListItemButton
                sx={{ bgcolor: "white", height: 75 }}
                onClick={() => {
                  props.setSelectedPanel("insurances");
                }}
              >
                <Typography sx={{ color: "#0f3554", typography: "h5" }}>
                  INSURANCES
                </Typography>
              </ListItemButton>
            </ListItem>

            <Divider color="#e8d6ad" />

            <ListItem disablePadding className="profileButton">
              <ListItemButton
                sx={{ bgcolor: "white", height: 75 }}
                onClick={() => {
                  props.setSelectedPanel("facilities");
                }}
              >
                <Typography sx={{ color: "#0f3554", typography: "h5" }}>
                  FACILITIES
                </Typography>
              </ListItemButton>
            </ListItem>
          </List>
        </Box>
      </Stack> */}
    </>
  );
}
