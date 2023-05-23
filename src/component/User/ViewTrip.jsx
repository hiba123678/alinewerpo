import React from 'react'
import { useState, useEffect } from 'react';
import Table from 'react-bootstrap/Table';
import Button from 'react-bootstrap/Button';
import NavBar from './NavBar';
function ViewTrip() {
   
  
  const handleBooking = async (id) => {
    const token = localStorage.getItem('token');

    const response = await axios.post('http://localhost:7170/api/Trip/${id}',  {
      headers: {
        Authorization: `Bearer ${token}`,
      },
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
    
        setData(tripdata);
        // getDat();
    
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
