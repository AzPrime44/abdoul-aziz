import * as React from 'react';
import PropTypes from 'prop-types';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import Divider from '@mui/material/Divider';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import MenuIcon from '@mui/icons-material/Menu';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import {FaRegWindowClose} from 'react-icons/fa';
import Avatar from '@mui/material/Avatar';
import az from '../asserts/image/myEmoji.png';
const drawerWidth = 240;
const items = ['Home', 'Projets', 'About-me', 'Contacts'];

function DrawerAppBar(props) {
  const {window} = props;
  const [open, setOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setOpen((prevState) => !prevState);
  };

  const [touchStart, setTouchStart] = React.useState(null);
  const [touchEnd, setTouchEnd] = React.useState(null);
  const appRef = React.useRef(null);
  // the required distance between touchStart and touchEnd to be detected as a swipe

  const onTouchStart = (e) => {
    setTouchEnd(null); // otherwise the swipe is fired even with usual touch events
    setTouchStart(e.targetTouches[0].clientX);
  };

  const onTouchMove = (e) => setTouchEnd(e.targetTouches[0].clientX);
  const handleClick = (event) => {
    if (appRef.current && !appRef.current.contains(event.target)) {
      setOpen(false);
    }
  };
  React.useEffect(() => {
    document.addEventListener('click', handleClick);
    return () => {
      document.removeEventListener('click', handleClick);
    };
  }, [open]);
  const onTouchEnd = () => {
    if (!touchStart || !touchEnd) return;
    // const distance = touchStart - touchEnd;
    // const isRightSwipe = distance < -10;
    if (touchStart - touchEnd < -40) {
      setOpen(!open);
    }
    // add your conditional logic here
  };

  const drawer = (
    <Box onClick={handleDrawerToggle} sx={{textAlign: 'center', right: 0}}>
      <Typography variant="h6" sx={{my: 2}}>
        <FaRegWindowClose style={{color: 'white', cursor: 'pointer'}} />
      </Typography>
      <Divider />
      <List>
        {items.map((item, index) => (
          <ListItem key={index} disablePadding>
            <ListItemButton
              onClick={() => {
                props.setSelected(index);
                setOpen(true);
                // handleDrawerToggle();
              }}
              sx={{textAlign: 'center'}}
            >
              <div
                style={{color: props.selected === index ? 'white' : '#c778dd'}}
              >
                <span style={{color: '#C778DD'}}>#</span>
                {item}
              </div>
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  );

  const container =
    window !== undefined ? () => window().document.body : undefined;

  return (
    <Box
      sx={{display: 'flex'}}
      onTouchStart={onTouchStart}
      onTouchMove={onTouchMove}
      onTouchEnd={onTouchEnd}
      ref={appRef}
    >
      <CssBaseline />
      <AppBar component="nav" sx={{backgroundColor: '#282c33'}}>
        <Toolbar>
          <Avatar src={az} alt="Abdoul Aziz O. EBE" />
          <IconButton
            color="white"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{
              ml: 2,
              outline: 'none',
              display: {sm: 'none'},
              marginLeft: `80%`,
            }}
          >
            <MenuIcon sx={{color: 'white'}} />
          </IconButton>
        </Toolbar>
      </AppBar>
      <Box component="nav">
        <Drawer
          container={container}
          variant="persistent"
          anchor="right"
          open={open}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
          sx={{
            display: {xs: 'block', sm: 'none'},
            '& .MuiDrawer-paper': {
              boxSizing: 'border-box',
              width: drawerWidth,
              backgroundColor: '#282c33',
            },
          }}
        >
          {drawer}
        </Drawer>
      </Box>
    </Box>
  );
}

DrawerAppBar.propTypes = {
  /**
   * Injected by the documentation to work in an iframe.
   * You won't need it on your project.
   */
  window: PropTypes.func,
};

export default DrawerAppBar;
