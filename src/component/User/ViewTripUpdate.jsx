
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import  NavBar from './NavBar';
import Table from 'react-bootstrap/Table';
import Button from 'react-bootstrap/Button';
const ViewTripUpdate = () => {
  const [trips, setTrips] = useState([]);
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    getTrips();
    checkLoggedIn();
  }, []);

  const getTrips = () => {
    axios
      .get('https://localhost:7170/api/Trip/GetAll', {
        params: {
          From: '',
          To: '',
          Date: '',
        },
      })
      .then((response) => {
        if (response.data.success) {
            setTrips(response.data.result);
          } else {
            console.error('Failed to fetch trips');
          }
      })
      .catch((error) => {
        console.error('Error:', error);
      });
  };


  const checkLoggedIn = () => {
    const token = localStorage.getItem('token');
    setIsLoggedIn(!!token);
  };

  const handleBookNow = (tripId) => {
    if (!isLoggedIn) {
      alert('Please log in before booking.');
      return;
    }

    const token = localStorage.getItem('token');

    axios
      .post(
        'https://localhost:7170/api/Trip/BookTrip',
        { tripId },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      )
      .then((response) => {
        if (response.data.success) {
            alert('Trip booked successfully!');
            // Perform any additional actions or update UI as needed
          } else {
            alert('Failed to book the trip. Please try again.');
          }
      })
      .catch((error) => {
        console.error('Error:', error);
        alert('Failed to book the trip. Please try again.');
      });
  };

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
          {trips.length > 0 ? (
            trips.map((trip, index) => (
              <tr key={trip.id}>
                <td>{index + 1}</td>
                <td>{trip.from}</td>
                <td>{trip.to}</td>
                <td>{trip.date}</td>
                <td>
                  <button
                    className='btn btn-primary'
                    onClick={() => handleBookNow(trip.id)}
                  >
                    Book Now
                  </button>
                </td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan={5}>No trips available</td>
            </tr>
          )}
        </tbody>
      </Table>
    </>
  );
};

export default ViewTripUpdate;
