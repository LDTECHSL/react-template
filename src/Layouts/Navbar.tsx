import * as React from "react";
import { styled, Theme, CSSObject } from "@mui/material/styles";
import Box from "@mui/material/Box";
import MuiDrawer from "@mui/material/Drawer";
import MuiAppBar, { AppBarProps as MuiAppBarProps } from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import List from "@mui/material/List";
import CssBaseline from "@mui/material/CssBaseline";
import Divider from "@mui/material/Divider";
import IconButton from "@mui/material/IconButton";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import Collapse from "@mui/material/Collapse";
import ExpandLess from "@mui/icons-material/ExpandLess";
import ExpandMore from "@mui/icons-material/ExpandMore";
import { ReactElement } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import "../Common/css/styles.css";
import {
  FeedbackOutlinedIcon,
  InfoOutlinedIcon,
  MenuIcon,
  PhoneOutlinedIcon,
  SpeedOutlinedIcon,
  WidgetsOutlinedIcon,
} from "../Assets/Icons/Icons";
import Footer from "../Components/Footer";
import text from "../Assets/Text/Text.json";
import logo from "../Assets/Images/logo.png";
import logoutIcon from "../Assets/Images/power.png";
import Dialogbox from "../Components/Dialogbox";
import Search from "src/Components/Search";

const drawerWidth = 260;

const openedMixin = (theme: Theme): CSSObject => ({
  width: drawerWidth,
  transition: theme.transitions.create("width", {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.enteringScreen,
  }),
  overflowX: "hidden",
});

const closedMixin = (theme: Theme): CSSObject => ({
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
  ...theme.mixins.toolbar,
}));

interface AppBarProps extends MuiAppBarProps {
  open?: boolean;
}

const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== "open",
})<AppBarProps>(({ theme, open }) => ({
  zIndex: theme.zIndex.drawer + 1,
  transition: theme.transitions.create(["width", "margin"], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  boxShadow: "0px 1px 2px rgba(0, 0, 0, 0.1)",
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
})(({ theme }) => ({
  width: drawerWidth,
  flexShrink: 0,
  whiteSpace: "nowrap",
  boxSizing: "border-box",
  variants: [
    {
      props: ({ open }) => open,
      style: {
        ...openedMixin(theme),
        "& .MuiDrawer-paper": openedMixin(theme),
      },
    },
    {
      props: ({ open }) => !open,
      style: {
        ...closedMixin(theme),
        "& .MuiDrawer-paper": closedMixin(theme),
      },
    },
  ],
}));

interface Props {
  children: ReactElement;
}

export default function Navbar({ children }: Readonly<Props>) {
  const [open, setOpen] = React.useState(true);
  const [open2, setOpen2] = React.useState(false);
  const [active, setActive] = React.useState(0);
  const [active2, setActive2] = React.useState(0);
  const [activeChild, setActiveChild] = React.useState<number | null>(null);
  const [isOpen, setIsOpen] = React.useState(false);

  const handleOpen = () => {
    setIsOpen(true);
  };

  const handleClose = () => {
    setIsOpen(false);
  };

  const handleLogout = () => {
    navigate("/");
  };

  const navigate = useNavigate();
  const location = useLocation();

  React.useEffect(() => {
    const path = location.pathname;
    if (path === "/dashboard") {
      setActive(1);
      setActive2(0);
      setOpen2(false);
      setActiveChild(null);
    } else if (path === "/projects/stat") {
      setActive(2);
      setActive2(0);
      setOpen2(true);
      setActiveChild(1);
    } else if (path === "/projects/details") {
      setActive(2);
      setActive2(0);
      setOpen2(true);
      setActiveChild(2);
    }else if (path === "/about") {
      setActive2(1);
      setActive(0);
      setOpen2(false);
      setActiveChild(null);
    }else if (path === "/contact") {
      setActive2(2);
      setActive(0);
      setOpen2(false);
      setActiveChild(null);
    }else if (path === "/feedback") {
      setActive2(3);
      setActive(0);
      setOpen2(false);
      setActiveChild(null);
    } else {
      setActive(0);
      setActive2(0);
      setOpen2(false);
      setActiveChild(null);
    }
  }, [location.pathname]);

  const handleDrawerOpen = () => {
    setOpen(!open);
  };

  const handleClickDashboard = () => {
    navigate("/dashboard");
    setOpen2(false);
    setActive(1);
    setActive2(0);
    setActiveChild(null);
  };

  const handleClickProjects = () => {
    setOpen2(!open2);
    if (!open2) {
      setActive(2);
      setActive2(0);
    } else {
      setActive(0);
      setActive2(0);
    }
  };

  const handleClickStats = () => {
    navigate("/projects/stat");
    setActiveChild(1);
    setActive(2);
    setActive2(0);
    setOpen2(true);
  };

  const handleClickDetails = () => {
    navigate("/projects/details");
    setActiveChild(2);
    setActive(2);
    setActive2(0);
    setOpen2(true);
  };

  const handleClickAbout = () => {
    navigate("/about");
    setActiveChild(null);
    setActive2(1);
    setActive(0);
    setOpen2(false);
  };

  const handleClickContact = () => {
    navigate("/contact");
    setActiveChild(null);
    setActive2(2);
    setActive(0);
    setOpen2(false);
  };

  const handleClickFeedback = () => {
    navigate("/feedback");
    setActiveChild(null);
    setActive2(3);
    setActive(0);
    setOpen2(false);
  };

  return (
    <Box
      sx={{ display: "flex", minHeight: "100vh", backgroundColor: "#f5f6fa" }}
    >
      <Dialogbox
        open={isOpen}
        title="Confirm Logout"
        content="Are you sure you want to logout? Logging out will end your current session and any unsaved changes may be lost."
        agreeButtonText="Logout"
        disagreeButtonText="Cancel"
        onAgree={handleLogout}
        onDisagree={handleClose}
        onClose={handleClose}
      />
      <CssBaseline />
      <AppBar position="fixed" open={open}>
        <Toolbar className="toolbar">
          <IconButton
            aria-label="open drawer"
            onClick={handleDrawerOpen}
            edge="start"
            sx={[
              {
                marginRight: 2,
              },
            ]}
          >
            <MenuIcon />
          </IconButton>
            <Search />
          <div className="toolbar-inner">
            <span className="username">Hi, Dasun Shyaminda</span>
            <img
              onClick={handleOpen}
              className="logout-icon"
              src={logoutIcon}
              alt=""
            />
          </div>
        </Toolbar>
      </AppBar>
      <Drawer variant="permanent" open={open}>
        <div className="drawer-header">
          <img className="drawer-logo" src={logo} alt="" />
          <span className="login-header-text">{text.authLoginPage.header}</span>
        </div>
        {open && (
          <div className="dashboard-title-outer">
            <span className="dashboard-title">Dashboard</span>
          </div>
        )}
        <List>
          {["Dashboard", "Projects"].map((text, index) => (
            <ListItem key={text} disablePadding sx={{ display: "block" }}>
              <ListItemButton
                onClick={
                  index === 0 ? handleClickDashboard : handleClickProjects
                }
                sx={[
                  {
                    minHeight: 48,
                    px: 2.5,
                    backgroundColor:
                      index === active - 1 ? "#e6f4ff" : "transparent",
                    color: index === active - 1 ? "#1677ff" : "black",
                    borderRight:
                      index === active - 1 ? "2px solid #1677ff" : "none",
                    "&:hover": {
                      backgroundColor:
                        index === active - 1 ? "#e6f4ff" : "transparent",
                    },
                  },
                  open
                    ? {
                        justifyContent: "initial",
                      }
                    : {
                        justifyContent: "center",
                      },
                ]}
              >
                <ListItemIcon
                  sx={[
                    {
                      minWidth: 0,
                      justifyContent: "center",
                      color: index === active - 1 ? "#1677ff" : "black",
                    },
                    open
                      ? {
                          mr: 2,
                        }
                      : {
                          mr: "auto",
                        },
                  ]}
                >
                  {index === 0 ? (
                    <SpeedOutlinedIcon style={{ fontSize: "20px" }} />
                  ) : (
                    <WidgetsOutlinedIcon style={{ fontSize: "20px" }} />
                  )}
                </ListItemIcon>
                <ListItemText
                  primary={text}
                  primaryTypographyProps={{ fontSize: "14px" }} // Adjusting the font size for the text
                  sx={[
                    open
                      ? {
                          opacity: 1,
                        }
                      : {
                          opacity: 0,
                        },
                  ]}
                />
                {index === 1 && open ? (
                  open2 ? (
                    <ExpandLess />
                  ) : (
                    <ExpandMore />
                  )
                ) : null}
              </ListItemButton>
              {index === 1 ? (
                <Collapse in={open2} timeout="auto" unmountOnExit>
                  <List component="div" disablePadding>
                    <ListItem sx={{ pl: 6 }}>
                      <ListItemButton onClick={handleClickStats}>
                        <ListItemText
                          primary="Stats"
                          primaryTypographyProps={{ fontSize: "14px" }} // Adjust font size for child items
                          sx={{
                            color: activeChild === 1 ? "#1677ff" : "black",
                          }}
                        />
                      </ListItemButton>
                    </ListItem>
                    <ListItem sx={{ pl: 6 }}>
                      <ListItemButton onClick={handleClickDetails}>
                        <ListItemText
                          primary="Details"
                          primaryTypographyProps={{ fontSize: "14px" }} // Adjust font size for child items
                          sx={{
                            color: activeChild === 2 ? "#1677ff" : "black",
                          }}
                        />
                      </ListItemButton>
                    </ListItem>
                    {/* Add more child items as needed */}
                  </List>
                </Collapse>
              ) : null}
            </ListItem>
          ))}
        </List>

        <Divider />
        <List>
          {["About", "Contact", "Feedback"].map((text, index) => (
            <ListItem key={text} disablePadding sx={{ display: "block" }}>
              <ListItemButton
                onClick={
                  index === 0 ? handleClickAbout : index === 1 ? handleClickContact 
                  : handleClickFeedback
                }
                sx={[
                  {
                    minHeight: 48,
                    px: 2.5,
                    backgroundColor:
                      index === active2 - 1 ? "#e6f4ff" : "transparent",
                    color: index === active2 - 1 ? "#1677ff" : "black",
                    borderRight:
                      index === active2 - 1 ? "2px solid #1677ff" : "none",
                    "&:hover": {
                      backgroundColor:
                        index === active2 - 1 ? "#e6f4ff" : "transparent",
                    },
                  },
                  open
                    ? {
                        justifyContent: "initial",
                      }
                    : {
                        justifyContent: "center",
                      },
                ]}
              >
                <ListItemIcon
                  sx={[
                    {
                      minWidth: 0,
                      justifyContent: "center",
                      color: index === active2 - 1 ? "#1677ff" : "black",
                    },
                    open
                      ? {
                          mr: 2,
                        }
                      : {
                          mr: "auto",
                        },
                  ]}
                >
                  {index === 0 ? (
                    <InfoOutlinedIcon style={{ fontSize: "20px" }} />
                  ) : index === 1 ? (
                    <PhoneOutlinedIcon style={{ fontSize: "20px" }} />
                  ) : (
                    <FeedbackOutlinedIcon style={{ fontSize: "20px" }} />
                  )}
                </ListItemIcon>
                <ListItemText
                  primary={text}
                  primaryTypographyProps={{ fontSize: "14px" }} // Adjusting the font size for the text
                  sx={[
                    open
                      ? {
                          opacity: 1,
                        }
                      : {
                          opacity: 0,
                        },
                  ]}
                />
              </ListItemButton>
            </ListItem>
          ))}
        </List>

        <Divider />
      </Drawer>
      <Box
        component="main"
        sx={{
          flexGrow: 1,
          p: 4,
          transition: (theme) =>
            theme.transitions.create(["margin", "width"], {
              easing: theme.transitions.easing.sharp,
              duration: theme.transitions.duration.leavingScreen,
            }),
          width: open ? `calc(100% - ${drawerWidth}px)` : "100%",
        }}
      >
        <DrawerHeader />
        {children}
      </Box>

      <Footer />
    </Box>
  );
}
