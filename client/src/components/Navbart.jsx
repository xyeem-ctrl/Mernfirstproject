import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";
import Divider from "@mui/material/Divider";
import Drawer from "@mui/material/Drawer";
import IconButton from "@mui/material/IconButton";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import MenuIcon from "@mui/icons-material/Menu";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import { Link } from "react-router-dom";

const drawerWidth = 240;
const navItems = ["about", "contactUs"];

function DrawerAppBar(props) {
  const { window } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen((prevState) => !prevState);
  };

  const drawer = (
    <Box onClick={handleDrawerToggle} sx={{ textAlign: "center" }}>
      <Typography variant="h6" sx={{ my: 2 }}>
        <Link style={{ textDecoration: "none", color: "#fff" }} to="/">
          MUI
        </Link>
      </Typography>
      <Divider />
      <List>
        {navItems.map((item) => (
          <ListItem key={item} disablePadding>
            <ListItemButton sx={{ textAlign: "center" }}>
              <ListItemText sx={{ textTransform: "capitalize" }}>
                <Link
                  style={{ textDecoration: "none", color: "#fff" }} to={`/${item}`}>
                  {item}
                </Link>
              </ListItemText>
            </ListItemButton>
          </ListItem>
        ))}
        <Link style={{ textDecoration: "none", color: "#fff" }} to="signup">
          <ListItem disablePadding>
            <ListItemButton sx={{ textAlign: "center" }}>
              <ListItemText primary="SignUp" />
            </ListItemButton>
          </ListItem>
        </Link>
        <Link style={{ textDecoration: "none", color: "#fff" }} to="signin">
          <ListItem disablePadding>
            <ListItemButton sx={{ textAlign: "center" }}>
              <ListItemText primary="Sign In" />
            </ListItemButton>
          </ListItem>
        </Link>
      </List>
    </Box>
  );

  const container =
    window !== undefined ? () => window().document.body : undefined;

  return (
    <>
    <Box>
      <CssBaseline/>
      <AppBar component="nav" sx={{ backgroundColor: "transparent"}} position="sticky">
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 2, color:'#063970', display: { sm: "none" } }}
          >
            <MenuIcon />
          </IconButton>

          <Typography
            variant="h4"
            component="div"
            sx={{ flexGrow: 1, display:{sm:"block"} }}
          >
            <Link style={{ textDecoration: "none", color: "#063970"}} to="/">
            {/* #063970 */}
              MUI
            </Link>
          </Typography>

          <Box sx={{ display: { xs: "none", sm: "block" } }} marginRight="15px">
            {navItems.map((item) => (
              // Mapping mn button ko Link mn wrapp nh kr skty keyProp error ajata ha jbky baki tags ko Link tag mn wrap kr skty hn durring map function , jeisy drawer mn kiya ha
              <Button
                key={item}
                sx={{
                  color: "#063970",
                  mr: "10px",
                  fontSize: "20px",
                  textTransform: "capitalize",
                }}
                component={Link} to={`/${item}`}
              >
              
                  {item}
                
              </Button>
            ))}
            {/* if the Button tag is wrapped in Link tag then on clicking anywhere on the button work But if only text is wrapped in Link tag only Clicking on the text will work */}
            <Link style={{ textDecoration: "none", color: "#ffffff" }} to="signup">
              <Button
                variant="contained"
                sx={{
                  width: "100px",
                  m: "0 15px 0 20px",
                  textTransform: "none",
                  fontSize: 16,
                }}
              >
                SignUp
              </Button>
            </Link>
            {/* See the difference of Link tag wrapping */}
            <Button
              variant="contained"
              sx={{ width: "100px", textTransform: "none", fontSize: 16 }}
              component={Link} to="signin"
            >
                Sign In
            </Button>

            {/* <Button  variant='contained' sx={{width:'100px' ,textTransform:'none', fontSize:16 }}>Login</Button> */}
          </Box>
        </Toolbar>
      </AppBar>
      <nav>
        <Drawer
          container={container}
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
          sx={{
            display: { xs: "block", sm: "none" },
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: drawerWidth,
              opacity: "0.8",
              backgroundColor: "#063970",
              color: "black",
            },
          }}
        >
          {drawer}
        </Drawer>
      </nav>
      </Box>
      </>
  );
}

export default DrawerAppBar;
