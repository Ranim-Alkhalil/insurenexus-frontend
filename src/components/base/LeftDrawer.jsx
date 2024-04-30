import { Drawer, List, ListItem, ListItemButton } from "@mui/material";
import { GlobalStates } from "./BaseComponent";
import { useContext } from "react";
import { useNavigate } from "react-router-dom";

export default function LeftDrawer(props) {
  const navigate = useNavigate();
  const { user } = useContext(GlobalStates);
  return (
    <Drawer
      open={props.open}
      anchor="left"
      onClose={props.closeDrawer}
      PaperProps={{ sx: { width: "300px", backgroundColor: "#f3ead5" } }}
    >
      <List>
        <ListItem>
          <h1>Welcome!</h1>
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
            onClick={() => {
              switch (user.type) {
                case 1:
                  navigate("/profile/normal");
                  break;
                case 2:
                  navigate("/profile/insurance-employee");
                  break;
                case 3:
                  navigate("/profile/company-employee");
                  break;
                case 4:
                  navigate("/profile/nexus-employee");
                  break;
              }
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
            onClick={() => {
              switch (user.type) {
                case 1:
                  navigate("/tools/normal");
                  break;
                case 2:
                  navigate("/tools/insurance-employee");
                  break;
                case 3:
                  navigate("/tools/company-employee");
                  break;
                case 4:
                  navigate("/tools/nexus-employee");
                  break;
              }
            }}
          >
            Tools
          </ListItemButton>
        </ListItem>
      </List>
    </Drawer>
  );
}
