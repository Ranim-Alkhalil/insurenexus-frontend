import { Drawer, List, ListItem, ListItemButton } from "@mui/material";

export default function LeftDrawer(props) {
  return (
    <Drawer
      open={props.open}
      anchor="left"
      onClose={props.closeDrawer}
      PaperProps={{ sx: { width: "300px" } }}
    >
      <List>
        <ListItem>
          <ListItemButton>Click Me</ListItemButton>
        </ListItem>
      </List>
    </Drawer>
  );
}
