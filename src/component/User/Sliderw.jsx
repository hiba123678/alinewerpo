import { Box } from '@mui/material';
import React from 'react';
import SimpleImageSlider from "react-simple-image-slider";
import Grid from '@mui/material/Grid';

const images = [
  { url:  require('./image/slid1.jpg') },
  { url:  require('./image/slid1.jpg') },
  { url: require('./image/slid1.jpg') },
  
];
const Sliderw = () => {
  return (
    // <Box   sx={{width:'auto', height:'auto'}}  className='container d-flex justify-content-center'> 
    
    //      <SimpleImageSlider  xs={12} md={6}
    //     width={400}
    //     height={500}
    //     images={images}
    //     showBullets={true}
    //     showNavs={true}
    //   />
  
    // </Box>
<>

<Box sx={{ flexGrow: 1}} className="d-flex justify-content-center">
      <Grid container spacing={2}>
        <Grid item xs={12} md={6}>
        <SimpleImageSlider  className="w-50 h-50"
        width={'100%'}
        height={500}
        images={images}
        showBullets={true}
        showNavs={true}
      />
      
        </Grid>
        <Grid item xs={12} md={6}>
       /<p></p>
        </Grid>
      </Grid>
    </Box>








</>




  )
}

export default Sliderw;