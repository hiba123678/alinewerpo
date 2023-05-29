import * as React from 'react';
import { useState, useEffect } from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
// import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import axios from 'axios';
import PartHome1 from './User/PartHome1.jsx';
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';
function Copyright(props) {
  return (
    <Typography variant="body2" color="text.secondary" align="center" {...props}>
      {'Copyright © '}
      <Link color="inherit">
        Your Website
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

const theme = createTheme();

export default function SignIn() {
  const navigate = useNavigate();
  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    console.log({
      userName: data.get('userName'),
      password: data.get('password'),
    });
  };
  const [userName, setEmail]=useState('');
  const [password, setPassword]=useState('');

  
  const handeleEmailChange=(value)=>{
    setEmail(value);
  }

  const handelePasswordChange=(value)=>{
    setPassword(value);
  }


  const handelLogin= () => {

    try{
 
    const data ={

    password: password,
    userName: userName
    
    };

    const url='https://localhost:7170/api/Account/login';
    axios.post(url,data).then((result) => {
      if(result.data.statusCode == '200')
     {
      const isAdmin =result.data.result.isAdmin; 
localStorage.setItem('token', result.data.result.accessToken);

if (isAdmin) {
  navigate('/dashboard');
} else {
  navigate('/');
}
} else {
alert('Login failed. Please try again.');
}
    }).catch((error)=>{alert(error);})




    }catch (error) {
  
      console.log(error);
    }
    
    };


 useEffect(() => {
    const token = localStorage.getItem('token');

    if (token) {
      <PartHome1/>
    }
  }, []);

  return (
    <ThemeProvider theme={theme} className="">
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <Box
          sx={{
            marginTop: 8,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5" className="fw-bold text-uppercase" style={{fontSize:"50px"}}>
            Sign in
          </Typography>
          <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
            <TextField
              margin="normal"
              required
              fullWidth
              id="userName"
              label="Email Address"
              name="userName"
              autoComplete="email"
              autoFocus
              onChange={(e)=>handeleEmailChange(e.target.value)} />
            <TextField
              margin="normal"
              required
              fullWidth
              name="password"
              label="Password"
              type="password"
              id="password"
              autoComplete="current-password"
              onChange={(e)=>handelePasswordChange(e.target.value)} />
             
          
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
              onClick={()=>handelLogin()} >
              Sign In
            </Button>
            <Grid container>
             
              <Grid item>
              <p>Don't have an account? <Link to="/register">Register</Link></p>
              </Grid>
            </Grid>
          </Box>
        </Box>
        <Copyright sx={{ mt: 8, mb: 4 }} />
      </Container>
    </ThemeProvider>
  );
}