import { useState } from "react";
import { styled, useTheme } from "@mui/material/styles";
import Box from "@mui/material/Box";
import MuiDrawer from "@mui/material/Drawer";
import MuiAppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import List from "@mui/material/List";
import CssBaseline from "@mui/material/CssBaseline";
import Typography from "@mui/material/Typography";
import Divider from "@mui/material/Divider";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import MailIcon from "@mui/icons-material/Mail";
import DashboardIcon from "@mui/icons-material/Dashboard";
import Collapse from "@mui/material/Collapse";
import ExpandLessIcon from "@mui/icons-material/ExpandLess";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";
import ChatIcon from "@mui/icons-material/Chat";
import InventoryIcon from "@mui/icons-material/Inventory";
import StoreIcon from "@mui/icons-material/Store";
import ReceiptIcon from "@mui/icons-material/Receipt";
import ConnectWithoutContactIcon from "@mui/icons-material/ConnectWithoutContact";
import VerifiedUserIcon from "@mui/icons-material/VerifiedUser";
import { ListSubheader } from "@mui/material";

const drawerWidth = 240;

const openedMixin = (theme) => ({
  width: drawerWidth,
  transition: theme.transitions.create("width", {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.enteringScreen,
  }),
  overflowX: "hidden",
});

const closedMixin = (theme) => ({
  transition: theme.transitions.create("width", {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  overflowX: "hidden",
  width: `calc(${theme.spacing(7)} + 1px)`,
  [theme.breakpoints.up("sm")]: {
    width: `calc(${theme.spacing(8)} + 1px)`,
  },
});

const DrawerHeader = styled("div")(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  justifyContent: "flex-end",
  padding: theme.spacing(0, 1),
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
}));

const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== "open",
})(({ theme, open }) => ({
  zIndex: theme.zIndex.drawer + 1,
  transition: theme.transitions.create(["width", "margin"], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  ...(open && {
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(["width", "margin"], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  }),
}));

const Drawer = styled(MuiDrawer, {
  shouldForwardProp: (prop) => prop !== "open",
})(({ theme, open }) => ({
  width: drawerWidth,
  flexShrink: 0,
  whiteSpace: "nowrap",
  boxSizing: "border-box",
  ...(open && {
    ...openedMixin(theme),
    "& .MuiDrawer-paper": openedMixin(theme),
  }),
  ...(!open && {
    ...closedMixin(theme),
    "& .MuiDrawer-paper": closedMixin(theme),
  }),
}));

export default function MiniDrawer() {
  const theme = useTheme();
  const [open, setOpen] = useState(false);
  const [listShow, setListShow] = useState(false);

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  const handleListItem = () => {
    setListShow(!listShow);
  };

  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />
      <AppBar position="fixed" open={open}>
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            onClick={handleDrawerOpen}
            edge="start"
            sx={{
              marginRight: 5,
              ...(open && { display: "none" }),
            }}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" noWrap component="div">
            Dashboard
          </Typography>
        </Toolbar>
      </AppBar>
      <Drawer variant="permanent" open={open}>
        <DrawerHeader>
          ADMIN
          <IconButton onClick={handleDrawerClose}>
            {theme.direction === "rtl" ? (
              <ChevronRightIcon />
            ) : (
              <ChevronLeftIcon />
            )}
          </IconButton>
        </DrawerHeader>
        <Divider />
        <List>
          <ListItem disablePadding sx={{ display: "block" }}>
            <ListItemButton
              onClick={open ? handleListItem : undefined}
              sx={{
                minHeight: 48,
                justifyContent: open ? "initial" : "center",
                px: 2.5,
              }}
            >
              <ListItemIcon
                sx={{
                  minWidth: 0,
                  mr: open ? 3 : "auto",
                  justifyContent: "center",
                }}
              >
                <DashboardIcon />
              </ListItemIcon>
              <ListItemText
                primary="Dashboard"
                sx={{ opacity: open ? 1 : 0 }}
              />
              {open ? (
                listShow ? (
                  <ExpandLessIcon sx={{ opacity: 1 }} />
                ) : (
                  <ExpandMoreIcon sx={{ opacity: 1 }} />
                )
              ) : (
                ""
              )}
            </ListItemButton>
            <Collapse in={listShow} timeout="auto" unmountOnExit>
              <List component="div" disablePadding>
                <ListItemButton sx={{ pl: 4 }}>
                  <ListItemText primary="Ecommerce" />
                </ListItemButton>
                <ListItemButton sx={{ pl: 4 }}>
                  <ListItemText primary="Blockchain" />
                </ListItemButton>
                <ListItemButton sx={{ pl: 4 }}>
                  <ListItemText primary="Crypto" />
                </ListItemButton>
              </List>
            </Collapse>
          </ListItem>
        </List>
        <Divider />
        <List
          subheader={
            <ListSubheader
              sx={{ display: open ? "block" : "none" }}
              component="div"
              id="nested-list-subheader"
            >
              APPLICATIONS
            </ListSubheader>
          }
        >
          <ListItemButton>
            <ListItemIcon>
              <CalendarMonthIcon />
            </ListItemIcon>
            <ListItemText primary="Calendar" />
          </ListItemButton>
          <ListItemButton>
            <ListItemIcon>
              <ChatIcon />
            </ListItemIcon>
            <ListItemText primary="Chat" />
          </ListItemButton>
          <ListItemButton>
            <ListItemIcon>
              <InventoryIcon />
            </ListItemIcon>
            <ListItemText primary="File Manager" />
          </ListItemButton>

          <ListItemButton>
            <ListItemIcon>
              <MailIcon />
            </ListItemIcon>
            <ListItemText primary="Email" />
          </ListItemButton>
          <ListItemButton>
            <ListItemIcon>
              <ConnectWithoutContactIcon />
            </ListItemIcon>
            <ListItemText primary="Contacts" />
          </ListItemButton>
          <ListItemButton>
            <ListItemIcon>
              <StoreIcon />
            </ListItemIcon>
            <ListItemText primary="Projects" />
          </ListItemButton>
          <ListItemButton>
            <ListItemIcon>
              <ReceiptIcon />
            </ListItemIcon>
            <ListItemText primary="Invoices" />
          </ListItemButton>
        </List>
        <Divider />
        <List
          sx={{ display: open ? "block" : "none" }}
          component="div"
          subheader={
            <ListSubheader component="div" id="nested-list-subheader2">
              PAGES
            </ListSubheader>
          }
        >
          <ListItemButton>
            <ListItemIcon>
              <VerifiedUserIcon />
            </ListItemIcon>
            <ListItemText primary="Authentication" />
          </ListItemButton>
        </List>
      </Drawer>
    </Box>
  );
}
