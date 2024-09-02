import * as React from 'react';
import { styled, Theme, CSSObject } from '@mui/material/styles';
import Box from '@mui/material/Box';
import MuiDrawer from '@mui/material/Drawer';
import MuiAppBar, { AppBarProps as MuiAppBarProps } from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import List from '@mui/material/List';
import CssBaseline from '@mui/material/CssBaseline';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Collapse from '@mui/material/Collapse';
import ExpandLess from '@mui/icons-material/ExpandLess';
import ExpandMore from '@mui/icons-material/ExpandMore';
import { ReactElement } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import "../Common/css/styles.css";
import { HomeOutlinedIcon, MenuIcon } from '../Assets/Icons/Icons';
import TurnedInNotOutlined from '@mui/icons-material/TurnedInNotOutlined';
import Footer from '../Components/Footer';

const drawerWidth = 240;

const openedMixin = (theme: Theme): CSSObject => ({
  width: drawerWidth,
  transition: theme.transitions.create('width', {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.enteringScreen,
  }),
  overflowX: 'hidden',
});

const closedMixin = (theme: Theme): CSSObject => ({
  transition: theme.transitions.create('width', {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  overflowX: 'hidden',
  width: `calc(${theme.spacing(7)} + 1px)`,
  [theme.breakpoints.up('sm')]: {
    width: `calc(${theme.spacing(8)} + 1px)`,
  },
});

const DrawerHeader = styled('div')(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'flex-end',
  padding: theme.spacing(0, 1),
  ...theme.mixins.toolbar,
}));

interface AppBarProps extends MuiAppBarProps {
  open?: boolean;
}

const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== 'open',
})<AppBarProps>(({ theme }) => ({
  zIndex: theme.zIndex.drawer + 1,
  transition: theme.transitions.create(['width', 'margin'], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  variants: [
    {
      props: ({ open }) => open,
      style: {
        marginLeft: drawerWidth,
        width: `calc(100% - ${drawerWidth}px)`,
        transition: theme.transitions.create(['width', 'margin'], {
          easing: theme.transitions.easing.sharp,
          duration: theme.transitions.duration.enteringScreen,
        }),
      },
    },
  ],
}));

const Drawer = styled(MuiDrawer, { shouldForwardProp: (prop) => prop !== 'open' })(
  ({ theme }) => ({
    width: drawerWidth,
    flexShrink: 0,
    whiteSpace: 'nowrap',
    boxSizing: 'border-box',
    variants: [
      {
        props: ({ open }) => open,
        style: {
          ...openedMixin(theme),
          '& .MuiDrawer-paper': openedMixin(theme),
        },
      },
      {
        props: ({ open }) => !open,
        style: {
          ...closedMixin(theme),
          '& .MuiDrawer-paper': closedMixin(theme),
        },
      },
    ],
  }),
);

interface Props {
  children: ReactElement;
}

export default function Dashboard({ children }: Readonly<Props>) {
  const [open, setOpen] = React.useState(true);
  const [openSample2, setOpenSample2] = React.useState(false);
  const [active, setActive] = React.useState(1);
  const [activeChild, setActiveChild] = React.useState<number | null>(null); // To track active child item
  const navigate = useNavigate();

  const handleDrawerOpen = () => {
    setOpen(!open);
  };

  const handleSampleClick = () => {
    navigate("/dashboard/sample");
    setOpenSample2(false)
    setActive(1);
    setActiveChild(null); // Reset child item selection
  };

  const handleSample2Click = () => {
    setOpenSample2(!openSample2);
    if (!openSample2) {
      setActive(2);
    } else {
      setActive(0);
    }
  };

  const handleChildClick = (childIndex: number) => {
    setActiveChild(childIndex); // Set active child item
  };

  return (
    <Box sx={{ display: 'flex' }}>
      <CssBaseline />
      <AppBar position="fixed" open={open}>
        <Toolbar className="toolbar">
          <IconButton
            aria-label="open drawer"
            onClick={handleDrawerOpen}
            edge="start"
            sx={[
              {
                marginRight: 5,
              },
            ]}
          >
            <MenuIcon />
          </IconButton>
        </Toolbar>
      </AppBar>
      <Drawer variant="permanent" open={open}>
        <DrawerHeader />
        <Divider />
        <List>
          {['Sample', 'Sample2'].map((text, index) => (
            <ListItem key={text} disablePadding sx={{ display: 'block' }}>
              <ListItemButton
                onClick={index === 0 ? handleSampleClick : handleSample2Click}
                sx={[
                  {
                    minHeight: 48,
                    px: 2.5,
                    backgroundColor: index === (active - 1) ? '#e6f4ff' : 'transparent',
                    color: index === (active - 1) ? "#1677ff" : "black",
                    borderRight: index === (active - 1) ? "2px solid #1677ff" : "none",
                    '&:hover': {
                      backgroundColor: index === (active - 1) ? '#e6f4ff' : 'transparent',
                    },
                  },
                  open
                    ? {
                        justifyContent: 'initial',
                      }
                    : {
                        justifyContent: 'center',
                      },
                ]}
              >
                <ListItemIcon
                  sx={[
                    {
                      minWidth: 0,
                      justifyContent: 'center',
                      color: index === (active - 1) ? "#1677ff" : "black",
                    },
                    open
                      ? {
                          mr: 3,
                        }
                      : {
                          mr: 'auto',
                        },
                  ]}
                >
                  {index === 0 ? <HomeOutlinedIcon /> : <TurnedInNotOutlined />}
                </ListItemIcon>
                <ListItemText
                  primary={text}
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
                {index === 1 && open ? (openSample2 ? <ExpandLess /> : <ExpandMore />) : null}
              </ListItemButton>
              {index === 1 ? (
                <Collapse in={openSample2} timeout="auto" unmountOnExit>
                  <List component="div" disablePadding>
                    <ListItem sx={{ pl: 6 }}>
                      <ListItemButton onClick={() => handleChildClick(1)}>
                        <ListItemText
                          primary="Child Item 1"
                          sx={{ color: activeChild === 1 ? "#1677ff" : "black" }}
                        />
                      </ListItemButton>
                    </ListItem>
                    <ListItem sx={{ pl: 6 }}>
                      <ListItemButton onClick={() => handleChildClick(2)}>
                        <ListItemText
                          primary="Child Item 2"
                          sx={{ color: activeChild === 2 ? "#1677ff" : "black" }}
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
      </Drawer>
      <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
        <DrawerHeader />
        {children}
      </Box>
      <Footer />
    </Box>
  );
}
