import React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Unstable_Grid2';
import { useNavigate } from 'react-router-dom';
function SearchForm() {
  const navigate = useNavigate();

  const handleBookNow = () => {
    navigate('/trip');
  };
  return (
    <Box sx={{ backgroundColor: '#143a23', height:'auto'}} >
      
   

      <Box  className=" pt-5 pb-5 container d-flex align-items-center"  sx={{ flexGrow: 1}}  >
      <Grid container className=" " spacing={2}>
        <Grid item xs={12} md={6} >
   
  <h1 className=" fw-bolder" style={{fontSize: '50px',color:"#ffffff"}}>
  Hurry up to book your flight now with us
  </h1>
  
        </Grid>
        <Grid item xs={12} md={6}  className="d-flex flex-row-reverse">
        <Button variant="contained" size="large"  className="rounded-pill mt-4" style={{backgroundColor:"#a79132" ,height:'65px', width:"250px"}}
        
        onClick={handleBookNow}>Book Now</Button>
        </Grid>
        
      </Grid>
    </Box>
















    </Box>
  )
}

export default SearchForm;
