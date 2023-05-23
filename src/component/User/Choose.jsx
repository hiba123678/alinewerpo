import React from 'react'
import Box from '@mui/material/Box';

import Grid from '@mui/material/Unstable_Grid2';
import home4 from './image/home4.jpg';
import home1 from './image/home1.jpg';
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
          image={home4}
          alt="green iguana"
        />
        <CardContent>
          <Typography  className=" fw-bolder" gutterBottom  component="div" sx={{fontSize:'30px',fontWeight: '700px',lineHeight: '34px',color:"#123821",fontFamily:"DM Sans"}}>
            Lizard
          </Typography>
          <Typography  color="text.secondary" sx={{fontSize:'17px',lineHeight: '24px',fontWeight: '400px',fontFamily:"DM Sans"}}>
            Lizards are a widespread group of squamate reptiles, with over 6,000
            species, ranging across all continents except Antarctica
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
          image={home1}
          alt="green iguana"
        />
        <CardContent>
          <Typography  className=" fw-bolder" gutterBottom  component="div" sx={{fontSize:'30px',fontWeight: '700px',lineHeight: '34px',color:"#123821",fontFamily:"DM Sans"}}>
            Lizard
          </Typography>
          <Typography  color="text.secondary" sx={{fontSize:'17px',lineHeight: '24px',fontWeight: '400px',fontFamily:"DM Sans"}}>
            Lizards are a widespread group of squamate reptiles, with over 6,000
            species, ranging across all continents except Antarctica
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
            Lizard
          </Typography>
          <Typography  color="text.secondary" sx={{fontSize:'17px',lineHeight: '24px',fontWeight: '400px',fontFamily:"DM Sans"}}>
            Lizards are a widespread group of squamate reptiles, with over 6,000
            species, ranging across all continents except Antarctica
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
