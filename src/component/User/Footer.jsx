import React from 'react'
import { Link } from 'react-router-dom';

import Container from '@mui/material/Container';
import Box from '@mui/material/Box';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import Grid from '@mui/material/Unstable_Grid2';
import MenuList from '@mui/material/MenuList';
import TwitterIcon from '@mui/icons-material/Twitter';
import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookIcon from '@mui/icons-material/Facebook';
import Stack from '@mui/material/Stack';
const Footer = () => {
  return (
    <Box style={{height:'60vh', backgroundColor:"#123821"}}>
       <Box sx={{ flexGrow: 1 }} style={{height:'auto'}} className="pt-5 container">
      <Grid container className='mt-5' >
        <Grid xs={12} md={4} className='mt-5' >
            <div>
          <h4 style={{color:"#ffffff"}}>Jetly</h4>
          <p style={{color:"#ffffff"}}> far far away, far from the countries<br/> jelty is the best choice <br/>for you</p>
          </div>
        </Grid>

        <Grid xs={12} md={4}  className='mt-5'>
        <div>
          <h4 style={{color:"#ffffff"}}>Menu </h4>
          <MenuList>
        <MenuItem  as ={Link} to="/" style={{color:"#ffffff"}}>Home</MenuItem>
        <MenuItem  as ={Link} to="/" style={{color:"#ffffff"}}>About</MenuItem>
        <MenuItem  as ={Link} to="/trip" style={{color:"#ffffff"}}>Trip</MenuItem>
        <MenuItem  as ={Link} to="/#sectioncontact" style={{color:"#ffffff"}}>Contact Us</MenuItem>
       </MenuList>
          </div>
        </Grid>


{/* 
        <Grid xs={12} md={3}  className='mt-5'>
         <div >
          <h4 style={{color:"#ffffff"}}>Help </h4>
          <MenuList className='text-start'>
        <MenuItem style={{color:"#ffffff"}}>Shipping Information</MenuItem>
        <MenuItem style={{color:"#ffffff"}}>Returns & Exchange</MenuItem>
        <MenuItem style={{color:"#ffffff"}}>Terms & Conditions</MenuItem>
        <MenuItem style={{color:"#ffffff"}}>Privacy Policy
</MenuItem>
       </MenuList>
          </div>
      
      
      
        </Grid> */}
        <Grid xs={12} md={4}  className='mt-5'>
        <div>
          <h5 style={{color:"#ffffff"}}>Have a Questions? </h5>
         <p style={{color:"#ffffff"}}>flight booking online<br/> Syria<br/> Latakia</p>
         <p style={{color:"#ffffff"}}>	09995654322</p>
         <p style={{color:"#ffffff"}}>	info@yourdomain.com</p>
          </div>
        </Grid>
<br/>
       
      <br>
      </br>

      </Grid>

    </Box>
    <div className='text-center p-5' >
<p className='text-center p-5' style={{color:"#ffffff"}}>Copyright ©2023 All rights reserved</p>

</div>
    </Box>
  )
}

export default Footer
