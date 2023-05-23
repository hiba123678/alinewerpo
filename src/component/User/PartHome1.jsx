import React from 'react'
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Unstable_Grid2';
import home5 from './image/home5.jpg';
import home6 from './image/home6.png';
import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
import  SearchForm from './SearchForm.jsx';
import  AboutHome from './AboutHome.jsx';
import Footer from './Footer.jsx';
import Satisic from './Satisic.jsx';
import  Destenation from './Destenation.jsx';
import  Benifts from './Benifts.jsx';
import  Choose from './Choose.jsx';
import Sliderw from './Sliderw.jsx';
import Company from './Company.jsx';
import Fly from './Fly';
import Paper from '@mui/material/Paper';
import What from './What.jsx';
import Avatar from '@mui/material/Avatar' ;
import Beforfoot from './Beforfoot.jsx';
import NavBar from './NavBar.jsx';
import ViewTrip from './ViewTrip';import { useRef } from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import  ViewBookedTrips from './ViewBookedTrips';
import SurveyForm from './SurveyForm';
const styles = {
  paperContainer: {
      // backgroundImage: `url(${home5})`,
      backgroundColor:'#f6f5ee',
      height:'98vh' ,
      // backgroundSize: '100% 100%',
      // resize: 'both',
      // backgroundRepeat:' no-repeat',
     width:'100%' ,
     paddingTop:'100px',
   

  }
};
function PartHome1() {
  const sectionRef = useRef(null);
  return (
    <>

  <NavBar/>
        {/*
     

      
        <p className=' text-capitalize  text-white mt-3  fw-bolder lh-base' style={{fontSize:"50px"}}>
          
        The best flight deals to everywhere, <br/>from anywhere
          </p>
        
    </Box> */}
<Box></Box>
<Box  className='d-flex  align-items-center pb-5 '  style={styles.paperContainer} >

<Container className='pt-5 pb-5'>
 
<Grid container spacing={2}>
  <Grid item xs={12} md={5}>
  <p className="fs-2 fw-bold" style={{fontSize: '20px', fontWeight: '700px', lineHeight: '20px', color:"#a79132"}}>Private Jets Charters</p>
  <p className='fw-bold  fw-bolder lh-base' style={{fontSize: '55px',color:"#00205"}}>Save Time & 
Fly with Comfort</p>
<Button variant="contained" size="large"  className="rounded-pill" style={{backgroundColor:"#a79132" ,height:'65px', width:"250px"}}>Call Us</Button>
  </Grid>




  <Grid item xs={12} md={7} 	sx={{ display: { xs: 'none',md: 'block', sm: 'none' } }}>
  {/* <img src={home6} style={{width:"130vh", height:"34vh",position: 'absolute', marginLeft:}}/> */}
  <Avatar variant="square" alt="Example Alt" src={home6} sx={{width:'100%', height:'auto'}} />
 
  </Grid>
 
</Grid>


  </Container>

</Box>
<SearchForm/>
{/* <SearchForm/><br/><br/> */}


<AboutHome />
<Company />
<Fly/>
<Choose />
<Benifts/>
<Satisic/>
<What/>
<div id="section1">
<Beforfoot/></div>
<Footer/>


<SurveyForm/>





{/* <Sliderw/> */}
{/* <br/><br/>
<Fly/>
<Destenation/>
<Choose />
<Benifts/>
<Satisic/>
<Footer/> */}
    </>
  )
}

export default PartHome1;
// #274291