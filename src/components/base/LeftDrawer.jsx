import { Drawer, List, ListItem, ListItemButton } from "@mui/material";

export default function LeftDrawer(props) {
  return (
    <Drawer
      open={props.open}
      anchor="left"
      onClose={props.closeDrawer}
      PaperProps={{ sx: { width: "300px", backgroundColor: "#e8d6ad" } }}
    >
      <List>
        <ListItem>
          <h1>hello</h1>
        </ListItem>
        <ListItem>
          <ListItemButton
            sx={{
              color: "#0f3554",
              fontSize: "200",
              height: 50,
              typography: "h5",
              fontWeight: "regular",
            }}
          >
            Home
          </ListItemButton>
        </ListItem>
        <ListItem>
          <ListItemButton
            sx={{
              color: "#0f3554",
              fontSize: "200",
              height: 50,
              typography: "h5",
              fontWeight: "regular",
            }}
          >
            Profile
          </ListItemButton>
        </ListItem>
        <ListItem>
          <ListItemButton
            sx={{
              color: "#0f3554",
              fontSize: "200",
              height: 50,
              typography: "h5",
              fontWeight: "regular",
            }}
          >
            Profile
          </ListItemButton>
        </ListItem>
      </List>
    </Drawer>
  );
}
