import React from 'react'
import { useState, useEffect } from 'react';
import Table from 'react-bootstrap/Table';
import Button from 'react-bootstrap/Button';
import NavBar from './NavBar';
function ViewTrip() {
   
  
  // const handleBooking = (id) => {
  //   const token = localStorage.getItem('token');

  //   const response =  axios.post('http://localhost:7170/api/Trip/',  {
  //     headers: {
  //       Authorization: `Bearer ${token}`,
  //     },
  //   });
  // };



  //const isLoggedIn = localStorage.getItem('isLoggedIn') === 'true';

  const handleBooking = (tripId) => {
    const token = localStorage.getItem('token');

    // if (!loggedIn) {
    //   // User is not logged in, handle authentication logic here (e.g., redirect to login page)
    //   console.log('Please log in to book a trip.');
    //   return;
    // }

    axios
      .post('http://localhost:7170/api/Trip/BookTrip', { tripId }, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((response) => {
        // Handle the response from the API
        console.log('Trip booked successfully!', response.data);
      })
      .catch((error) => {
        // Handle any errors that occur during the API request
        console.error('An error occurred while booking the trip:', error);
      });
  };












  const tripdata=[
        {id:1,
            From:'syria',
        To:'lebanon',
        Date:'22/3/2023'},
        
        {id:2,
            From:'syria2',
        To:'lebanon2',
        Date:'22/3/2023'},
        
        { id:3,
            From:'syria3',
        To:'lebanon3',
        Date:'22/3/2023'},
        
        {id:4,
            From:'syria4',
        To:'lebanon4',
        Date:'22/3/2023'},
        
          ]
          
        
    const [data , setData]=useState([]);
    useEffect( ()=>{
    
       // setData(tripdata);
         getDat();
    
    },[])
    const getData=()=>{

        axios.get('http://localhost:7170/api/Trip/GetAll').then((result)=>{setData(result.data)}).catch((error)=>{console.log(error)})
        
        }
       
      
 
    return (
        <>
        <NavBar /> <br/> <br/> <br/> <br/> <br/> <br/> <br/>
            <h3 className='fw-bolder text-center'>All Trip in System:</h3> <br/>
    <Table striped bordered hover className='container'>
      <thead>
        <tr>
          <th>#</th>
          <th>From</th>
          <th>To</th>
          <th>Date</th>
          <th>Action</th>
        </tr>
      </thead>
      <tbody>
        {data && data.length> 0 ? 
        data.map((item,index)=>{
            return(
            <tr key={index}>
                <td>{index+1}</td>
                <td>{item.From}</td>
                <td>{item.To}</td>
                <td>{item.Date}</td>
                <td colSpan={2}>
                <button className='btn btn-primary' onClick={()=> handleBooking(item.id)}>BookN Now</button> &nbsp;
              
                </td>
              </tr>)
        })
    :'looding'}
        
      
      </tbody>
    </Table>
       </>
  )
}

export default ViewTrip;
