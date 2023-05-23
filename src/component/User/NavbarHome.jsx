import * as React from 'react';
import PropTypes from 'prop-types';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Divider from '@mui/material/Divider';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import MenuIcon from '@mui/icons-material/Menu';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Badge from '@mui/material/Badge';
import { ShoppingCart } from '@mui/icons-material';
import logooff from './image/logooff.png';
import Benifts from './Benifts';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import { HashLink } from 'react-router-hash-link';
const drawerWidth = 240;
const navItems = ['Home','Services','Benifts','About', 'Contact'];
const handleScroll = e => {
  e.preventDefault();
  const main = this.main.current;
  window.scrollTo({
      top: main.offsetTop,
      left: 0,
      behavior: "instant"
  });
};
function NavbarHome(props) {
  const { window } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const drawer = (
 
    <Box onClick={handleDrawerToggle} sx={{ textAlign: 'center' }}>
      <Typography variant="h6" sx={{ my: 2 }}>
       Dior
      </Typography>
      <Divider />
      <List style={{backgroundColor:"red"}}>
        {navItems.map((item) => (
          <ListItem key={item} disablePadding>
            
            <ListItemButton sx={{ textAlign: 'center' }}>
              <ListItemText primary={item} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
     
    </Box>

  );

  const container = window !== undefined ? () => window().document.body : undefined;

  return (
    <Box  className='container' >
      <AppBar component="nav" style={{backgroundColor:'#f6f5ee',height:'90px', boxShadow: 'none'}}
  
  >
        <Toolbar sx={{ my: 2 }} >
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { sm: 'none' } }}
          >
            <MenuIcon />
          </IconButton>
          {/* <Typography
            variant="h6"
            component="div"
            sx={{ display: { xs: 'none', sm: 'block',paddingLeft:100} }}
          >
         Flight Booking
          </Typography> */}
          <img src={logooff} style={{paddingLeft:'80px'}}/>

          <Box sx={{ display: { xs: 'none', sm: 'block',  margin:'auto'} }} >
            {navItems.map((item) => (
              <Button key={item} sx={{ color: '#79817c' , fontSize:'15px', px:5,fontWeight: '500px',textTransform: 'uppercase',fontFamily:'system-ui'}}>
              {item} 
              </Button>
            ))}
          </Box>

        


        </Toolbar>
      </AppBar>
      
      <Box component="nav">
        <Drawer
          container={container}
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
          sx={{
            display: { xs: 'block', sm: 'none' },
            '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
          }}
        >
          {drawer}
        </Drawer>
      </Box>
      <Box component="main" sx={{ }}>
        <Toolbar />
        
      </Box>
    </Box>
  );
}

NavbarHome.propTypes = {
  /**
   * Injected by the documentation to work in an iframe.
   * You won't need it on your project.
   */
  window: PropTypes.func,
};

export default NavbarHome;
