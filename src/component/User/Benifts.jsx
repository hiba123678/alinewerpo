import React from 'react'
import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import Grid from '@mui/material/Unstable_Grid2';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import benefits1 from  './image/benefits1.png';
import benefits2 from  './image/benefits2.png';

import Button from '@mui/material/Button';
import { Element } from 'react-scroll';
const Benifts = () => {
  return (
    <>
    
    <Box id="Benefits" sx={{ 
    backgroundColor: '#ffffff'}}>
      <Box  className='container' sx={{  paddingTop:'100px',paddingBottom:'100px',
        height: 'auto',
       }}>


      <Grid container spacing={2}>

        <Grid sx={12} md={6}>
        <p className="fw-bold" style={{fontSize: '16px', fontWeight: '700px', lineHeight: '20px', color:"#a79132"}}>LUXURY CHARTERS</p>
  <p className=" fw-bolder" style={{fontSize: '50px',color:"#123821"}}>Benefits of Online Airline Ticket Booking Site
</p>
  
  <p style={{color:'#79817c',fontSize: '16px'}}>
  Overall, online airline ticket booking sites provide a convenient<br/> efficient, and cost-effective way to plan and book your air travel.<br/>  Embracing the digital platform empowers you with flexibility<br/>  choices, and the ability to make informed decisions for a smooth<br/>  and enjoyable travel experience.<br/>

  </p><br/>
  
  <Button variant="contained" size="large"  className="rounded-pill" style={{backgroundColor:"#a79132" ,height:'65px', width:"250px", marginTop:'15px'}}>Discover Now</Button>
 
    
        </Grid>












        <Grid container className="p-5"  sx={12} md={6}  spacing={2}>
   <img className= "mx-auto" src={benefits1}/>
      
    

      {/* <Box  sx={12} md={6} className="m-1 pt-2"
       style={{
          height: '100PX',
          width: '300px',
          display: 'inline-block',
          p: 3,
         
          backgroundColor:'#f9edb9',
         
          fontSize: '0.875rem',
          fontWeight: '700',
          textAlign: 'center',
        }}
      >
      <p className="fw-bold" style={{color:'#123821', fontSize:"18px"}}>Proven safety</p>
      <p>Lorem ipsum text</p>
      </Box>
      
      <Box  sx={12} md={6} className="m-1 border border-white  pt-2" 
       style={{
          height: '100PX',
          width: '300px',
          display: 'inline-block',
          p: 3,
         
          fontSize: '0.875rem',
          fontWeight: '700',
          textAlign: 'center',
          backgroundColor:'#f9edb9'
        }}
      >
      <p  className="fw-bold" style={{color:'#123821', fontSize:"18px"}}>Proven safety</p>
      <p>Lorem ipsum text</p>
      </Box>

      <br/>
      <Box  sx={12} md={6} className="m-1 pt-2"
       style={{
          height: '100PX',
          width: '300px',
          display: 'inline-block',
          p: 3,
         
          backgroundColor:'#f9edb9',
         
          fontSize: '0.875rem',
          fontWeight: '700',
          textAlign: 'center',
        }}
      >
      <p className="fw-bold" style={{color:'#123821', fontSize:"18px"}}>Proven safety</p>
      <p>Lorem ipsum text</p>
      </Box>
      
      <Box  sx={12} md={6} className="m-1 border border-white  pt-2" 
       style={{
          height: '100PX',
          width: '300px',
          display: 'inline-block',
          p: 3,
         
          fontSize: '0.875rem',
          fontWeight: '700',
          textAlign: 'center',
          backgroundColor:'#f9edb9'
        }}
      >
      <p  className="fw-bold" style={{color:'#123821', fontSize:"18px"}}>Proven safety</p>
      <p>Lorem ipsum text</p>
      </Box>
  <br/>
      <Box  sx={12} md={6} className="m-1 pt-2"
       style={{
          height: '100PX',
          width: '300px',
          display: 'inline-block',
          p: 3,
         
          backgroundColor:'#f9edb9',
         
          fontSize: '0.875rem',
          fontWeight: '700',
          textAlign: 'center',
        }}
      >
      <p className="fw-bold" style={{color:'#123821', fontSize:"18px"}}>Proven safety</p>
      <p>Lorem ipsum text</p>
      </Box>
      
      <Box  sx={12} md={6} className="m-1 border border-white  pt-2" 
       style={{
          height: '100PX',
          width: '300px',
          display: 'inline-block',
          p: 3,
         
          fontSize: '0.875rem',
          fontWeight: '700',
          textAlign: 'center',
          backgroundColor:'#f9edb9'
        }}
      >
      <p  className="fw-bold" style={{color:'#123821', fontSize:"18px"}}>Proven safety</p>
      <p>Lorem ipsum text</p>
      </Box> */}

   
        </Grid>






        </Grid>
       
    </Box>
    </Box>
    </>
  )
}

export default Benifts;

