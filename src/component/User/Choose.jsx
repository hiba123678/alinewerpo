import React from 'react'
import Box from '@mui/material/Box';

import Grid from '@mui/material/Unstable_Grid2';
import b1 from './image/b1.jpg';

import b2 from './image/b2.jpg';
import home3 from './image/home3.jpg';
import Container from '@mui/material/Container';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
const Choose = () => {
  return (
    <Box sx={{backgroundColor: '#f6f5ee'}} >
      <Box className='  '  sx={{ paddingTop:'18vh', paddingBottom:'15vh',
        height: 'auto',
      }}>
<p className='text-center' style={{fontSize: '17px', fontWeight: '900px', lineHeight: '10px', color:"#a79132",fontFamily:'DM Sans',lineHeight: '34px'}}>LUXURY CHARTERS</p>
<p className='fw-bold  text-center  lh-1' style={{fontSize: '50px',color:"#123821",fontFamily:'DM Sans'}}>Private jet for business
 <br/> and leisure purpose</p>
<Container className="pt-5 pb-5">

      <Grid container spacing={2}>

      <Grid sx={12} md={4}>
        
        <Card sx={{ maxWidth: 400 }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="300"
          image={b1}
          alt="green iguana"
        />
        <CardContent>
          <Typography  className=" fw-bolder" gutterBottom  component="div" sx={{fontSize:'30px',fontWeight: '700px',lineHeight: '34px',color:"#123821",fontFamily:"DM Sans"}}>
          For business travelers
          </Typography>
          <Typography  color="text.secondary" sx={{fontSize:'17px',lineHeight: '24px',fontWeight: '400px',fontFamily:"DM Sans"}}>
          our private jets provide a seamless and efficient way to reach your destination. Avoid crowded airports and lengthy layovers
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
        </Grid>




        <Grid sx={12} md={4}>
        
        <Card sx={{ maxWidth: 400 }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="300"
          image={b2}
          alt="green iguana"
        />
        <CardContent>
          <Typography  className=" fw-bolder" gutterBottom  component="div" sx={{fontSize:'30px',fontWeight: '700px',lineHeight: '34px',color:"#123821",fontFamily:"DM Sans"}}>
          For leisure travelers
          </Typography>
          <Typography  color="text.secondary" sx={{fontSize:'17px',lineHeight: '24px',fontWeight: '400px',fontFamily:"DM Sans"}}>
          Whether you're planning a romantic getaway, a family vacation, our private jets provide a lavish and personalized journey. 
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
        </Grid>




        <Grid sx={12} md={4}>
        
        <Card sx={{ maxWidth: 400 }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="300"
          image={home3}
          alt="green iguana"
        />
        <CardContent>
          <Typography  className=" fw-bolder" gutterBottom  component="div" sx={{fontSize:'30px',fontWeight: '700px',lineHeight: '34px',color:"#123821",fontFamily:"DM Sans"}}>
          user-friendly platform
          </Typography>
          <Typography  color="text.secondary" sx={{fontSize:'17px',lineHeight: '24px',fontWeight: '400px',fontFamily:"DM Sans"}}>
            we  make the booking process quick, convenient, and intuitive. Whether you're a seasoned traveler or booking for the first time
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
        </Grid>



      
       
      </Grid>
      </Container>
    </Box>
    </Box>
  )
}

export default Choose;
