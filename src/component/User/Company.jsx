import React from 'react'
import Box from '@mui/material/Box';
import brand from './image/brand.png';
import Grid from '@mui/material/Grid';
function Company() {
  return (
    <Box sx={{backgroundColor:"#f6f5ee"}}>
        <Box sx={{ flexGrow: 1 }} className="container p-5 border-top border-secondary">
      <Grid container spacing={2} className=" pt-5 pb-5">
        <Grid item xs={6} md={3}>
     <img src={brand} />
        </Grid>
        <Grid item xs={6} md={3}>
        <img src={brand} />
        </Grid>
        <Grid item  xs={6} md={3}>
        <img src={brand} />
        </Grid>
        <Grid item xs={6} md={3} >
        <img src={brand} />
        </Grid>
       
      </Grid>
    </Box>
    </Box>
  )
}

export default Company;
