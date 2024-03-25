import { AppBar, Button, IconButton, Toolbar, Typography } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";

export default function TopAppBar(props) {
  return (
    <AppBar  position="static" sx={{backgroundColor:"#0f3554"}}> 
      <Toolbar >
        <IconButton
          size="large"
          edge="start"
          color="inherit"
          aria-label="menu"
          sx={{ mr: 2 }}
          onClick={props.toggleDrawer}
        >
          <MenuIcon />
        </IconButton>
        <img height="60px" src="/logo.png"/>
        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
          InsureNexus
        </Typography>
        <Button color="inherit" sx={{marginRight:2}}>Sign In</Button>
        <Button color="inherit">Sign Up</Button>
      </Toolbar>
    </AppBar>
  );
}