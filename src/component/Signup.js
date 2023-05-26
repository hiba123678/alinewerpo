import * as React from 'react';
import { useState } from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
// import Link from '@mui/material/Link';
import { Link } from 'react-router-dom';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import axios from 'axios';

function Copyright(props) {
  return (
    <Typography variant="body2" color="text.secondary" align="center" {...props}>
      {'Copyright © '}
      <Link color="inherit" >
       jetlet
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

const theme = createTheme();

export default function SignUp() {
  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    console.log({
      email: data.get('email'),
      password: data.get('password'),
    });
  };


const [firstName, setFirstName]=useState('');
const [lastName, setLastName]=useState('');
const [phoneNumber, setPhoneNumber]=useState('');
const [email, setEmail]=useState('');
const [password, setPassword]=useState('');

const handeleFirstNameChange=(value)=>{
  setFirstName(value);
}

const handeleEmailChange=(value)=>{
  setEmail(value);
}


const handelelastNameChange=(value)=>{
  setLastName(value);
}


const handelePhoneNumberChange=(value)=>{
  setPhoneNumber(value);
}

const handelePasswordChange=(value)=>{
  setPassword(value);
}

const handelSave=()=>{

const data ={
firstName: firstName,
lastName: lastName,
phoneNumber: phoneNumber,
password: password,
email: email

};
const url='https://localhost:7170/api/Account/Register';
axios.post(url,data).then((result) => {
  if(result.data.statusCode == '200')
  alert('data saved');
  else
  alert(result.data)
}).catch((error)=>{alert(error);})

}

  return (
    <ThemeProvider theme={theme}>
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
          <Typography component="h1" variant="h5">
            Sign up
          </Typography>
          <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 3 }}>
            <Grid container spacing={2}>
              <Grid item xs={12} sm={6}>


                <TextField
                  autoComplete="given-name"
                  name="firstName"
                  required
                  fullWidth
                  id="firstName"
                  label="First Name"
                  autoFocus
               onChange={(e)=>handeleFirstNameChange(e.target.value)} />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  required
                  fullWidth
                  id="lastName"
                  label="Last Name"
                  name="lastName"
                  autoComplete="family-name"
                  onChange={(e)=>handelelastNameChange(e.target.value)}  />
              </Grid>
              <Grid item xs={12} >
                <TextField
                  required
                  fullWidth
                  id="phoneNumber"
                  label="phone Number"
                  name="phoneNumber"
                  autoComplete="phoneNumber"
                  onChange={(e)=>handelePhoneNumberChange(e.target.value)}  />
              </Grid>

              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  id="email"
                  label="Email Address"
                  name="email"
                  autoComplete="email"
                  onChange={(e)=>handeleEmailChange(e.target.value)} />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  name="password"
                  label="Password"
                  type="password"
                  id="password"
                  autoComplete="new-password"
                  onChange={(e)=>handelePasswordChange(e.target.value)} />
              </Grid>
            
            </Grid>
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            onClick={()=>handelSave()}>
              Sign Up
            </Button>
            <Grid container justifyContent="flex-center">
              <Grid item>
              <p>Already have an account? <Link to="/login">Login</Link></p>
              </Grid>
            </Grid>
          </Box>
        </Box>
        <Copyright sx={{ mt: 5 }} />
      </Container>
    </ThemeProvider>
  );
}