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
const items = ['home', 'works', 'about-me', 'contacts'];

function DrawerAppBar(props) {
  const {window} = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen((prevState) => !prevState);
  };

  const drawer = (
    <Box onClick={handleDrawerToggle} sx={{textAlign: 'center', right: 0}}>
      <Typography variant="h6" sx={{my: 2}}>
        <FaRegWindowClose style={{color: 'white'}} />
      </Typography>
      <Divider />
      <List>
        {items.map((item, index) => (
          <ListItem key={index} disablePadding>
            <ListItemButton
              onClick={() => props.setSelected(index)}
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
    <Box sx={{display: 'flex'}}>
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
          open={mobileOpen}
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
