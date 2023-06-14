import React from 'react'
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Unstable_Grid2';
import about2 from './image/about2.png';
import about1 from './image/about1.jpg';
import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
import Avatar from '@mui/material/Avatar';
import LocalShippingSharpIcon from '@mui/icons-material/LocalShippingSharp';
import AddShoppingCartSharpIcon from '@mui/icons-material/AddShoppingCartSharp';
import { useNavigate } from 'react-router-dom';
function AboutHome() {
  const navigate = useNavigate();

  const handleBookNow = () => {
    navigate('/trip');
  };

  return (
    <Box sx={{ flexGrow: 1,backgroundColor:'#f6f5ee' }}   id="sectionabout">
  

  <Box sx={{ flexGrow: 1,backgroundColor:'#f6f5ee' }} className="container pt-5 pb-5">
      <Grid container spacing={4}>
        <Grid item xs={12} sm={12} md={5}>
        <Box component="img" src={about1} sx={{ height: "65vh", width: "100%",verticalAlign: 'middle' }} />
        <Box component="img" src={about2} sx={{ verticalAlign: 'middle',marginTop:'-60px', marginLeft:'-50px',overflowClipMargin: "content-box",overflow: 'clip', display: { xs: 'none', sm: 'none', md: 'block' } }} />
        </Grid>






        <Grid item xs={12}sm={12} md={6} sx={{verticalAlign: 'middle'}}>
    <h3 className="fw-bold" style={{fontSize: '16px', fontWeight: '700px', lineHeight: '20px', color:"#a79132"}}>WHAT WILL YOU GET</h3><br/>
    <h1 className=" fw-bolder" style={{fontSize: '50px',color:"#123821"}}>Welcome to our site where the world is just a click away</h1><br/>
    <p style={{color:'#79817c',fontSize: '16px'}}>At our online flight ticket booking site, we strive to provide seamless and convenient travel experiences. With a wide range of airlines and destinations, competitive prices<br/><br/>

and user-friendly interface we are your trusted platform for booking flights. Fly with ease and explore the world with us.</p>
       
       
      <Stack  direction="row" spacing={2}>
<Box
        sx={{
          height: '90PX',
          width: '230px',
          display: 'inline-block',
          p: 2,
          mx: 1,
          bgcolor: '#89b49a',
          color: (theme) =>
            theme.palette.mode === 'dark' ? 'grey.300' : 'grey.800',
          border: '1px solid',
          borderColor: (theme) =>
            theme.palette.mode === 'dark' ? 'grey.800' : 'grey.300',
          borderRadius: 2,
          fontSize: '0.875rem',
          fontWeight: '700',
          textAlign: 'center',
        }}
      >
      <p>Safety</p>
      <p>very high</p>
      </Box>
      <Box
        sx={{
          height: '90PX',
          width: '230px',
          display: 'inline-block',
          p: 2,
          mx: 1,
          bgcolor: '#89b49a',
          color: (theme) =>
            theme.palette.mode === 'dark' ? 'grey.300' : 'grey.800',
          border: '1px solid',
          borderColor: (theme) =>
            theme.palette.mode === 'dark' ? 'grey.800' : 'grey.300',
          borderRadius: 2,
          fontSize: '0.875rem',
          fontWeight: '700',
          textAlign: 'center',
        }}
      >
        <p>Reliability</p>
      <p>very high</p>
      </Box>
      </Stack> <br/>
      <Button variant="contained" size="large"  onClick={handleBookNow} className="rounded-pill" style={{backgroundColor:"#a79132" ,height:'65px', width:"250px"}}>Book Now</Button>
        </Grid>
        
       
      </Grid>
    </Box>
   

    </Box>
  )
}

export default AboutHome;
// #274291