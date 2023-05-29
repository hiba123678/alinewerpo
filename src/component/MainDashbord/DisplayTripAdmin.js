import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Table from 'react-bootstrap/Table';
import Button from 'react-bootstrap/Button';

const DisplayTripAdmin = () => {
  const [trips, setTrips] = useState([]);

  useEffect(() => {
    getTrips();
  }, []);

  const getTrips = () => {
    const params = {
      From: '',
      To: '',
      Date: '',
    };

    axios
      .get('https://localhost:7170/api/Trip/GetAll')
      .then((response) => {
        if (response.data.success) {
          setTrips(response.data.result);
        } else {
          console.error('Failed to fetch trips');
          toast.error('Failed to fetch trips. Please try again.');
        }
      })
      .catch((error) => {
        console.error('Error:', error);
        toast.error('An error occurred while fetching trips. Please try again.');
      });
  };

  const handleDeleteTrip = (tripId) => {
    // axios
    //   .delete(`/api/Trip/Delete/${tripId}`)
    //   .then((response) => {
    //     if (response.data.success) {
    //       toast.success('Trip deleted successfully!');
    //       // Perform any additional actions or update UI as needed
    //       getTrips(); // Refresh the trips list after deletion
    //     } else {
    //       console.error('Failed to delete trip');
    //       toast.error('Failed to delete trip. Please try again.');
    //     }
    //   })
    //   .catch((error) => {
    //     console.error('Error:', error);
    //     toast.error('An error occurred while deleting the trip. Please try again.');
    //   });
    console.log(tripId)
  };

  const handleUpdateTrip = (tripId) => {
    // Handle update trip logic
    console.log(`Update trip with id ${tripId}`);
  };

  return (
    <div>
      <h3>All Trips</h3>
      <Table striped bordered hover>
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
          {trips.map((trip, index) => (
            <tr key={trip.id}>
              <td>{index + 1}</td>
              <td>{trip.from}</td>
              <td>{trip.to}</td>
              <td>{trip.date}</td>
              <td>
                <Button variant="danger" onClick={() => handleDeleteTrip(trip.id)}>
                  Delete
                </Button>
                <Button variant="primary" onClick={() => handleUpdateTrip(trip.id)}>
                  Update
                </Button>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
      <ToastContainer />
    </div>
  );
};

export default DisplayTripAdmin;
