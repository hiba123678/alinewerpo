import React from 'react'
import Box from '@mui/material/Box';
import Grid from '@mui/material/Unstable_Grid2';
import Button from '@mui/material/Button';import { useRef } from 'react';

function Beforfoot() {
  
  return (
    <Box sx={{height:'30vh', backgroundColor:"#a79132"}}  id="sectioncontact" >
       <Box  className=" pt-5 pb-5 container d-flex align-items-center"  sx={{ flexGrow: 1}}  >
      <Grid container className=" " spacing={2}>
        <Grid item xs={12} md={6} >
   
  <h1 className=" fw-bolder" style={{fontSize: '50px',color:"#ffffff"}}>
Save your time and fly with jetly
  </h1>
  
        </Grid>
        <Grid item xs={12} md={6}  className="d-flex flex-row-reverse">
        <Button variant="contained" size="large"  className="rounded-pill mt-4" style={{backgroundColor:"#123821" ,height:'65px', width:"250px"}}>Call US</Button>
        </Grid>
        
      </Grid>
    </Box>
    </Box>
  )
}

export default Beforfoot;
