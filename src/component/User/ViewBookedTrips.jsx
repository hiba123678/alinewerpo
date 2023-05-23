import React, { useEffect, useState } from 'react';
import axios from 'axios';

const ViewBookedTrips = () => {
  const [bookedTrips, setBookedTrips] = useState([]);

  useEffect(() => {
    const fetchBookedTrips = async () => {
      try {
        const token = localStorage.getItem('token');
        const response = await axios.get('/api/booked-trips', {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
        setBookedTrips(response.data);
      } catch (error) {
        console.log(error);
      }
    };

    fetchBookedTrips();
  }, []);

  if (bookedTrips.length === 0) {
    return <div>No trips booked yet.</div>;
  }

  return (
    <div>
      <h1>View Booked Trips</h1>
      {bookedTrips.map((trip) => (
        <div key={trip.id}>
          <p>Trip Name: {trip.From}</p>
          <p>Booking Date: {trip.To}</p>
          <p>Booking Date: {trip.Date}</p>
          {/* Display other trip details */}
        </div>
      ))}
    </div>
  );
};

export default ViewBookedTrips;
