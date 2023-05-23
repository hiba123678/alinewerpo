import React from 'react';
import Box from '@mui/material/Box';

import Grid from '@mui/material/Unstable_Grid2';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import flyimg from './image/flyimg.png';
import home6 from './image/home6.png';
import Button from '@mui/material/Button';
function Fly() {






  return (
   



<>

<Box id="Services" className='d-flex p-5 align-items-center'  sx={{ 
        height: 'auto',
        backgroundColor: '#123821'}}>

<Container className="pt-5 pb-5">
      <Grid container spacing={2}>

        <Grid sx={12} md={6}>
        
  <p className='fw-bold  fw-bolder ' style={{fontSize: '40px',color:"#ffffff"}}>We fly with you to over 6800
  destinations world wide</p>
  
  <p className='pt-3' style={{fontSize: '18px', fontWeight: '400px', lineHeight: '30px', color:"#93a49a",fontFamily: "DM Sans"}}>
  Curly Airline proudly raises the bar and exceeds the standard for luxury and<br/>corporate private jet charter services.
  </p>
  <Button 	
 variant="contained" size=""  className="rounded-pill" style={{backgroundColor:"#a79132" ,height:'60px', width:"190px", marginTop:'20px'}}>Learn More</Button>
        </Grid>











        <Grid className="d-flex  justify-content-center align-items-start" sx={12} md={6}>
        <img src={flyimg} />
        </Grid>
       
      </Grid>
      </Container>
    </Box>

</>
  )
}

export default Fly;
