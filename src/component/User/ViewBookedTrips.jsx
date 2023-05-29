import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Table from 'react-bootstrap/Table';

import  NavBar from './NavBar';
const ViewBookedTrips = () => {
  const [bookedTrips, setBookedTrips] = useState([]);
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    checkLoggedIn();
    fetchBookedTrips();
  }, []);

  const checkLoggedIn = () => {
    const token = localStorage.getItem('token');
    setIsLoggedIn(!!token);
  };

  const fetchBookedTrips = () => {
    const token = localStorage.getItem('token');

    axios
      .get('https://localhost:7170/api/Trip/GetMyTrips', {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((response) => {
        if (response.data.success) {
          setBookedTrips(response.data.result);
        } else {
          console.error('Failed to fetch booked trips');
        }
      })
      .catch((error) => {
        console.error('Error:', error);
      });
  };

  return (
    <div>
      <NavBar /> <br/> <br/> <br/> <br/> <br/> <br/> <br/>
      <h3 className='fw-bolder text-center'>My Booked Trips</h3>
      {bookedTrips.length === 0 ? (
        <p className='fw-bolder text-center'>No trips booked.</p>
      ) : (
        <Table striped bordered hover className='container'>
          <thead>
            <tr>
              <th>#</th>
              <th>From</th>
              <th>To</th>
              <th>Date</th>
            </tr>
          </thead>
          <tbody>
            {bookedTrips.map((trip, index) => (
              <tr key={trip.id}>
                <td>{index + 1}</td>
                <td>{trip.from}</td>
                <td>{trip.to}</td>
                <td>{trip.date}</td>
              </tr>
            ))}
          </tbody>
        </Table>
      )}
    </div>
  );
};

export default ViewBookedTrips;
