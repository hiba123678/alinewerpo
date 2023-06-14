import React from 'react'
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Avatar from '@mui/material/Avatar' ;
import R from './image/R.png'
function What() {
    const myStyle={
        backgroundImage: `url(${R})`,
        height:'80vh',
      
        fontSize:'50px',
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
    }; return (
    <>
      <Box  className="pt-4 container"  sx={{ flexGrow: 1 ,height:'auto'}}  >
      <Grid container className=" d-flex justify-content-center align-items-center" spacing={2}>
        <Grid item xs={12} md={6} >
        <p className="fw-bold" style={{fontSize: '16px', fontWeight: '700px', lineHeight: '20px', color:"#a79132"}}>LUXURY CHARTERS</p>
  <p className=" fw-bolder" style={{fontSize: '50px',color:"#123821"}}>About The Company
  </p>
  <p style={{color:'#79817c',fontSize: '16px'}}>
  At our online flight booking company, we are dedicated to providing a seamless and convenient experience for travelers worldwide. With a user-friendly platform, we offer a wide range of flight options from various airlines, ensuring that customers can find the perfect itinerary to suit their needs.
<br/><br/>
Booking through our website is incredibly easy and efficient. With just a few simple steps, travelers can search for flights, and secure their tickets in no time
  </p>
        </Grid>
        <Grid item xs={12} md={6}  className="">
        <Avatar alt="Example Alt" src={R} sx={{width:'100%', height:'auto'}} />
        </Grid>
        
      </Grid>
    </Box>
    </>
  )
}

export default What;
