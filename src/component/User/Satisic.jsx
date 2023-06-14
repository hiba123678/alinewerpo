import React from 'react'
import Container from '@mui/material/Container';
import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import Grid from '@mui/material/Unstable_Grid2';
const Satisic = () => {
  return (
    <>
    
    <Box className="pt-5 pb-5 " sx={{ 
        height: 'auto',
        backgroundColor: '#a79132'}} >
    <Container className="pt-5 pb-5 ">
    <Grid container spacing={2}  className='d-flex align-items-center'>

    <Grid xs={12} md={3}>
<p className='fw-bold fs-1 text-center' style={{color:"#ffffff"}}>100</p>

<p className=' fs-4 text-center' style={{color:"#ffffff"}}>Reliable partners</p>
    </Grid>



    <Grid xs={12} md={3}><p className='fw-bold fs-1 text-center' style={{color:"#ffffff"}}>395</p>

<p className=' fs-4 text-center' style={{color:"#ffffff"}}>Reservation Process</p>
    </Grid>

    <Grid xs={12} md={3}><p className='fw-bold fs-1 text-center' style={{color:"#ffffff"}}>300</p>

<p className=' fs-4 text-center' style={{color:"#ffffff"}}>Happy clients</p>
    </Grid>

    <Grid xs={12} md={3}><p className='fw-bold fs-1 text-center' style={{color:"#ffffff"}}>200</p>

<p className=' fs-4 text-center' style={{color:"#ffffff"}}>Good rating</p>
    </Grid>


        </Grid>




        </Container>
    </Box>
    
    
    </>
      
 
  )
}

export default Satisic;
